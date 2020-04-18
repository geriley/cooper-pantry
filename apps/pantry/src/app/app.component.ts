import { Component } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter, map, shareReplay } from 'rxjs/operators';

@Component({
	selector: 'cooper-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(
		private router: Router
	) { }

	public isNbRoute = this.router.events.pipe(
		filter(event => event instanceof ChildActivationEnd),
		map((event: any) => event.snapshot['_routerState'].url.indexOf('customer/bot') > -1),
		shareReplay(),
	);
}
