import { AfterViewInit, ComponentFactoryResolver, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { JsonFormComponent } from '@shared/components/json-form/json-form.component';
import { JsonFormComponentData } from '@shared/components/json-form/json-form-component.models';
import { Widget } from '@shared/models/widget.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { WidgetService } from '@core/http/widget.service';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import * as i0 from "@angular/core";
export declare class WidgetSettingsComponent implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit, OnChanges, Validator {
    private translate;
    private cfr;
    private widgetService;
    private fb;
    definedSettingsContainer: ViewContainerRef;
    jsonFormComponent: JsonFormComponent;
    disabled: boolean;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    dashboard: Dashboard;
    widget: Widget;
    widgetConfig: WidgetConfigComponentData;
    private settingsDirective;
    definedDirectiveError: string;
    widgetSettingsFormGroup: UntypedFormGroup;
    changeSubscription: Subscription;
    private definedSettingsComponentRef;
    private definedSettingsComponent;
    private widgetSettingsFormData;
    private propagateChange;
    constructor(translate: TranslateService, cfr: ComponentFactoryResolver, widgetService: WidgetService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: JsonFormComponentData): void;
    useDefinedDirective(): boolean;
    useJsonForm(): boolean;
    private updateModel;
    private validateDefinedDirective;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetSettingsComponent, "tb-widget-settings", never, { "disabled": "disabled"; "aliasController": "aliasController"; "dataKeyCallbacks": "dataKeyCallbacks"; "dashboard": "dashboard"; "widget": "widget"; "widgetConfig": "widgetConfig"; }, {}, never, never, false, never>;
}
