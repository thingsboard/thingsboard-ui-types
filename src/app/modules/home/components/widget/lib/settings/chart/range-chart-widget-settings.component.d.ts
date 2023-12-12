import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class RangeChartWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    legendPositions: import("@shared/models/widget.models").LegendPosition[];
    legendPositionTranslationMap: Map<import("@shared/models/widget.models").LegendPosition, string>;
    rangeChartWidgetSettingsForm: UntypedFormGroup;
    tooltipValuePreviewFn: any;
    tooltipDatePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _tooltipValuePreviewFn;
    private _tooltipDatePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeChartWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeChartWidgetSettingsComponent, "tb-range-chart-widget-settings", never, {}, {}, never, never, false, never>;
}