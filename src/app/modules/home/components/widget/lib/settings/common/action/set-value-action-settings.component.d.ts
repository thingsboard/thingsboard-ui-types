import { ChangeDetectorRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { SetValueSettings } from '@shared/models/action-widget-settings.models';
import { TranslateService } from '@ngx-translate/core';
import { IAliasController } from '@core/api/widget-api.models';
import { TargetDevice, widgetType } from '@shared/models/widget.models';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class SetValueActionSettingsComponent implements OnInit, ControlValueAccessor {
    private translate;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    overflow: string;
    panelTitle: string;
    valueType: ValueType;
    aliasController: IAliasController;
    targetDevice: TargetDevice;
    widgetType: widgetType;
    disabled: boolean;
    modelValue: SetValueSettings;
    displayValue: string;
    private propagateChange;
    constructor(translate: TranslateService, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SetValueSettings): void;
    openActionSettingsPopup($event: Event, matButton: MatButton): void;
    private updateDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetValueActionSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SetValueActionSettingsComponent, "tb-set-value-action-settings", never, { "panelTitle": { "alias": "panelTitle"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "targetDevice": { "alias": "targetDevice"; "required": false; }; "widgetType": { "alias": "widgetType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
