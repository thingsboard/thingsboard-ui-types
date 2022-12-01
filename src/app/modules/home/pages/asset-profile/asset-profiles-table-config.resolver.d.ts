import { Resolve, Router } from '@angular/router';
import { EntityTableConfig, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { DialogService } from '@core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { ImportExportService } from '@home/components/import-export/import-export.service';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import { AssetProfile } from '@shared/models/asset.models';
import { AssetProfileService } from '@core/http/asset-profile.service';
import * as i0 from "@angular/core";
export declare class AssetProfilesTableConfigResolver implements Resolve<EntityTableConfig<AssetProfile>> {
    private assetProfileService;
    private importExport;
    private homeDialogs;
    private translate;
    private datePipe;
    private dialogService;
    private router;
    private dialog;
    private readonly config;
    constructor(assetProfileService: AssetProfileService, importExport: ImportExportService, homeDialogs: HomeDialogsService, translate: TranslateService, datePipe: DatePipe, dialogService: DialogService, router: Router, dialog: MatDialog);
    resolve(): EntityTableConfig<AssetProfile>;
    configureAddActions(): Array<HeaderActionDescriptor>;
    setDefaultAssetProfile($event: Event, assetProfile: AssetProfile): void;
    private openAssetProfile;
    importAssetProfile($event: Event): void;
    exportAssetProfile($event: Event, assetProfile: AssetProfile): void;
    onAssetProfileAction(action: EntityAction<AssetProfile>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfilesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AssetProfilesTableConfigResolver>;
}