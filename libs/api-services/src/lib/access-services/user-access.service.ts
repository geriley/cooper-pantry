import { Injectable } from '@angular/core';
import { UserDataService } from '../http-services/user-data.service';
import { IPayloadData, IUserDTO, IPayload } from '@cooper/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICustomerDomain, FoodSecurityLevel } from '../interfaces/customer.interface';
import { IPayloadDataRelationship } from '../../../../api-interfaces/src/lib/dto/payload.model';
import { ISurveyScoreDTO, SurveyResultLevel } from '../../../../api-interfaces/src/lib/dto/survey-score.model';
import { CooperResourceType } from '../../../../api-interfaces/src/lib/resource-types.enum';

@Injectable()
export class UserAccessService {
    constructor(private http: UserDataService) { }

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
                return data.map((d) => {
                    const foodSecuritySurveys = d.relationships[CooperResourceType.SurveyResponse];
                    const mostRecentFoodSecuritySurvey = Array.isArray(foodSecuritySurveys) ? foodSecuritySurveys[0] : foodSecuritySurveys;
                    const surveyId = mostRecentFoodSecuritySurvey.id;
                    const survey: IPayloadData<ISurveyScoreDTO> = payload.included.find((i) => i.id === surveyId);                    
                    return { 
                        userId: d.id,
                        foodSecurityLevel: this.convertSurveyResultLevel(survey.attributes.surveyResultLevel),
                    };
                });
            })
        )
    }

    private convertSurveyResultLevel(surveyLevel: SurveyResultLevel): FoodSecurityLevel {
        switch(surveyLevel) {
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