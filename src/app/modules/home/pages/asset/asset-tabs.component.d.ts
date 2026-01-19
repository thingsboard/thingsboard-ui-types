import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { AssetInfo } from '@app/shared/models/asset.models';
import { EntityId } from "@shared/models/id/entity-id";
import * as i0 from "@angular/core";
export declare class AssetTabsComponent extends EntityTabsComponent<AssetInfo> {
    protected store: Store<AppState>;
    ownerId: EntityId;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    protected setEntity(entity: AssetInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetTabsComponent, "tb-asset-tabs", never, {}, {}, never, never, false, never>;
}
