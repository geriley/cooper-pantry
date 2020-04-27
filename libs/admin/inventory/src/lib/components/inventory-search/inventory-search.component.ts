import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { InventoryAccessService, IInventoryDomain } from '@cooper/api-services';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, tap, startWith, scan, skipUntil, skipWhile, flatMap } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';


@Component({
    selector: 'cooper-inventory-search',
    templateUrl: './inventory-search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./inventory-search.component.scss']
})
export class InventorySearchComponent {
    constructor(
        private searchService: InventoryAccessService,
    ) { }

    @Input('pantryId') public set id(id: string) {
        this.pantryId.next(id);
    };
    @Output() public results = new EventEmitter<IInventoryDomain[]>();
    @Output() public selectedIds = new EventEmitter<string[]>();
    @Output() public next = new EventEmitter<void>();

    private pantryId = new BehaviorSubject<string>(undefined);
    public loading = new BehaviorSubject<boolean>(false);
    public searchQuery = new FormControl('');
    public inventory: Observable<IInventoryDomain[]> = this.searchQuery.valueChanges.pipe(
        startWith(' '),
        debounceTime(200),
        tap(() => this.loading.next(true)),
        switchMap((query) => this.pantryId.pipe(
            skipWhile(id => id === undefined),
            flatMap((id) => this.searchService.search(id, query ?? ''))
        )),
        tap(() => this.loading.next(false)),
        tap((res) => this.results.emit(res))
    );

    public setSelections(fdcIds: string[]) {
        this.selectedIds.emit(fdcIds);
    }

}