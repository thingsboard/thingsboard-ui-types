import { EventEmitter } from '@angular/core';
import { NodeScriptTestService } from '@core/public-api';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent, ScriptLanguage } from '@app/shared/models/rule-node.models';
import type { JsFuncComponent } from '@app/shared/components/js-func.component';
import { EntityType } from '@app/shared/models/entity-type.models';
import { DebugRuleNodeEventBody } from '@shared/models/event.models';
import * as i0 from "@angular/core";
export declare class GeneratorConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private nodeScriptTestService;
    private translate;
    jsFuncComponent: JsFuncComponent;
    tbelFuncComponent: JsFuncComponent;
    generatorConfigForm: UntypedFormGroup;
    tbelEnabled: boolean;
    scriptLanguage: typeof ScriptLanguage;
    changeScript: EventEmitter<void>;
    allowedEntityTypes: EntityType[];
    additionEntityTypes: {
        TENANT: any;
        RULE_NODE: any;
    };
    readonly hasScript = true;
    readonly testScriptLabel = "rule-node-config.test-generator-function";
    constructor(fb: UntypedFormBuilder, nodeScriptTestService: NodeScriptTestService, translate: TranslateService);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    testScript(debugEventBody?: DebugRuleNodeEventBody): void;
    protected onValidate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeneratorConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeneratorConfigComponent, "tb-action-node-generator-config", never, {}, {}, never, never, false, never>;
}
