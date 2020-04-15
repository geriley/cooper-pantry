export enum SurveyTypeDTO {
    ShortFoodSecurity,
}

export enum SurveyResultLevel {
    Info,
    Warning,
    Critical,
}

export interface ISurveyScoreDTO {
    surveyType: SurveyTypeDTO;
    score: number;
    surveyResultLevel: SurveyResultLevel;
}