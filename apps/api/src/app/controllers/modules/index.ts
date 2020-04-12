import { PantryHttpModule } from './pantry-http.module';
import { SurveyResponseHttpModule } from './survey-response-http.module';
import { CommunicationHttpModule } from './communication-http.module';
import { UserHttpModule } from './user-http.module';

export const controllerModules = [
    PantryHttpModule,
    SurveyResponseHttpModule,
    CommunicationHttpModule,
    UserHttpModule
];