import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FcRuleNode, RuleNodeType } from '@shared/models/rule-node.models';
import { EntityType } from '@shared/models/entity-type.models';
import { RuleNodeConfigComponent } from './rule-node-config.component';
import { Router } from '@angular/router';
import { RuleChainType } from '@app/shared/models/rule-chain.models';
import { ServiceType } from '@shared/models/queue.models';
import * as i0 from "@angular/core";
export declare class RuleNodeDetailsComponent extends PageComponent implements OnInit, OnChanges, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private router;
    ruleNodeConfigComponent: RuleNodeConfigComponent;
    ruleNode: FcRuleNode;
    ruleChainId: string;
    ruleChainType: RuleChainType;
    disabled: boolean;
    isAdd: boolean;
    initRuleNode: EventEmitter<void>;
    changeScript: EventEmitter<void>;
    ruleNodeType: typeof RuleNodeType;
    entityType: typeof EntityType;
    serviceType: ServiceType;
    ruleNodeFormGroup: UntypedFormGroup;
    private destroy$;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, router: Router);
    private buildForm;
    private updateRuleNode;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(): void;
    openRuleChain($event: Event): void;
    isAddQueue(): boolean;
    isSingleton(): boolean;
    isSingletonEditAllowed(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNodeDetailsComponent, "tb-rule-node", never, { "ruleNode": "ruleNode"; "ruleChainId": "ruleChainId"; "ruleChainType": "ruleChainType"; "disabled": "disabled"; "isAdd": "isAdd"; }, { "initRuleNode": "initRuleNode"; "changeScript": "changeScript"; }, never, never, false, never>;
}
