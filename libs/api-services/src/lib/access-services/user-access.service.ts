import { Injectable } from '@angular/core';
import { IPayload, IPayloadData, IUserDTO, UserRole } from '@cooper/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISurveyScoreDTO, SurveyResultLevel } from '../../../../api-interfaces/src/lib/dto/survey-score.model';
import { CooperResourceType } from '../../../../api-interfaces/src/lib/resource-types.enum';
import { UserDataService } from '../http-services/user-data.service';
import { FoodSecurityLevel, ICustomerDomain } from '../interfaces/customer.interface';

@Injectable()
export class UserAccessService {
    constructor(private http: UserDataService) { }

    public updatePantryRelationship(id: string, pantryId: string) {
        return this.http.addPantryRelationship(id, { data: { type: 'employer', id: pantryId }});
    }
    public getById(id: string): Observable<IPayloadData<IUserDTO>> {
        return this.http.getUser(id).pipe(
            map((payload) => payload.data as IPayloadData<IUserDTO>)
        );
    }

    public updateUser(data: IPayloadData<IUserDTO>): Observable<IPayload<IUserDTO>> {
        return this.http.updateUser({
            data: [data]
        });
    }

    public getCustomers(): Observable<ICustomerDomain[]> {
        return this.http.getUserList().pipe(
            map((payload) => {
                const data = payload.data as IPayloadData<IUserDTO>[];
                return data
                    .filter((d) => d?.attributes?.userRole === UserRole.Customer)
                    .map((d) => {
                    const foodSecuritySurveys = d?.relationships ? d.relationships[CooperResourceType.SurveyResponse] : [];
                    const mostRecentFoodSecuritySurvey = Array.isArray(foodSecuritySurveys) ? foodSecuritySurveys[0] : foodSecuritySurveys;
                    const surveyId = mostRecentFoodSecuritySurvey?.id;
                    const survey: IPayloadData<ISurveyScoreDTO> = payload?.included?.find((i) => i.id === surveyId);
                    return {
                        userId: d.id,
                        name: {
                            first: d?.attributes?.firstName,
                            last: d?.attributes?.lastName
                        },
                        mobilePhoneNumber: d?.attributes?.mobilePhone ? `+1${d.attributes.mobilePhone}` : undefined,
                        foodSecurityLevel: this.convertSurveyResultLevel(survey?.attributes?.surveyResultLevel),
                    };
                });
            })
        )
    }

    private convertSurveyResultLevel(surveyLevel: SurveyResultLevel): FoodSecurityLevel {
        switch (surveyLevel) {
            case SurveyResultLevel.Info:
                return FoodSecurityLevel.High;
            case SurveyResultLevel.Warning:
                return FoodSecurityLevel.Medium;
            case SurveyResultLevel.Critical:
                return FoodSecurityLevel.Low;
            default:
                return FoodSecurityLevel.Unknown;
        }
    }
}