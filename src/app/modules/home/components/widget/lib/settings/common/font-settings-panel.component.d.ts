import { DestroyRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { ComponentStyle, cssUnit, Font } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FontSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    private destroyRef;
    font: Font;
    previewText: string;
    initialPreviewStyle: ComponentStyle;
    clearButton: boolean;
    autoScale: boolean;
    disabledLineHeight: boolean;
    forceSizeUnit: cssUnit;
    popover: TbPopoverComponent<FontSettingsPanelComponent>;
    fontApplied: EventEmitter<Font>;
    familyInput: ElementRef;
    fontWeightsList: readonly ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
    fontWeightTranslationsMap: Map<"bold" | "normal" | "lighter" | "bolder" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900", string>;
    fontStylesList: readonly ["normal", "italic", "oblique"];
    fontStyleTranslationsMap: Map<"normal" | "italic" | "oblique", string>;
    fontFormGroup: UntypedFormGroup;
    filteredFontFamilies: Observable<Array<string>>;
    familySearchText: string;
    previewStyle: ComponentStyle;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, destroyRef: DestroyRef);
    ngOnInit(): void;
    clearFamily(): void;
    cancel(): void;
    applyFont(): void;
    clearDisabled(): boolean;
    clearFont(): void;
    private updatePreviewStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FontSettingsPanelComponent, "tb-font-settings-panel", never, { "font": { "alias": "font"; "required": false; }; "previewText": { "alias": "previewText"; "required": false; }; "initialPreviewStyle": { "alias": "initialPreviewStyle"; "required": false; }; "clearButton": { "alias": "clearButton"; "required": false; }; "autoScale": { "alias": "autoScale"; "required": false; }; "disabledLineHeight": { "alias": "disabledLineHeight"; "required": false; }; "forceSizeUnit": { "alias": "forceSizeUnit"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "fontApplied": "fontApplied"; }, never, never, false, never>;
}
