import { Widget } from '@shared/models/widget.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { EntityAliases } from '@shared/models/alias.models';
import { Filters } from '@shared/models/query/query.models';
export interface WidgetExportDefinition<T = any> {
    testWidget(widget: Widget): boolean;
    prepareExportInfo(dashboard: Dashboard, widget: Widget): T;
    updateFromExportInfo(widget: Widget, entityAliases: EntityAliases, filters: Filters, info: T): void;
}
export declare const getWidgetExportDefinition: (widget: Widget) => WidgetExportDefinition;
