import { Pantry } from './pantry.entity';
import { SurveyResponse } from './survey-response.entity'
import { User } from './user.entity';
import { Address } from './address.entity';

export * from './modules';

export { Pantry } from './pantry.entity';
export { SurveyResponse } from './survey-response.entity';
export { User } from './user.entity';

export const entities = [
    Pantry,
    SurveyResponse,
    Address,
    User,
];