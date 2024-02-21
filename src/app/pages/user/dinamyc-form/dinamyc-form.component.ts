import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

interface FormField {
  label: string;
  type: string;
}

interface FieldConfig {
  label: string;
  controlName: string;
  type: string;
  value?: any;
  validators?: Validators[];
}

@Component({
  selector: 'app-dinamyc-form',
  templateUrl: './dinamyc-form.component.html',
  styleUrls: ['./dinamyc-form.component.sass']
})
export class DinamycFormComponent {
  @Input() form!: FormGroup;
  @Input() formConfig: FieldConfig[] = [];
  @Output() formSubmit = new EventEmitter<any>();

  formData: any = {};

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }
}
