import { AfterViewInit, EventEmitter, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IRuleNodeConfigurationComponent, RuleNodeConfiguration, RuleNodeDefinition } from '@shared/models/rule-node.models';
import { Subscription } from 'rxjs';
import { RuleChainService } from '@core/http/rule-chain.service';
import { TranslateService } from '@ngx-translate/core';
import { JsonObjectEditComponent } from '@shared/components/json-object-edit.component';
import { RuleChainType } from '@shared/models/rule-chain.models';
import * as i0 from "@angular/core";
export declare class RuleNodeConfigComponent implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit {
    private translate;
    private ruleChainService;
    private fb;
    definedConfigContainer: ViewContainerRef;
    jsonObjectEditComponent: JsonObjectEditComponent;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    ruleNodeId: string;
    ruleChainId: string;
    ruleChainType: RuleChainType;
    initRuleNode: EventEmitter<void>;
    changeScript: EventEmitter<void>;
    nodeDefinitionValue: RuleNodeDefinition;
    set nodeDefinition(nodeDefinition: RuleNodeDefinition);
    get nodeDefinition(): RuleNodeDefinition;
    definedDirectiveError: string;
    ruleNodeConfigFormGroup: UntypedFormGroup;
    changeSubscription: Subscription;
    changeScriptSubscription: Subscription;
    definedConfigComponent: IRuleNodeConfigurationComponent;
    private definedConfigComponentRef;
    private configuration;
    private propagateChange;
    constructor(translate: TranslateService, ruleChainService: RuleChainService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: RuleNodeConfiguration): void;
    useDefinedDirective(): boolean;
    private updateModel;
    private validateDefinedDirective;
    validate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNodeConfigComponent, "tb-rule-node-config", never, { "required": "required"; "disabled": "disabled"; "ruleNodeId": "ruleNodeId"; "ruleChainId": "ruleChainId"; "ruleChainType": "ruleChainType"; "nodeDefinition": "nodeDefinition"; }, { "initRuleNode": "initRuleNode"; "changeScript": "changeScript"; }, never, never, false, never>;
}
