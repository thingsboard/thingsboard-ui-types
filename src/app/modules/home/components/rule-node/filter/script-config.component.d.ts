import { EventEmitter } from '@angular/core';
import { AppState, NodeScriptTestService } from '@core/public-api';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent, ScriptLanguage } from '@shared/models/rule-node.models';
import type { JsFuncComponent } from '@app/shared/components/js-func.component';
import { DebugRuleNodeEventBody } from '@app/shared/models/event.models';
import * as i0 from "@angular/core";
export declare class ScriptConfigComponent extends RuleNodeConfigurationComponent {
    protected store: Store<AppState>;
    private fb;
    private nodeScriptTestService;
    private translate;
    jsFuncComponent: JsFuncComponent;
    tbelFuncComponent: JsFuncComponent;
    scriptConfigForm: UntypedFormGroup;
    tbelEnabled: boolean;
    scriptLanguage: typeof ScriptLanguage;
    changeScript: EventEmitter<void>;
    readonly hasScript = true;
    readonly testScriptLabel = "rule-node-config.test-filter-function";
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, nodeScriptTestService: NodeScriptTestService, translate: TranslateService);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    testScript(debugEventBody?: DebugRuleNodeEventBody): void;
    protected onValidate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScriptConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScriptConfigComponent, "tb-filter-node-script-config", never, {}, {}, never, never, false, never>;
}
