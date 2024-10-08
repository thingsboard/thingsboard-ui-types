import { EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { RepositorySettingsComponent } from '@home/components/vc/repository-settings.component';
import { UntypedFormGroup } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
import { Observable } from 'rxjs';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class VersionControlComponent implements OnInit, HasConfirmForm {
    private store;
    repositorySettingsComponent: RepositorySettingsComponent;
    detailsMode: boolean;
    popoverComponent: TbPopoverComponent;
    active: boolean;
    singleEntityMode: boolean;
    externalEntityId: EntityId;
    entityId: EntityId;
    entityName: string;
    onBeforeCreateVersion: () => Observable<any>;
    versionRestored: EventEmitter<void>;
    hasRepository$: Observable<boolean>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    confirmForm(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<VersionControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VersionControlComponent, "tb-version-control", never, { "detailsMode": { "alias": "detailsMode"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; "active": { "alias": "active"; "required": false; }; "singleEntityMode": { "alias": "singleEntityMode"; "required": false; }; "externalEntityId": { "alias": "externalEntityId"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; "entityName": { "alias": "entityName"; "required": false; }; "onBeforeCreateVersion": { "alias": "onBeforeCreateVersion"; "required": false; }; }, { "versionRestored": "versionRestored"; }, never, never, false, never>;
}
