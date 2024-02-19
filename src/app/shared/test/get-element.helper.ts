import { ComponentFixture } from '@angular/core/testing';

export const getElementHelper = <T extends HTMLElement>(fixture: ComponentFixture<unknown>, selector: string): T =>
	fixture.nativeElement.querySelector(`[data-test-id="${selector}"]`);

export const getElementsHelper = <T extends HTMLElement>(fixture: ComponentFixture<unknown>, selector: string): T[] =>
	fixture.nativeElement.querySelectorAll(`[data-test-id="${selector}"]`);
