import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter, map, shareReplay } from 'rxjs/operators';
import { FirebaseService } from './common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserContextFacade } from '@cooper/state/user-context';
import { UserRole } from '@cooper/api-interfaces';

@Component({
	selector: 'cooper-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(
		private router: Router,
		private fire: FirebaseService,
		private snack: MatSnackBar,
		private userContext: UserContextFacade,
	) { }

	public loggedIn = this.fire.isLoggedIn;

	public isNbRoute = this.router.events.pipe(
		filter(event => event instanceof ChildActivationEnd),
		map((event: any) => event.snapshot['_routerState'].url.indexOf('customer/bot') > -1),
		shareReplay(),
	);

	public pantryLink = this.userContext.user.pipe(
		map((u) => u.associatedPantryId ? `pantry/${u.associatedPantryId}` : undefined)
	);

	public isStaff = this.userContext.user.pipe(
		map((u) => u.role === UserRole.PantryAdmin)
	);


	public logout() {
		this.fire.logout();
		this.snack.open('Logged out', undefined, { duration: 2000 });
	}

	public ngOnInit(): void {
		this.fire.init();
	}
}
