import { ValidatorFn } from "@angular/forms";

export interface FieldConfig {
    label: string;
    controlName: string;
    type: string;
    value?: any;
    validators?: ValidatorFn[];
}