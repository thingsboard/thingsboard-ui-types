import { ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityId } from '@shared/models/id/entity-id';
import { MatDialogRef } from '@angular/material/dialog';
import { AttributeService } from '@core/http/attribute.service';
import { DeviceService } from '@core/http/device.service';
import { DeviceCredentials } from '@shared/models/device.models';
import { ConfigurationModes } from '../gateway-widget.models';
import * as i0 from "@angular/core";
export declare class GatewayConfigurationComponent implements AfterViewInit, OnDestroy {
    private fb;
    private attributeService;
    private deviceService;
    private cd;
    device: EntityId;
    dialogRef: MatDialogRef<GatewayConfigurationComponent>;
    initialCredentials: DeviceCredentials;
    gatewayConfigGroup: FormGroup;
    ConfigurationModes: typeof ConfigurationModes;
    private destroy$;
    private readonly gatewayConfigAttributeKeys;
    constructor(fb: FormBuilder, attributeService: AttributeService, deviceService: DeviceService, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    saveConfig(): void;
    private observeAlignConfigs;
    private generateAttributes;
    private updateCredentials;
    private shouldUpdateCredentials;
    private generateMqttCredentials;
    private shouldUpdateAccessToken;
    cancel(): void;
    private removeEmpty;
    private generateLogsFile;
    private addLocalLoggers;
    private createHandlerObj;
    private createLoggerObj;
    private fetchConfigAttribute;
    private updateConfigs;
    private updateFormControls;
    private logsToObj;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayConfigurationComponent, "tb-gateway-configuration", never, { "device": { "alias": "device"; "required": false; }; "dialogRef": { "alias": "dialogRef"; "required": false; }; }, {}, never, never, false, never>;
}