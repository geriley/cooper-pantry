import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TwilioChatBotService } from '../services/twilio-chat-bot.service';


@Component({
	selector: 'cooper-bot-chat',
	providers: [TwilioChatBotService],
	templateUrl: './bot-chat.component.html',
	styleUrls: ['./bot-chat.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotChatComponent {
	constructor(private service: TwilioChatBotService) {
		this.service.connect();
	}

	public messages = this.service.messages;

	public sendMessage(msg) {
		this.service.sendMessage(msg);
	}
}