import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
	private readonly _destroy$ = new Subject<void>();

	ngOnDestroy() {
		this._destroy$.next();
		this._destroy$.complete();
	}

	protected takeUntilDestroy = <T>() => takeUntil<T>(this._destroy$);
}
