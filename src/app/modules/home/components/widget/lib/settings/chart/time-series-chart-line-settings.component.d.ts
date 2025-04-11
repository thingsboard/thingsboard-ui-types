import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { LineSeriesSettings, TimeSeriesChartType } from '@home/components/widget/lib/chart/time-series-chart.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DataKeyConfigComponent } from '@home/components/widget/lib/settings/common/key/data-key-config.component';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartLineSettingsComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private dataKeyConfigComponent;
    private fb;
    private destroyRef;
    TimeSeriesChartType: typeof TimeSeriesChartType;
    lineSeriesStepTypes: import("@home/components/widget/lib/chart/time-series-chart.models").LineSeriesStepType[];
    lineSeriesStepTypeTranslations: Map<import("@home/components/widget/lib/chart/time-series-chart.models").LineSeriesStepType, string>;
    chartLineTypes: import("@home/components/widget/lib/chart/chart.models").ChartLineType[];
    chartLineTypeTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartLineType, string>;
    chartLabelPositions: import("@home/components/widget/lib/chart/chart.models").ChartLabelPosition[];
    chartLabelPositionTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartLabelPosition, string>;
    chartShapes: import("@home/components/widget/lib/chart/chart.models").ChartShape[];
    chartShapeTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartShape, string>;
    pointLabelPreviewFn: any;
    disabled: boolean;
    chartType: TimeSeriesChartType;
    private modelValue;
    private propagateChange;
    lineSettingsFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, dataKeyConfigComponent: DataKeyConfigComponent, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: LineSeriesSettings): void;
    private updateValidators;
    private updateModel;
    private _pointLabelPreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartLineSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartLineSettingsComponent, "tb-time-series-chart-line-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; }, {}, never, never, false, never>;
}
