import { Component, EventEmitter, Input, Output } from '@angular/core';

interface FormField {
  label: string;
  type: string;
}

@Component({
  selector: 'app-dinamyc-form',
  templateUrl: './dinamyc-form.component.html',
  styleUrls: ['./dinamyc-form.component.sass']
})
export class DinamycFormComponent {
  @Input() fields: FormField[] = [];
  @Output() formSubmit = new EventEmitter<any>();

  formData: any = {};

  onSubmit() {
    this.formSubmit.emit(this.formData);
  }
}
