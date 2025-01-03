import { ChangeDetectorRef, DestroyRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DeviceCredentials, DeviceInfo, DeviceProfileInfo } from '@shared/models/device.models';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { Subject } from 'rxjs';
import { OtaUpdateType } from '@shared/models/ota-package.models';
import * as i0 from "@angular/core";
export declare class DeviceComponent extends EntityComponent<DeviceInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: DeviceInfo;
    protected entitiesTableConfigValue: EntityTableConfig<DeviceInfo>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    private destroyRef;
    entityType: typeof EntityType;
    deviceCredentials$: Subject<DeviceCredentials>;
    deviceScope: 'tenant' | 'customer' | 'customer_user' | 'edge' | 'edge_customer_user';
    otaUpdateType: typeof OtaUpdateType;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: DeviceInfo, entitiesTableConfigValue: EntityTableConfig<DeviceInfo>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    isAssignedToCustomer(entity: DeviceInfo): boolean;
    buildForm(entity: DeviceInfo): UntypedFormGroup;
    updateForm(entity: DeviceInfo): void;
    onDeviceIdCopied($event: any): void;
    onDeviceProfileUpdated(): void;
    onDeviceProfileChanged(deviceProfile: DeviceProfileInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceComponent, "tb-device", never, {}, {}, never, never, false, never>;
}
