import { ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class InputMask implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private el;
    mask: string;
    style: string;
    styleClass: string;
    placeholder: string;
    slotChar: string;
    alias: string;
    options: any;
    unmask: boolean;
    clearMaskOnLostFocus: boolean;
    clearIncomplete: boolean;
    size: number;
    maxlength: number;
    tabindex: string;
    disabled: boolean;
    readonly: boolean;
    onComplete: EventEmitter<any>;
    onInComplete: EventEmitter<any>;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    onBlur(): void;
    ngOnDestroy(): void;
}
