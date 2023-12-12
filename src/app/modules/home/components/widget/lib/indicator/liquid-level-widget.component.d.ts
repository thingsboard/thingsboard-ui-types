import { ChangeDetectorRef, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { ResourcesService } from '@core/services/resources.service';
import { TranslateService } from '@ngx-translate/core';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class LiquidLevelWidgetComponent implements OnInit {
    private imagePipe;
    private sanitizer;
    private cd;
    private resourcesService;
    private translate;
    liquidLevelContent: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    hasCardClickAction: boolean;
    errorsMsg: string[];
    private svgParams;
    private svg;
    private tooltip;
    private overlayContainer;
    private shape;
    private settings;
    private tankColor;
    private valueColor;
    private liquidColor;
    private backgroundOverlayColor;
    private tooltipLevelColor;
    private tooltipDateFormat;
    private volume;
    private tooltipContent;
    private widgetUnits;
    private capacityUnits;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, cd: ChangeDetectorRef, resourcesService: ResourcesService, translate: TranslateService);
    ngOnInit(): void;
    private declareStyles;
    private getData;
    onInit(): void;
    update(ignoreAnimation?: boolean): void;
    destroy(): void;
    private createSVG;
    private updateData;
    private createTooltip;
    private createValueElement;
    private getShape;
    private getTankersParams;
    private createdErrorMgs;
    private updateSvg;
    private calculatePosition;
    private updateTooltip;
    private updateLevel;
    private updateShapeColor;
    private updateValueElement;
    private getTooltipContent;
    private createTooltipContent;
    private convertInputData;
    private convertOutputData;
    private convertTooltipData;
    cardClick($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LiquidLevelWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LiquidLevelWidgetComponent, "tb-liquid-level-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}