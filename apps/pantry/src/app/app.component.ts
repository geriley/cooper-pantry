import { Component, Injectable } from '@angular/core';
import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { Observable, Subject, merge, from } from 'rxjs';
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
	selector: 'cooper-root',
	providers: [ ChatService ],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
		from([ hello ]),
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
	// public user: User = {
	// 	id: 1,
	// };

	// public feed: Observable<Message> = of(2000).pipe(
	// 	map((_, i) => {
	// 		return {
	// 			author: {
	// 				id: i % 2,
	// 			},
	// 			text: `Hmm...${i}`
	// 		}
	// 	})		
	// );
}
