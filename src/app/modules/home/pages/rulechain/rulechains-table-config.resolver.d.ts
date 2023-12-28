import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CellActionDescriptor, EntityColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { RuleChain } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { DialogService } from '@core/services/dialog.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { EdgeService } from '@core/http/edge.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PageLink } from '@shared/models/page/page-link';
import { Edge } from '@shared/models/edge.models';
import { PageData } from '@shared/models/page/page-data';
import { HomeDialogsService } from '@home/dialogs/home-dialogs.service';
import * as i0 from "@angular/core";
export declare class RuleChainsTableConfigResolver implements Resolve<EntityTableConfig<RuleChain>> {
    private ruleChainService;
    private dialogService;
    private dialog;
    private importExport;
    private itembuffer;
    private edgeService;
    private homeDialogs;
    private translate;
    private datePipe;
    private router;
    private readonly config;
    private edge;
    constructor(ruleChainService: RuleChainService, dialogService: DialogService, dialog: MatDialog, importExport: ImportExportService, itembuffer: ItemBufferService, edgeService: EdgeService, homeDialogs: HomeDialogsService, translate: TranslateService, datePipe: DatePipe, router: Router);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<RuleChain>;
    configureEntityTableColumns(ruleChainScope: string): Array<EntityColumn<RuleChain>>;
    configureAddActions(ruleChainScope: string): Array<HeaderActionDescriptor>;
    configureEntityFunctions(ruleChainScope: string, edgeId: string): (pageLink: any) => Observable<PageData<RuleChain>>;
    configureTableTitle(ruleChainScope: string, edge: Edge): string;
    configureGroupActions(ruleChainScope: string): Array<GroupActionDescriptor<RuleChain>>;
    configureCellActions(ruleChainScope: string): Array<CellActionDescriptor<RuleChain>>;
    importRuleChain($event: Event): void;
    openRuleChain($event: Event, ruleChain: RuleChain): void;
    saveRuleChain(ruleChain: RuleChain): Observable<RuleChain>;
    exportRuleChain($event: Event, ruleChain: RuleChain): void;
    setRootRuleChain($event: Event, ruleChain: RuleChain): void;
    onRuleChainAction(action: EntityAction<RuleChain>): boolean;
    setEdgeTemplateRootRuleChain($event: Event, ruleChain: RuleChain): void;
    private checkMissingToRelatedRuleChains;
    assignRuleChainsToEdge($event: Event): void;
    unassignFromEdge($event: Event, ruleChain: RuleChain): void;
    unassignRuleChainsFromEdge($event: Event, ruleChains: Array<RuleChain>): void;
    setAutoAssignToEdgeRuleChain($event: Event, ruleChain: RuleChain): void;
    unsetAutoAssignToEdgeRuleChain($event: Event, ruleChain: RuleChain): void;
    isNonRootRuleChain(ruleChain: RuleChain): boolean;
    isAutoAssignToEdgeRuleChain(ruleChain: any): any;
    isNotAutoAssignToEdgeRuleChain(ruleChain: any): boolean;
    fetchRuleChains(pageLink: PageLink): Observable<PageData<RuleChain>>;
    fetchEdgeRuleChains(pageLink: PageLink): Observable<PageData<RuleChain>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleChainsTableConfigResolver>;
}
