import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ElementRef, OnInit } from '@angular/core';
import { WidgetAction, WidgetActionType, widgetType } from '@shared/models/widget.models';
import { WidgetService } from '@core/http/widget.service';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import { Observable } from 'rxjs';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { TranslateService } from '@ngx-translate/core';
import { PopoverPlacement } from '@shared/components/popover.models';
import * as i0 from "@angular/core";
declare const stateDisplayTypes: readonly ["normal", "separateDialog", "popover"];
type stateDisplayTypeTuple = typeof stateDisplayTypes;
export type stateDisplayType = stateDisplayTypeTuple[number];
export declare class WidgetActionComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private widgetService;
    private dashboardService;
    private dashboardUtils;
    private translate;
    dashboardStateInput: ElementRef;
    disabled: boolean;
    widgetType: widgetType;
    callbacks: WidgetActionCallbacks;
    widgetActionTypes: WidgetActionType[];
    widgetActionTypeTranslations: Map<WidgetActionType, string>;
    widgetActionType: typeof WidgetActionType;
    allStateDisplayTypes: readonly ["normal", "separateDialog", "popover"];
    allPopoverPlacements: readonly ["top", "topLeft", "topRight", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "left", "leftTop", "leftBottom"];
    WidgetType: typeof widgetType;
    filteredDashboardStates: Observable<Array<string>>;
    targetDashboardStateSearchText: string;
    selectedDashboardStateIds: Observable<Array<string>>;
    customActionEditorCompleter: import("../../../../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    functionScopeVariables: string[];
    widgetActionFormGroup: UntypedFormGroup;
    actionTypeFormGroup: UntypedFormGroup;
    stateDisplayTypeFormGroup: UntypedFormGroup;
    private propagateChange;
    private actionTypeFormGroupSubscriptions;
    private stateDisplayTypeFormGroupSubscriptions;
    private destroy$;
    private dashboard;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, translate: TranslateService);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    writeValue(widgetAction?: WidgetAction): void;
    validate(_c: UntypedFormControl): {
        widgetAction: {
            valid: boolean;
        };
    };
    clearTargetDashboardState(value?: string): void;
    onDashboardStateInputFocus(): void;
    stateDisplayTypeName(displayType: stateDisplayType): string;
    popoverPlacementName(placement: PopoverPlacement): string;
    private updateActionTypeFormGroup;
    private updateStateDisplayTypeFormGroup;
    private setupSelectedDashboardStateIds;
    private setupFilteredDashboardStates;
    private fetchDashboardStates;
    private createFilterForDashboardState;
    private getStateDisplayType;
    private widgetActionUpdated;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetActionComponent, "tb-widget-action", never, { "disabled": "disabled"; "widgetType": "widgetType"; "callbacks": "callbacks"; }, {}, never, never, false, never>;
}
export {};
