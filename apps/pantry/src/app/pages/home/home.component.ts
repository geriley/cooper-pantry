import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Client } from 'twilio-chat';

@Component({
    selector: 'cooper-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    public test() {
        const thing: Client.Options = {

        }
        Client.create('', { 

        }).then((client: Client) => {
            client.getChannelBySid
        })
    }
}