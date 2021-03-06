import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { AlarmRule } from '@shared/models/device.models';
import { MatDialog } from '@angular/material/dialog';
import { AlarmSeverity } from '@shared/models/alarm.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class CreateAlarmRulesComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private fb;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    disabled: boolean;
    deviceProfileId: EntityId;
    createAlarmRulesFormGroup: FormGroup;
    private usedSeverities;
    private valueChangeSubscription;
    private propagateChange;
    constructor(dialog: MatDialog, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    createAlarmRulesFormArray(): FormArray;
    setDisabledState(isDisabled: boolean): void;
    writeValue(createAlarmRules: {
        [severity: string]: AlarmRule;
    }): void;
    removeCreateAlarmRule(index: number): void;
    addCreateAlarmRule(): void;
    private getFirstUnusedSeverity;
    validate(c: FormControl): {
        createAlarmRules: {
            valid: boolean;
        };
    };
    isDisabledSeverity(severity: AlarmSeverity, index: number): boolean;
    private updateUsedSeverities;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateAlarmRulesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateAlarmRulesComponent, "tb-create-alarm-rules", never, { "disabled": "disabled"; "deviceProfileId": "deviceProfileId"; }, {}, never, never>;
}
