import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { BarChartWithLabelsWidgetSettings } from '@home/components/widget/lib/chart/bar-chart-with-labels-widget.models';
import * as i0 from "@angular/core";
interface BarChartLegendItem {
    id: string;
    color: string;
    label: string;
    enabled: boolean;
}
export declare class BarChartWithLabelsWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    settings: BarChartWithLabelsWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    showLegend: boolean;
    legendClass: string;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    legendItems: BarChartLegendItem[];
    legendLabelStyle: ComponentStyle;
    disabledLegendLabelStyle: ComponentStyle;
    private get noAggregation();
    private shapeResize$;
    private decimals;
    private units;
    private dataItems;
    private drawChartPending;
    private barChart;
    private barChartOptions;
    private tooltipDateFormat;
    private barRenderItem;
    private barLabelLayoutCallback;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    private updateSeries;
    onLegendItemEnter(item: BarChartLegendItem): void;
    onLegendItemLeave(item: BarChartLegendItem): void;
    toggleLegendItem(item: BarChartLegendItem): void;
    private drawChart;
    private focusedSeriesIndex;
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartWithLabelsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartWithLabelsWidgetComponent, "tb-bar-chart-with-labels-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}
export {};