import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, QueryList, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { DataKey, Datasource, DatasourceData, WidgetActionDescriptor } from '@shared/models/widget.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { PageLink } from '@shared/models/page/page-link';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CellContentInfo, CellStyleInfo, TableCellButtonActionDescriptor, TableWidgetSettings } from '@home/components/widget/lib/table-widget.models';
import { Overlay } from '@angular/cdk/overlay';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { DateFormatSettings } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export interface TimeseriesTableWidgetSettings extends TableWidgetSettings {
    showTimestamp: boolean;
    showMilliseconds: boolean;
    hideEmptyLines: boolean;
    dateFormat: DateFormatSettings;
}
interface TimeseriesRow {
    actionCellButtons?: TableCellButtonActionDescriptor[];
    hasActions?: boolean;
    [col: number]: any;
    formattedTs: string;
}
interface TimeseriesHeader {
    index: number;
    dataKey: DataKey;
    sortable: boolean;
    show: boolean;
    columnDefaultVisibility?: boolean;
    columnSelectionAvailability?: boolean;
    styleInfo: Observable<CellStyleInfo>;
    contentInfo: CellContentInfo;
    order?: number;
}
interface TimeseriesTableSource {
    keyStartIndex: number;
    keyEndIndex: number;
    latestKeyStartIndex: number;
    latestKeyEndIndex: number;
    datasource: Datasource;
    rawData: Array<DatasourceData>;
    latestRawData: Array<DatasourceData>;
    data: TimeseriesRow[];
    pageLink: PageLink;
    displayedColumns: string[];
    timeseriesDatasource: TimeseriesDatasource;
    header: TimeseriesHeader[];
    rowDataTemplate: {
        [key: string]: any;
    };
}
export declare class TimeseriesTableWidgetComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    private elementRef;
    private overlay;
    private viewContainerRef;
    private utils;
    private translate;
    private domSanitizer;
    private datePipe;
    private cd;
    private fb;
    private zone;
    ctx: WidgetContext;
    searchInputField: ElementRef;
    paginators: QueryList<MatPaginator>;
    sorts: QueryList<MatSort>;
    textSearch: import("@angular/forms").FormControl<string>;
    displayPagination: boolean;
    enableStickyHeader: boolean;
    enableStickyAction: boolean;
    showCellActionsMenu: boolean;
    pageSizeOptions: any[];
    textSearchMode: boolean;
    hidePageSize: boolean;
    sources: TimeseriesTableSource[];
    sourceIndex: number;
    noDataDisplayMessageText: string;
    hasRowAction: boolean;
    private setCellButtonAction;
    private cellContentCache;
    private cellStyleCache;
    private rowStyleCache;
    private settings;
    private widgetConfig;
    private data;
    private latestData;
    private datasources;
    private defaultPageSize;
    private defaultSortOrder;
    private hideEmptyLines;
    showTimestamp: boolean;
    private useEntityLabel;
    private dateFormatFilter;
    private displayedColumns;
    private rowStylesInfo;
    private subscriptions;
    private widgetTimewindowChanged$;
    private widgetResize$;
    private destroy$;
    private searchAction;
    private columnDisplayAction;
    constructor(store: Store<AppState>, elementRef: ElementRef, overlay: Overlay, viewContainerRef: ViewContainerRef, utils: UtilsService, translate: TranslateService, domSanitizer: DomSanitizer, datePipe: DatePipe, cd: ChangeDetectorRef, fb: FormBuilder, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onDataUpdated(): void;
    onLatestDataUpdated(): void;
    onEditModeChanged(): void;
    private initialize;
    getTabLabel(source: TimeseriesTableSource): string;
    private updateDatasources;
    private editColumnsToDisplay;
    private prepareDisplayedColumn;
    private prepareHeader;
    private updateActiveEntityInfo;
    private initSubscriptionsToSortAndPaginator;
    onSourceIndexChanged(): void;
    private enterFilterMode;
    exitFilterMode(): void;
    private updateData;
    trackByColumnIndex(index: any, header: TimeseriesHeader): number;
    trackByRowTimestamp(index: number): number;
    trackByActionCellDescriptionId(index: number, action: WidgetActionDescriptor): string;
    trackBySourcesIndex(index: number, source: TimeseriesTableSource): string;
    rowStyle(source: TimeseriesTableSource, row: TimeseriesRow, index: number): Observable<any>;
    cellStyle(source: TimeseriesTableSource, header: TimeseriesHeader, index: number, row: TimeseriesRow, value: any, rowIndex: number): Observable<any>;
    cellContent(source: TimeseriesTableSource, header: TimeseriesHeader, index: number, row: TimeseriesRow, value: any, rowIndex: number): Observable<SafeHtml>;
    onRowClick($event: Event, row: TimeseriesRow): void;
    onActionButtonClick($event: Event, row: TimeseriesRow, actionDescriptor: WidgetActionDescriptor): void;
    isActiveTab(index: number): boolean;
    private updateCurrentSourceAllData;
    private updateCurrentSourceData;
    private updateCurrentSourceLatestData;
    private loadCurrentSourceRow;
    private clearCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeseriesTableWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeseriesTableWidgetComponent, "tb-timeseries-table-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
declare class TimeseriesDatasource implements DataSource<TimeseriesRow> {
    private source;
    private hideEmptyLines;
    private dateFormatFilter;
    private datePipe;
    private widgetContext;
    private rowsSubject;
    private pageDataSubject;
    private allRowsSubject;
    private allRows$;
    countCellButtonAction: number;
    private reserveSpaceForHiddenAction;
    private cellButtonActions;
    private usedShowCellActionFunction;
    private inited;
    constructor(source: TimeseriesTableSource, hideEmptyLines: boolean, dateFormatFilter: string, datePipe: DatePipe, widgetContext: WidgetContext);
    private init;
    connect(collectionViewer: CollectionViewer): Observable<TimeseriesRow[] | ReadonlyArray<TimeseriesRow>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadRows(): void;
    allDataUpdated(data: DatasourceData[], latestData: DatasourceData[]): void;
    dataUpdated(data: DatasourceData[]): void;
    latestDataUpdated(latestData: DatasourceData[]): void;
    private updateSourceData;
    private convertData;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    private fetchRows;
}
export {};
