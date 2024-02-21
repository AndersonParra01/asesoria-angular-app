import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from '@service/rol.service';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

interface FieldConfig {
  label: string;
  controlName: string;
  type: string;
  value?: any;
  validators?: ValidatorFn[];
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private message: MessageService,
    private router: Router,
    private rolService: RolService
  ) {
    this.userForm = this.createForm();
  }

  isEdit: boolean = false;
  userForm!: FormGroup;

  formConfig: FieldConfig[] = [
    { label: 'Nombres', controlName: 'names', type: 'text', value: '', validators: [Validators.required] },
    { label: 'Apellidos', controlName: 'lastnames', type: 'text', value: '', validators: [Validators.required] },
    { label: 'Cedula', controlName: 'identityCard', type: 'text', value: '', validators: [Validators.required] },
    {
      label: 'Fecha Nacimiento',
      controlName: 'birthDate',
      type: 'date',
      value: '',
      // validators: [Validators],
      validators: [Validators.required]
    },
    { label: 'Usuario', controlName: 'username', type: 'text', value: '', validators: [Validators.required] },
    {
      label: 'Contraseña',
      controlName: 'password',
      type: 'password',
      value: '',
      validators: [Validators.required]
    },
    {
      label: 'Rol',
      controlName: 'role',
      type: 'dropdown',
      value: null,
      validators: [Validators.required]
    }
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      console.log(param);
      if (param.has('id')) {
        this.userService.getUserById(param.params.id).subscribe({
          next: (user: any) => {
            console.log(user);
            this.userForm.patchValue(user);
            this.isEdit = true;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
    this.getAllRoles()
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

  getAllRoles() {
    this.rolService.getAllRoles().subscribe({
      next: (roles) => {
        console.log(roles);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleSubmit(formData: any) {
    console.log('User form submitted with data:', formData);
  }

  saveEditUser() {
    const values = this.userForm.value;
    console.log(values);
    if (this.isEdit) {
      const idParam = this.route.snapshot.paramMap.get('id');
      const id = parseInt(idParam!, 10);
      console.log('Edit');
      this.userService.editUserById(id, values).subscribe({
        next: (res) => {
          console.log(res);
          console.log('Edit user success');
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('Create');
      this.userService.createUser(values).subscribe({
        next: (res) => {
          console.log(res);
          this.message.add({
            severity: 'success',
            summary: 'Usuario Creado',
            detail: `${res.names}`,
          });
          setTimeout(() => {
            this.router.navigate(['/users']);
          }, 2000);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
