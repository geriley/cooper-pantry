export enum AutopilotAnswerType {
    YES_NO = 'Twilio.YES_NO',
    SurveyFrequency = 'SurveyFrequency',
}

export interface IAutopilotAnswer {
    answer: string;
    type: string;
}

export interface IAutopilotAnswers {
    [key: string]: IAutopilotAnswer;
}

export interface ITwilioAutopilotResponse {
    twilio: {
        chat: {
            From: string;
        };
        collected_data: {
            [taskName: string]: {
                status: string;
                answers: IAutopilotAnswers
            };
        }
    }

}
