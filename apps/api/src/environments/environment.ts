import { environment as dev } from './enviornment.dev';

export const environment = {
  production: false,
  twilioAccount: dev ? dev.twilioAccount : 'AC##',
  twilioChatSid: dev ? dev.twilioChatSid : 'IS##',
  twilioChatApiKey: dev ? dev.twilioChatApiKey : 'SK##',
  twilioChatApiSecret: dev ? dev.twilioChatApiSecret : '##',
};
