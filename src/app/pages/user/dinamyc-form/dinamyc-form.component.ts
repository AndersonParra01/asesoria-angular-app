import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Rol } from '@model/rol.model';

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
  @Input() formConfigs: FieldConfig[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  @Input() allRoles: Rol[] = [];

  formData: any = {};

  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }
}
