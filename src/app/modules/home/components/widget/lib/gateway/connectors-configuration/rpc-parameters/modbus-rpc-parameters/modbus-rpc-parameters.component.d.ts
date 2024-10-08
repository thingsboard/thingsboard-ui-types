import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ModbusDataType, RPCTemplateConfigModbus } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class ModbusRpcParametersComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    rpcParametersFormGroup: UntypedFormGroup;
    functionCodes: Array<number>;
    readonly ModbusEditableDataTypes: ModbusDataType[];
    readonly ModbusFunctionCodeTranslationsMap: Map<number, string>;
    readonly modbusDataTypes: ModbusDataType[];
    readonly writeFunctionCodes: number[];
    private readonly defaultFunctionCodes;
    private readonly readFunctionCodes;
    private readonly bitsFunctionCodes;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: (value: RPCTemplateConfigModbus) => void): void;
    registerOnTouched(fn: () => void): void;
    validate(): ValidationErrors | null;
    writeValue(value: RPCTemplateConfigModbus): void;
    private observeValueChanges;
    private observeKeyDataType;
    private observeFunctionCode;
    private updateValueEnabling;
    private updateFunctionCodes;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusRpcParametersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusRpcParametersComponent, "tb-modbus-rpc-parameters", never, {}, {}, never, never, true, never>;
}
