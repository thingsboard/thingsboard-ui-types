import { MarkedOptionsService } from '@shared/components/marked-options.service';
import * as i0 from "@angular/core";
import * as i1 from "@shared/components/footer.component";
import * as i2 from "@shared/components/logo.component";
import * as i3 from "@shared/components/footer-fab-buttons.component";
import * as i4 from "@shared/components/toast.directive";
import * as i5 from "@shared/components/fullscreen.directive";
import * as i6 from "@shared/components/circular-progress.directive";
import * as i7 from "@shared/components/hotkeys.directive";
import * as i8 from "@shared/components/tb-anchor.component";
import * as i9 from "@shared/components/popover.component";
import * as i10 from "@shared/components/directives/sring-template-outlet.directive";
import * as i11 from "@shared/components/directives/component-outlet.directive";
import * as i12 from "@shared/components/markdown.component";
import * as i13 from "@shared/components/help.component";
import * as i14 from "@shared/components/help-markdown.component";
import * as i15 from "@shared/components/help-popup.component";
import * as i16 from "@shared/components/tb-checkbox.component";
import * as i17 from "@shared/components/tb-error.component";
import * as i18 from "@shared/components/cheatsheet.component";
import * as i19 from "@shared/components/breadcrumb.component";
import * as i20 from "@shared/components/user-menu.component";
import * as i21 from "@shared/components/time/timewindow.component";
import * as i22 from "@shared/components/time/timewindow-panel.component";
import * as i23 from "@shared/components/time/timeinterval.component";
import * as i24 from "@shared/components/time/quick-time-interval.component";
import * as i25 from "@shared/components/dashboard-select.component";
import * as i26 from "@shared/components/dashboard-select-panel.component";
import * as i27 from "@shared/components/time/datetime-period.component";
import * as i28 from "@shared/components/time/datetime.component";
import * as i29 from "@shared/components/time/timezone-select.component";
import * as i30 from "@shared/components/value-input.component";
import * as i31 from "@shared/components/dashboard-autocomplete.component";
import * as i32 from "@shared/components/dashboard-state-autocomplete.component";
import * as i33 from "@shared/components/entity/entity-subtype-autocomplete.component";
import * as i34 from "@shared/components/entity/entity-subtype-select.component";
import * as i35 from "@shared/components/entity/entity-subtype-list.component";
import * as i36 from "@shared/components/entity/entity-autocomplete.component";
import * as i37 from "@shared/components/entity/entity-list.component";
import * as i38 from "@shared/components/entity/entity-type-select.component";
import * as i39 from "@shared/components/entity/entity-select.component";
import * as i40 from "@shared/components/entity/entity-keys-list.component";
import * as i41 from "@shared/components/entity/entity-list-select.component";
import * as i42 from "@shared/components/entity/entity-type-list.component";
import * as i43 from "@shared/components/queue/queue-autocomplete.component";
import * as i44 from "@shared/components/relation/relation-type-autocomplete.component";
import * as i45 from "@shared/components/socialshare-panel.component";
import * as i46 from "@shared/components/string-items-list.component";
import * as i47 from "@shared/components/json-object-edit.component";
import * as i48 from "@shared/components/json-object-view.component";
import * as i49 from "@shared/components/json-content.component";
import * as i50 from "@shared/components/js-func.component";
import * as i51 from "@shared/components/css.component";
import * as i52 from "@shared/components/html.component";
import * as i53 from "@shared/components/fab-toolbar.component";
import * as i54 from "@shared/components/widgets-bundle-select.component";
import * as i55 from "@shared/components/dialog/confirm-dialog.component";
import * as i56 from "@shared/components/dialog/alert-dialog.component";
import * as i57 from "@shared/components/dialog/error-alert-dialog.component";
import * as i58 from "@shared/components/dialog/todo-dialog.component";
import * as i59 from "@shared/components/dialog/color-picker-dialog.component";
import * as i60 from "@shared/components/dialog/material-icons-dialog.component";
import * as i61 from "@shared/components/color-input.component";
import * as i62 from "@shared/components/material-icon-select.component";
import * as i63 from "@shared/components/dialog/node-script-test-dialog.component";
import * as i64 from "@shared/components/json-form/json-form.component";
import * as i65 from "@shared/components/image-input.component";
import * as i66 from "@shared/components/multiple-image-input.component";
import * as i67 from "@shared/components/file-input.component";
import * as i68 from "@shared/components/message-type-autocomplete.component";
import * as i69 from "@shared/components/kv-map.component";
import * as i70 from "@shared/components/nav-tree.component";
import * as i71 from "@shared/components/led-light.component";
import * as i72 from "@shared/components/markdown-editor.component";
import * as i73 from "@shared/pipe/nospace.pipe";
import * as i74 from "@shared/pipe/milliseconds-to-time-string.pipe";
import * as i75 from "@shared/pipe/enum-to-array.pipe";
import * as i76 from "@shared/pipe/highlight.pipe";
import * as i77 from "@shared/pipe/truncate.pipe";
import * as i78 from "@shared/pipe/tbJson.pipe";
import * as i79 from "@shared/pipe/file-size.pipe";
import * as i80 from "@shared/pipe/date-ago.pipe";
import * as i81 from "@shared/pipe/image.pipe";
import * as i82 from "@shared/pipe/safe.pipe";
import * as i83 from "@shared/pipe/short-number.pipe";
import * as i84 from "@shared/pipe/selectable-columns.pipe";
import * as i85 from "@shared/pipe/keyboard-shortcut.pipe";
import * as i86 from "@shared/components/directives/tb-json-to-string.directive";
import * as i87 from "@shared/components/dialog/json-object-edit-dialog.component";
import * as i88 from "@shared/components/time/history-selector/history-selector.component";
import * as i89 from "@shared/components/entity/entity-gateway-select.component";
import * as i90 from "@shared/components/contact.component";
import * as i91 from "@shared/components/ota-package/ota-package-autocomplete.component";
import * as i92 from "@shared/components/widgets-bundle-search.component";
import * as i93 from "@shared/components/button/copy-button.component";
import * as i94 from "@shared/components/button/toggle-password.component";
import * as i95 from "@shared/components/protobuf-content.component";
import * as i96 from "@shared/components/vc/branch-autocomplete.component";
import * as i97 from "@shared/components/phone-input.component";
import * as i98 from "@shared/components/script-lang.component";
import * as i99 from "@shared/components/notification/notification.component";
import * as i100 from "@shared/components/notification/template-autocomplete.component";
import * as i101 from "@shared/components/slack-conversation-autocomplete.component";
import * as i102 from "@shared/layout/layout.directives";
import * as i103 from "@shared/components/color-picker/color-picker.component";
import * as i104 from "@shared/components/color-picker/color-picker-panel.component";
import * as i105 from "@shared/components/resource/resource-autocomplete.component";
import * as i106 from "@shared/components/toggle-header.component";
import * as i107 from "@shared/components/toggle-select.component";
import * as i108 from "@shared/components/unit-input.component";
import * as i109 from "@shared/components/string-autocomplete.component";
import * as i110 from "@shared/components/material-icons.component";
import * as i111 from "@shared/components/rule-chain/rule-chain-select.component";
import * as i112 from "@shared/components/icon.component";
import * as i113 from "@shared/components/hint-tooltip-icon.component";
import * as i114 from "@shared/import-export/import-dialog.component";
import * as i115 from "@shared/import-export/import-dialog-csv.component";
import * as i116 from "@shared/import-export/export-widgets-bundle-dialog.component";
import * as i117 from "@shared/import-export/table-columns-assignment.component";
import * as i118 from "@shared/components/grid/scroll-grid.component";
import * as i119 from "@shared/components/image/image-gallery.component";
import * as i120 from "@shared/components/image/upload-image-dialog.component";
import * as i121 from "@shared/components/image/image-dialog.component";
import * as i122 from "@shared/components/image/image-references.component";
import * as i123 from "@shared/components/image/images-in-use-dialog.component";
import * as i124 from "@shared/components/image/gallery-image-input.component";
import * as i125 from "@shared/components/image/multiple-gallery-image-input.component";
import * as i126 from "@shared/components/image/embed-image-dialog.component";
import * as i127 from "@angular/common";
import * as i128 from "@angular/router";
import * as i129 from "@ngx-translate/core";
import * as i130 from "@angular/material/badge";
import * as i131 from "@angular/material/button";
import * as i132 from "@angular/material/button-toggle";
import * as i133 from "@angular/material/checkbox";
import * as i134 from "@angular/material/icon";
import * as i135 from "@angular/material/card";
import * as i136 from "@angular/material/progress-bar";
import * as i137 from "@angular/material/input";
import * as i138 from "@angular/material/snack-bar";
import * as i139 from "@angular/material/sidenav";
import * as i140 from "@angular/material/toolbar";
import * as i141 from "@angular/material/menu";
import * as i142 from "@angular/material/grid-list";
import * as i143 from "@angular/material/dialog";
import * as i144 from "@angular/material/select";
import * as i145 from "@angular/material/tooltip";
import * as i146 from "@angular/material/table";
import * as i147 from "@angular/material/paginator";
import * as i148 from "@angular/material/sort";
import * as i149 from "@angular/material/progress-spinner";
import * as i150 from "@angular/material/divider";
import * as i151 from "@angular/material/tabs";
import * as i152 from "@angular/material/radio";
import * as i153 from "@angular/material/slide-toggle";
import * as i154 from "@angular/material/datepicker";
import * as i155 from "@mat-datetimepicker/core";
import * as i156 from "ngx-daterangepicker-material";
import * as i157 from "@angular/material/slider";
import * as i158 from "@angular/material/expansion";
import * as i159 from "@angular/material/stepper";
import * as i160 from "@angular/material/autocomplete";
import * as i161 from "@angular/material/chips";
import * as i162 from "@angular/material/list";
import * as i163 from "@angular/cdk/drag-drop";
import * as i164 from "angular-gridster2";
import * as i165 from "ngx-clipboard";
import * as i166 from "@angular/flex-layout";
import * as i167 from "@angular/forms";
import * as i168 from "@angular/cdk/overlay";
import * as i169 from "ngx-sharebuttons";
import * as i170 from "angular2-hotkeys";
import * as i171 from "@iplab/ngx-color-picker";
import * as i172 from "ngx-hm-carousel";
import * as i173 from "ngx-drag-drop";
import * as i174 from "@flowjs/ngx-flow";
import * as i175 from "ngx-flowchart";
import * as i176 from "ngx-markdown";
import * as i177 from "@tinymce/tinymce-angular";
export declare function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService): MarkedOptionsService;
export declare class SharedModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SharedModule, [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i9.TbPopoverComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i4.TbSnackBarComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i26.DashboardSelectPanelComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i30.ValueInputComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.StringItemsListComponent, typeof i47.JsonObjectEditComponent, typeof i48.JsonObjectViewComponent, typeof i49.JsonContentComponent, typeof i50.JsFuncComponent, typeof i51.CssComponent, typeof i52.HtmlComponent, typeof i53.FabTriggerDirective, typeof i53.FabActionsDirective, typeof i53.FabToolbarComponent, typeof i54.WidgetsBundleSelectComponent, typeof i55.ConfirmDialogComponent, typeof i56.AlertDialogComponent, typeof i57.ErrorAlertDialogComponent, typeof i58.TodoDialogComponent, typeof i59.ColorPickerDialogComponent, typeof i60.MaterialIconsDialogComponent, typeof i61.ColorInputComponent, typeof i62.MaterialIconSelectComponent, typeof i63.NodeScriptTestDialogComponent, typeof i64.JsonFormComponent, typeof i65.ImageInputComponent, typeof i66.MultipleImageInputComponent, typeof i67.FileInputComponent, typeof i68.MessageTypeAutocompleteComponent, typeof i69.KeyValMapComponent, typeof i70.NavTreeComponent, typeof i71.LedLightComponent, typeof i72.MarkdownEditorComponent, typeof i73.NospacePipe, typeof i74.MillisecondsToTimeStringPipe, typeof i75.EnumToArrayPipe, typeof i76.HighlightPipe, typeof i77.TruncatePipe, typeof i78.TbJsonPipe, typeof i79.FileSizePipe, typeof i80.DateAgoPipe, typeof i81.ImagePipe, typeof i82.SafePipe, typeof i83.ShortNumberPipe, typeof i84.SelectableColumnsPipe, typeof i85.KeyboardShortcutPipe, typeof i86.TbJsonToStringDirective, typeof i87.JsonObjectEditDialogComponent, typeof i88.HistorySelectorComponent, typeof i89.EntityGatewaySelectComponent, typeof i90.ContactComponent, typeof i91.OtaPackageAutocompleteComponent, typeof i92.WidgetsBundleSearchComponent, typeof i93.CopyButtonComponent, typeof i94.TogglePasswordComponent, typeof i95.ProtobufContentComponent, typeof i96.BranchAutocompleteComponent, typeof i97.PhoneInputComponent, typeof i98.TbScriptLangComponent, typeof i99.NotificationComponent, typeof i100.TemplateAutocompleteComponent, typeof i101.SlackConversationAutocompleteComponent, typeof i102.MdLgLayoutDirective, typeof i102.MdLgLayoutAlignDirective, typeof i102.MdLgLayoutGapDirective, typeof i102.MdLgShowHideDirective, typeof i102.GtMdLgLayoutDirective, typeof i102.GtMdLgLayoutAlignDirective, typeof i102.GtMdLgLayoutGapDirective, typeof i102.GtMdLgShowHideDirective, typeof i103.ColorPickerComponent, typeof i104.ColorPickerPanelComponent, typeof i105.ResourceAutocompleteComponent, typeof i106.ToggleHeaderComponent, typeof i106.ToggleOption, typeof i107.ToggleSelectComponent, typeof i108.UnitInputComponent, typeof i109.StringAutocompleteComponent, typeof i110.MaterialIconsComponent, typeof i111.RuleChainSelectComponent, typeof i112.TbIconComponent, typeof i113.HintTooltipIconComponent, typeof i114.ImportDialogComponent, typeof i115.ImportDialogCsvComponent, typeof i116.ExportWidgetsBundleDialogComponent, typeof i117.TableColumnsAssignmentComponent, typeof i118.ScrollGridComponent, typeof i119.ImageGalleryComponent, typeof i120.UploadImageDialogComponent, typeof i121.ImageDialogComponent, typeof i122.ImageReferencesComponent, typeof i123.ImagesInUseDialogComponent, typeof i124.GalleryImageInputComponent, typeof i125.MultipleGalleryImageInputComponent, typeof i126.EmbedImageDialogComponent], [typeof i127.CommonModule, typeof i128.RouterModule, typeof i129.TranslateModule, typeof i130.MatBadgeModule, typeof i131.MatButtonModule, typeof i132.MatButtonToggleModule, typeof i133.MatCheckboxModule, typeof i134.MatIconModule, typeof i135.MatCardModule, typeof i136.MatProgressBarModule, typeof i137.MatInputModule, typeof i138.MatSnackBarModule, typeof i139.MatSidenavModule, typeof i140.MatToolbarModule, typeof i141.MatMenuModule, typeof i142.MatGridListModule, typeof i143.MatDialogModule, typeof i144.MatSelectModule, typeof i145.MatTooltipModule, typeof i146.MatTableModule, typeof i147.MatPaginatorModule, typeof i148.MatSortModule, typeof i149.MatProgressSpinnerModule, typeof i150.MatDividerModule, typeof i151.MatTabsModule, typeof i152.MatRadioModule, typeof i153.MatSlideToggleModule, typeof i154.MatDatepickerModule, typeof i155.MatNativeDatetimeModule, typeof i155.MatDatetimepickerModule, typeof i156.NgxDaterangepickerMd, typeof i157.MatSliderModule, typeof i158.MatExpansionModule, typeof i159.MatStepperModule, typeof i160.MatAutocompleteModule, typeof i161.MatChipsModule, typeof i162.MatListModule, typeof i163.DragDropModule, typeof i164.GridsterModule, typeof i165.ClipboardModule, typeof i166.FlexLayoutModule, typeof i167.FormsModule, typeof i167.ReactiveFormsModule, typeof i168.OverlayModule, typeof i169.ShareModule, typeof i170.HotkeyModule, typeof i171.ColorPickerModule, typeof i172.NgxHmCarouselModule, typeof i173.DndModule, typeof i174.NgxFlowModule, typeof i175.NgxFlowchartModule, typeof i176.MarkdownModule], [typeof i1.FooterComponent, typeof i2.LogoComponent, typeof i3.FooterFabButtonsComponent, typeof i4.ToastDirective, typeof i5.FullscreenDirective, typeof i6.CircularProgressDirective, typeof i7.TbHotkeysDirective, typeof i8.TbAnchorComponent, typeof i10.TbStringTemplateOutletDirective, typeof i11.TbComponentOutletDirective, typeof i9.TbPopoverDirective, typeof i12.TbMarkdownComponent, typeof i13.HelpComponent, typeof i14.HelpMarkdownComponent, typeof i15.HelpPopupComponent, typeof i16.TbCheckboxComponent, typeof i17.TbErrorComponent, typeof i18.TbCheatSheetComponent, typeof i19.BreadcrumbComponent, typeof i20.UserMenuComponent, typeof i21.TimewindowComponent, typeof i22.TimewindowPanelComponent, typeof i23.TimeintervalComponent, typeof i24.QuickTimeIntervalComponent, typeof i25.DashboardSelectComponent, typeof i27.DatetimePeriodComponent, typeof i28.DatetimeComponent, typeof i29.TimezoneSelectComponent, typeof i31.DashboardAutocompleteComponent, typeof i32.DashboardStateAutocompleteComponent, typeof i33.EntitySubTypeAutocompleteComponent, typeof i34.EntitySubTypeSelectComponent, typeof i35.EntitySubTypeListComponent, typeof i36.EntityAutocompleteComponent, typeof i37.EntityListComponent, typeof i38.EntityTypeSelectComponent, typeof i39.EntitySelectComponent, typeof i40.EntityKeysListComponent, typeof i41.EntityListSelectComponent, typeof i42.EntityTypeListComponent, typeof i43.QueueAutocompleteComponent, typeof i44.RelationTypeAutocompleteComponent, typeof i45.SocialSharePanelComponent, typeof i46.StringItemsListComponent, typeof i47.JsonObjectEditComponent, typeof i48.JsonObjectViewComponent, typeof i49.JsonContentComponent, typeof i50.JsFuncComponent, typeof i51.CssComponent, typeof i52.HtmlComponent, typeof i53.FabTriggerDirective, typeof i53.FabActionsDirective, typeof i86.TbJsonToStringDirective, typeof i53.FabToolbarComponent, typeof i54.WidgetsBundleSelectComponent, typeof i30.ValueInputComponent, typeof i130.MatBadgeModule, typeof i131.MatButtonModule, typeof i132.MatButtonToggleModule, typeof i133.MatCheckboxModule, typeof i134.MatIconModule, typeof i135.MatCardModule, typeof i136.MatProgressBarModule, typeof i137.MatInputModule, typeof i138.MatSnackBarModule, typeof i139.MatSidenavModule, typeof i140.MatToolbarModule, typeof i141.MatMenuModule, typeof i142.MatGridListModule, typeof i143.MatDialogModule, typeof i144.MatSelectModule, typeof i145.MatTooltipModule, typeof i146.MatTableModule, typeof i147.MatPaginatorModule, typeof i148.MatSortModule, typeof i149.MatProgressSpinnerModule, typeof i150.MatDividerModule, typeof i151.MatTabsModule, typeof i152.MatRadioModule, typeof i153.MatSlideToggleModule, typeof i154.MatDatepickerModule, typeof i155.MatNativeDatetimeModule, typeof i155.MatDatetimepickerModule, typeof i156.NgxDaterangepickerMd, typeof i157.MatSliderModule, typeof i158.MatExpansionModule, typeof i159.MatStepperModule, typeof i160.MatAutocompleteModule, typeof i161.MatChipsModule, typeof i162.MatListModule, typeof i163.DragDropModule, typeof i164.GridsterModule, typeof i165.ClipboardModule, typeof i166.FlexLayoutModule, typeof i167.FormsModule, typeof i167.ReactiveFormsModule, typeof i168.OverlayModule, typeof i169.ShareModule, typeof i170.HotkeyModule, typeof i171.ColorPickerModule, typeof i172.NgxHmCarouselModule, typeof i177.EditorModule, typeof i173.DndModule, typeof i175.NgxFlowchartModule, typeof i176.MarkdownModule, typeof i55.ConfirmDialogComponent, typeof i56.AlertDialogComponent, typeof i57.ErrorAlertDialogComponent, typeof i58.TodoDialogComponent, typeof i59.ColorPickerDialogComponent, typeof i60.MaterialIconsDialogComponent, typeof i61.ColorInputComponent, typeof i62.MaterialIconSelectComponent, typeof i63.NodeScriptTestDialogComponent, typeof i64.JsonFormComponent, typeof i65.ImageInputComponent, typeof i66.MultipleImageInputComponent, typeof i67.FileInputComponent, typeof i68.MessageTypeAutocompleteComponent, typeof i69.KeyValMapComponent, typeof i70.NavTreeComponent, typeof i71.LedLightComponent, typeof i72.MarkdownEditorComponent, typeof i73.NospacePipe, typeof i74.MillisecondsToTimeStringPipe, typeof i75.EnumToArrayPipe, typeof i76.HighlightPipe, typeof i77.TruncatePipe, typeof i78.TbJsonPipe, typeof i85.KeyboardShortcutPipe, typeof i79.FileSizePipe, typeof i80.DateAgoPipe, typeof i81.ImagePipe, typeof i82.SafePipe, typeof i83.ShortNumberPipe, typeof i84.SelectableColumnsPipe, typeof i128.RouterModule, typeof i129.TranslateModule, typeof i87.JsonObjectEditDialogComponent, typeof i88.HistorySelectorComponent, typeof i89.EntityGatewaySelectComponent, typeof i90.ContactComponent, typeof i91.OtaPackageAutocompleteComponent, typeof i92.WidgetsBundleSearchComponent, typeof i93.CopyButtonComponent, typeof i94.TogglePasswordComponent, typeof i95.ProtobufContentComponent, typeof i96.BranchAutocompleteComponent, typeof i97.PhoneInputComponent, typeof i98.TbScriptLangComponent, typeof i99.NotificationComponent, typeof i100.TemplateAutocompleteComponent, typeof i101.SlackConversationAutocompleteComponent, typeof i102.MdLgLayoutDirective, typeof i102.MdLgLayoutAlignDirective, typeof i102.MdLgLayoutGapDirective, typeof i102.MdLgShowHideDirective, typeof i102.GtMdLgLayoutDirective, typeof i102.GtMdLgLayoutAlignDirective, typeof i102.GtMdLgLayoutGapDirective, typeof i102.GtMdLgShowHideDirective, typeof i103.ColorPickerComponent, typeof i104.ColorPickerPanelComponent, typeof i105.ResourceAutocompleteComponent, typeof i106.ToggleHeaderComponent, typeof i106.ToggleOption, typeof i107.ToggleSelectComponent, typeof i108.UnitInputComponent, typeof i109.StringAutocompleteComponent, typeof i110.MaterialIconsComponent, typeof i111.RuleChainSelectComponent, typeof i112.TbIconComponent, typeof i113.HintTooltipIconComponent, typeof i114.ImportDialogComponent, typeof i115.ImportDialogCsvComponent, typeof i116.ExportWidgetsBundleDialogComponent, typeof i117.TableColumnsAssignmentComponent, typeof i118.ScrollGridComponent, typeof i119.ImageGalleryComponent, typeof i120.UploadImageDialogComponent, typeof i121.ImageDialogComponent, typeof i122.ImageReferencesComponent, typeof i123.ImagesInUseDialogComponent, typeof i124.GalleryImageInputComponent, typeof i125.MultipleGalleryImageInputComponent, typeof i126.EmbedImageDialogComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SharedModule>;
}
