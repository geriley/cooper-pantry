import { ChangeDetectionStrategy, Component, Injectable } from "@angular/core";
import { Message, SendMessageEvent, User } from '@progress/kendo-angular-conversational-ui';
import { from, merge, Observable, Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';

@Injectable()
export class ChatService {
	public readonly responses: Subject<string> = new Subject<string>();

	public submit(question: string): void {
		const length = question.length;
		const answer = `"${question}" contains exactly ${length} symbols.`;

		setTimeout(
			() => this.responses.next(answer),
			1000
		);
	}
}

@Component({
	selector: 'cooper-bot-chat',
	providers: [ChatService],
	templateUrl: './bot-chat.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotChatComponent {
	public feed: Observable<Message[]>;

	public readonly user: User = {
		id: 1
	};

	public readonly bot: User = {
		id: 0
	};

	private local: Subject<Message> = new Subject<Message>();

	constructor(private svc: ChatService) {
		const hello: Message = {
			author: this.bot,
			suggestedActions: [{
				type: 'reply',
				value: 'Neat!'
			}, {
				type: 'reply',
				value: 'Thanks, but this is boring.'
			}],
			timestamp: new Date(),
			text: 'Hello, this is a demo bot. I don`t do much, but I can count symbols!'
		};

		// Merge local and remote messages into a single stream
		this.feed = merge(
			from([hello]),
			this.local,
			this.svc.responses.pipe(
				map((response): Message => ({
					author: this.bot,
					text: response
				})
				))
		).pipe(
			// ... and emit an array of all messages
			scan((acc: Message[], x: Message) => [...acc, x], [])
		);
	}

	public sendMessage(e: SendMessageEvent): void {
		this.local.next(e.message);

		this.local.next({
			author: this.bot,
			typing: true
		});

		this.svc.submit(e.message.text);
	}
}