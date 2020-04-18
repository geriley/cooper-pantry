import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter, map, shareReplay } from 'rxjs/operators';
import { FirebaseService } from './common';

@Component({
	selector: 'cooper-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(
		private router: Router,
		private fire: FirebaseService
	) { }

	public loggedIn = this.fire.isLoggedIn;

	public isNbRoute = this.router.events.pipe(
		filter(event => event instanceof ChildActivationEnd),
		map((event: any) => event.snapshot['_routerState'].url.indexOf('customer/bot') > -1),
		shareReplay(),
	);

	public ngOnInit(): void {
		this.fire.init();
	}
}
