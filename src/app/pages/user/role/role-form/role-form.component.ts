import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from '@model/fieldConfig.model';
import { Rol } from '@model/rol.model';
import { RolService } from '@service/rol.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.sass']
})
export class RoleFormComponent implements OnChanges {
  constructor(private fb: FormBuilder, private roleService: RolService) {
    this.roleForm = this.createForm();
  }

  @Input() showModal: boolean = false;
  @Output() clickClose = new EventEmitter<boolean>()
  @Input() selectRole!: Rol | null;
  roleForm!: FormGroup;

  formConfig: FieldConfig[] = [
    { label: 'Nombre', controlName: 'name', type: 'text', value: '', validators: [Validators.required] },
    { label: 'Descripcion', controlName: 'description', type: 'text', value: '', validators: [Validators.required] },
  ];

  ngOnChanges(): void {
    if (this.selectRole) {
      //EDITAR
    } else {
      //CREAR
    }
  }

  saveEditRole(role: Rol) {
    console.log(role);
    //TODO
  }



  createForm() {
    const formGroup = this.fb.group({});
    this.formConfig.forEach((field) => {
      formGroup.addControl(
        field.controlName,
        this.fb.control(field.value, field.validators)
      );
    });
    return formGroup;
  }

  closeModal() {
    console.log('CLOSE MODAL');
    this.clickClose.emit(false)
  }




}
