import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { DeliveryMethodsTemplates, NotificationDeliveryMethod, NotificationType } from '@shared/models/notification.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class NotificationTemplateConfigurationComponent implements OnDestroy, ControlValueAccessor, Validator {
    private fb;
    private translate;
    templateConfigurationForm: FormGroup;
    NotificationDeliveryMethodInfoMap: Map<NotificationDeliveryMethod, import("@shared/models/notification.models").NotificationDeliveryMethodInfo>;
    set predefinedDeliveryMethodsTemplate(value: Partial<DeliveryMethodsTemplates>);
    notificationType: NotificationType;
    interacted: boolean;
    readonly NotificationDeliveryMethod: typeof NotificationDeliveryMethod;
    readonly NotificationTemplateTypeTranslateMap: Map<NotificationType, import("@shared/models/notification.models").NotificationTemplateTypeTranslate>;
    tinyMceOptions: Record<string, any>;
    private propagateChange;
    private readonly destroy$;
    private expendedBlocks;
    constructor(fb: FormBuilder, translate: TranslateService);
    ngOnDestroy(): void;
    writeValue(value: Partial<DeliveryMethodsTemplates>): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors;
    get notificationTapActionHint(): string;
    expandedForm(name: NotificationDeliveryMethod): boolean;
    private updateExpandedForm;
    private updateDisabledForms;
    private buildForm;
    private buildDeliveryMethodControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationTemplateConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationTemplateConfigurationComponent, "tb-template-configuration", never, { "predefinedDeliveryMethodsTemplate": "predefinedDeliveryMethodsTemplate"; "notificationType": "notificationType"; "interacted": "interacted"; }, {}, never, never, false, never>;
}
