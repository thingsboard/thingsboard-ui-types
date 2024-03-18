import { OnDestroy, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { WidgetActionCallbacks, WidgetActionDescriptorInfo, WidgetActionsData } from '@home/components/widget/action/manage-widget-actions.component.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetActionSource, widgetType } from '@shared/models/widget.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export interface WidgetActionDialogData {
    isAdd: boolean;
    callbacks: WidgetActionCallbacks;
    actionsData: WidgetActionsData;
    action?: WidgetActionDescriptorInfo;
    widgetType: widgetType;
}
export declare class WidgetActionDialogComponent extends DialogComponent<WidgetActionDialogComponent, WidgetActionDescriptorInfo> implements OnInit, OnDestroy, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    private utils;
    private widgetService;
    data: WidgetActionDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<WidgetActionDialogComponent, WidgetActionDescriptorInfo>;
    fb: FormBuilder;
    private destroy$;
    widgetActionFormGroup: FormGroup;
    isAdd: boolean;
    action: WidgetActionDescriptorInfo;
    customActionEditorCompleter: import("../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    submitted: boolean;
    functionScopeVariables: string[];
    constructor(store: Store<AppState>, router: Router, utils: UtilsService, widgetService: WidgetService, data: WidgetActionDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<WidgetActionDialogComponent, WidgetActionDescriptorInfo>, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    displayShowWidgetActionForm(): boolean;
    getWidgetActionFunctionHelpId(): string | undefined;
    private updateShowWidgetActionForm;
    private validateActionName;
    private checkActionName;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    actionSourceName(actionSource: WidgetActionSource): string;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetActionDialogComponent, [null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetActionDialogComponent, "tb-widget-action-dialog", never, {}, {}, never, never, false, never>;
}
