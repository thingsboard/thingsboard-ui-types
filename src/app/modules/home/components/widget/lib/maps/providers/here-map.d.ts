import LeafletMap from '../leaflet-map';
import { WidgetUnitedMapSettings } from '../map-models';
import { WidgetContext } from '@home/models/widget-component.models';
export declare class HEREMap extends LeafletMap {
    constructor(ctx: WidgetContext, $container: any, options: WidgetUnitedMapSettings);
}
