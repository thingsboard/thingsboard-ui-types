import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { EntityTypeVersionCreateConfig, SyncStrategy } from '@shared/models/vc.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare class EntityTypesVersionCreateComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    entityTypesVersionCreateFormGroup: FormGroup;
    syncStrategies: SyncStrategy[];
    syncStrategyTranslations: Map<SyncStrategy, string>;
    entityTypes: typeof EntityType;
    constructor(store: Store<AppState>, translate: TranslateService, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: {
        [entityType: string]: EntityTypeVersionCreateConfig;
    } | undefined): void;
    validate(c: FormControl): {
        entityTypes: {
            valid: boolean;
        };
    };
    private prepareEntityTypesFormArray;
    private createEntityTypeControl;
    private updateEntityTypeValidators;
    entityTypesFormGroupArray(): FormGroup[];
    entityTypesFormGroupExpanded(entityTypeControl: AbstractControl): boolean;
    trackByEntityType(index: number, entityTypeControl: AbstractControl): any;
    removeEntityType(index: number): void;
    addEnabled(): boolean;
    addEntityType(): void;
    removeAll(): void;
    entityTypeText(entityTypeControl: AbstractControl): string;
    allowedEntityTypes(entityTypeControl?: AbstractControl): Array<EntityType>;
    private updateModel;
    static ??fac: i0.????FactoryDeclaration<EntityTypesVersionCreateComponent, never>;
    static ??cmp: i0.????ComponentDeclaration<EntityTypesVersionCreateComponent, "tb-entity-types-version-create", never, { "disabled": "disabled"; }, {}, never, never>;
}
