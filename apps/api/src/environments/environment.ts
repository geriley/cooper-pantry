import { environment as dev } from './enviornment.dev';

export const environment = {
  production: false,
  twilioAccount: dev ? dev.twilioAccount : 'AC##',
  twilioAuthToken: dev ? dev.twilioAuthToken : 'auth_token',
  twilioChatSid: dev ? dev.twilioChatSid : 'IS##',
  twilioChatApiKey: dev ? dev.twilioChatApiKey : 'SK##',
  twilioChatApiSecret: dev ? dev.twilioChatApiSecret : '##',
  twilioChatAutopilotUrl: dev ? dev.twilioChatAutopilotUrl : 'https://channels.autopilot.twilio.com/v1/##',
};
