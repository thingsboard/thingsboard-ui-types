import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetActionType, WidgetMobileActionDescriptor, WidgetMobileActionType } from '@shared/models/widget.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class MobileActionEditorComponent implements ControlValueAccessor, OnInit {
    private fb;
    private widgetService;
    mobileActionTypes: string[];
    mobileActionTypeTranslations: Map<WidgetMobileActionType, string>;
    mobileActionType: typeof WidgetMobileActionType;
    customActionEditorCompleter: import("../../../../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    mobileActionFormGroup: UntypedFormGroup;
    mobileActionTypeFormGroup: UntypedFormGroup;
    functionScopeVariables: string[];
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetMobileActionDescriptor | null): void;
    private updateModel;
    private updateMobileActionType;
    protected readonly WidgetActionType: typeof WidgetActionType;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileActionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileActionEditorComponent, "tb-mobile-action-editor", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never, false, never>;
}