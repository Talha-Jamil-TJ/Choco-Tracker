import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '@core/base/base.component';
import { Store } from '@ngxs/store';
import { Brand } from '@shared/enum/brand';
import { UpdateProductDetail } from '@store/product-detail/product-detail.action';
import { ProductDetailState } from '@store/product-detail/product-detail.state';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PriceComponent } from './children/price/price.component';

interface DetailComponentForm {
	name: FormControl<string>;
	brand: FormControl<string>;
}

@Component({
	selector: 'app-detail',
	standalone: true,
	imports: [
		CommonModule,
		NzDescriptionsModule,
		PriceComponent,
		NzButtonComponent,
		NzIconDirective,
		ReactiveFormsModule,
		NzInputModule,
	],
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.scss',
})
export class DetailComponent extends BaseComponent implements OnInit {
	product = toSignal(this._store.select(ProductDetailState.product), {
		initialValue: null,
	});

	form!: FormGroup<DetailComponentForm>;

	isNameUpdateLoading = signal(false);
	isBrandUpdateLoading = signal(false);

	constructor(private _store: Store) {
		super();
	}

	ngOnInit() {
		this._initForm();
	}

	onEditName() {
		this.form.controls.name.enable();
	}

	onSubmitEditName() {
		this.isNameUpdateLoading.set(true);
		const control = this.form.controls.name;

		this._store
			.dispatch(new UpdateProductDetail({ name: control.value }))
			.pipe(this.takeUntilDestroy())
			.subscribe(() => {
				control.reset(this.product()?.name);
				control.disable();
				this.isNameUpdateLoading.set(false);
			});
	}

	onCancelEditName() {
		this.form.controls.name.reset(this.product()?.name);
		this.form.controls.name.disable();
	}

	onEditBrand() {
		this.form.controls.brand.enable();
	}

	onSubmitEditBrand() {
		this.isBrandUpdateLoading.set(true);
		const control = this.form.controls.brand;

		this._store
			.dispatch(new UpdateProductDetail({ brand: control.value as Brand }))
			.pipe(this.takeUntilDestroy())
			.subscribe(() => {
				control.reset(this.product()?.brand);
				control.disable();
				this.isBrandUpdateLoading.set(false);
			});
	}

	onCancelEditBrand() {
		this.form.controls.brand.reset(this.product()?.brand);
		this.form.controls.brand.disable();
	}

	private _initForm() {
		this.form = new FormGroup({
			name: new FormControl(this.product()?.name as string, { nonNullable: true }),
			brand: new FormControl(this.product()?.brand as string, { nonNullable: true }),
		});

		this.form.controls.name.disable();
		this.form.controls.brand.disable();
	}
}
