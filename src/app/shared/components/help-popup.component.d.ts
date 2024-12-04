import { ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { TbPopoverService } from '@shared/components/popover.service';
import { PopoverPlacement } from '@shared/components/popover.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class HelpPopupComponent implements OnChanges, OnDestroy {
    private viewContainerRef;
    private sanitizer;
    private renderer;
    private popoverService;
    private translate;
    toggleHelpButton: ElementRef;
    toggleHelpTextButton: ElementRef;
    helpId: string;
    helpContent: string;
    helpContentBase64: string;
    asyncHelpContent: () => Observable<string> | null;
    helpIcon: string;
    helpOpenedIcon: string;
    helpIconTooltip: any;
    helpIconButtonClass: string;
    triggerText: string;
    triggerStyle: string;
    helpPopupPlacement: PopoverPlacement;
    helpPopupStyle: {
        [klass: string]: any;
    };
    popoverVisible: boolean;
    popoverReady: boolean;
    hintMode: boolean;
    triggerSafeHtml: SafeHtml;
    textMode: boolean;
    constructor(viewContainerRef: ViewContainerRef, sanitizer: DomSanitizer, renderer: Renderer2, popoverService: TbPopoverService, translate: TranslateService);
    ngOnChanges(changes: SimpleChanges): void;
    disabled(): boolean;
    toggleHelp(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpPopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelpPopupComponent, "[tb-help-popup], [tb-help-popup-content], [tb-help-popup-content-base64], [tb-help-popup-async-content]", never, { "helpId": { "alias": "tb-help-popup"; "required": false; }; "helpContent": { "alias": "tb-help-popup-content"; "required": false; }; "helpContentBase64": { "alias": "tb-help-popup-content-base64"; "required": false; }; "asyncHelpContent": { "alias": "tb-help-popup-async-content"; "required": false; }; "helpIcon": { "alias": "help-icon"; "required": false; }; "helpOpenedIcon": { "alias": "help-opened-icon"; "required": false; }; "helpIconTooltip": { "alias": "help-icon-tooltip"; "required": false; }; "helpIconButtonClass": { "alias": "help-icon-button-class"; "required": false; }; "triggerText": { "alias": "trigger-text"; "required": false; }; "triggerStyle": { "alias": "trigger-style"; "required": false; }; "helpPopupPlacement": { "alias": "tb-help-popup-placement"; "required": false; }; "helpPopupStyle": { "alias": "tb-help-popup-style"; "required": false; }; "hintMode": { "alias": "hintMode"; "required": false; }; }, {}, never, never, false, never>;
}
