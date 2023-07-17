import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { DeviceProfileInfo, DeviceTransportType } from '@shared/models/device.models';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { DeviceService } from '@core/http/device.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
export declare class DeviceWizardDialogComponent extends DialogComponent<DeviceWizardDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<DeviceWizardDialogComponent, boolean>;
    private deviceService;
    private breakpointObserver;
    private fb;
    addDeviceWizardStepper: MatStepper;
    stepperOrientation: Observable<StepperOrientation>;
    stepperLabelPosition: Observable<'bottom' | 'end'>;
    selectedIndex: number;
    credentialsOptionalStep: boolean;
    showNext: boolean;
    entityType: typeof EntityType;
    deviceWizardFormGroup: FormGroup;
    credentialsFormGroup: FormGroup;
    private currentDeviceProfileTransportType;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<DeviceWizardDialogComponent, boolean>, deviceService: DeviceService, breakpointObserver: BreakpointObserver, fb: FormBuilder);
    cancel(): void;
    previousStep(): void;
    nextStep(): void;
    getFormLabel(index: number): string;
    get maxStepperIndex(): number;
    add(): void;
    get deviceTransportType(): DeviceTransportType;
    deviceProfileChanged(deviceProfile: DeviceProfileInfo): void;
    private createDevice;
    allValid(): boolean;
    changeStep($event: StepperSelectionEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceWizardDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceWizardDialogComponent, "tb-device-wizard", never, {}, {}, never, never, false, never>;
}
