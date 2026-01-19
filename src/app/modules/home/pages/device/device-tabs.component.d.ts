import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DeviceInfo } from '@shared/models/device.models';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { EntityId } from "@shared/models/id/entity-id";
import * as i0 from "@angular/core";
export declare class DeviceTabsComponent extends EntityTabsComponent<DeviceInfo> {
    protected store: Store<AppState>;
    ownerId: EntityId;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    protected setEntity(entity: DeviceInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceTabsComponent, "tb-device-tabs", never, {}, {}, never, never, false, never>;
}
