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
  @Output() addRole = new EventEmitter<Rol>
  roleForm!: FormGroup;
  isEdit: boolean = false;

  formConfig: FieldConfig[] = [
    { label: 'Nombre', controlName: 'name', type: 'text', value: '', validators: [Validators.required] },
    { label: 'Descripcion', controlName: 'description', type: 'text', value: '', validators: [Validators.required] },
  ];

  ngOnChanges(): void {
    if (this.selectRole) {
      //EDIT
      this.isEdit = true;
      console.log('ONCHANGE EDIT', this.selectRole);
      this.roleForm.patchValue(this.selectRole);
    } else {
      //CREATE
      this.roleForm.reset();
      this.isEdit = false;
    }
  }

  saveEditRole(role: Rol) {
    this.roleService.isEditSave(this.isEdit, role, this.selectRole?.id).subscribe({
      next: (newRole) => {
        //cierra el modal
        this.clickClose.emit(false);
        //emitir un evento para decirle al componente padre que ya hay nueva informacion
        this.addRole.emit(newRole)
        this.roleForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    })
    console.log('DATA RECEP', role);
    // if (this.isEdit) {
    //   console.log('EDIT');

    // } else {
    //   console.log('CREATE');
    //   this.roleService.createRole(role).subscribe({
    //     next: (newRole) => {
    //       //cierra el modal
    //       this.clickClose.emit(false);
    //       //emitir un evento para decirle al componente padre que ya hay nueva informacion
    //       this.addRole.emit(newRole)
    //       this.roleForm.reset();
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     }
    //   })
    // }


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
