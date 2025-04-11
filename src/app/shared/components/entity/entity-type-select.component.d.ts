import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AliasEntityType, EntityType } from '@app/shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class EntityTypeSelectComponent implements ControlValueAccessor, OnInit, OnChanges {
    private entityService;
    translate: TranslateService;
    private fb;
    private destroyRef;
    entityTypeFormGroup: UntypedFormGroup;
    modelValue: EntityType | AliasEntityType | null;
    allowedEntityTypes: Array<EntityType | AliasEntityType>;
    useAliasEntityTypes: boolean;
    filterAllowedEntityTypes: boolean;
    showLabel: boolean;
    required: boolean;
    disabled: boolean;
    additionEntityTypes: {
        [key in string]: string;
    };
    appearance: MatFormFieldAppearance;
    entityTypes: Array<EntityType | AliasEntityType | string>;
    private propagateChange;
    constructor(entityService: EntityService, translate: TranslateService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: EntityType | AliasEntityType | null): void;
    updateView(value: EntityType | AliasEntityType | null): void;
    displayEntityTypeFn(entityType?: EntityType | AliasEntityType | null): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTypeSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTypeSelectComponent, "tb-entity-type-select", never, { "allowedEntityTypes": { "alias": "allowedEntityTypes"; "required": false; }; "useAliasEntityTypes": { "alias": "useAliasEntityTypes"; "required": false; }; "filterAllowedEntityTypes": { "alias": "filterAllowedEntityTypes"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "additionEntityTypes": { "alias": "additionEntityTypes"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; }, {}, never, never, false, never>;
}
