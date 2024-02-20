import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

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
    private router: Router
  ) { }
  isEdit: boolean = false;

  userForm = this.fb.group({
    names: [''],
    lastnames: [''],
    identityCard: [''],
    birthDate: [''],
    username: [''],
    password: [''],
  });

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
  }


  formFields = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'email' },
  ];

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
            this.router.navigate(['/users'])
          }, 2000);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
