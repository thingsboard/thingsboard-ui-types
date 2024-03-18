import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { TranslateService } from '@ngx-translate/core';
import { FloatLabelType, MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import { WidgetTypeInfo } from '@shared/models/widget.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class WidgetTypeAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    translate: TranslateService;
    private widgetService;
    private fb;
    private dirty;
    selectWidgetTypeFormGroup: UntypedFormGroup;
    modelValue: WidgetTypeInfo | null;
    label: any;
    placeholder: string;
    floatLabel: FloatLabelType;
    appearance: MatFormFieldAppearance;
    subscriptSizing: SubscriptSizing;
    required: boolean;
    disabled: boolean;
    excludeWidgetTypeIds: Array<string>;
    widgetTypeInput: ElementRef;
    filteredWidgetTypes: Observable<Array<WidgetTypeInfo>>;
    searchText: string;
    private propagateChange;
    constructor(translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetTypeInfo | string | null): void;
    updateView(value: WidgetTypeInfo | null): void;
    displayWidgetTypeFn(widgetType?: WidgetTypeInfo): string | undefined;
    fetchWidgetTypes(searchText?: string): Observable<Array<WidgetTypeInfo>>;
    getWidgetTypes(pageLink: PageLink, result?: Array<WidgetTypeInfo>): Observable<Array<WidgetTypeInfo>>;
    onFocus(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetTypeAutocompleteComponent, "tb-widget-type-autocomplete", never, { "label": "label"; "placeholder": "placeholder"; "floatLabel": "floatLabel"; "appearance": "appearance"; "subscriptSizing": "subscriptSizing"; "required": "required"; "disabled": "disabled"; "excludeWidgetTypeIds": "excludeWidgetTypeIds"; }, {}, never, ["[tb-error]", "[tb-hint]"], false, never>;
}
