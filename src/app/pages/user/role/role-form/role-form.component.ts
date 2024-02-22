import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.sass']
})
export class RoleFormComponent {

  @Input() showModal: boolean = false;
  @Output() clickClose = new EventEmitter<boolean>()


  closeModal() {
    console.log('CLOSE MODAL');
    this.clickClose.emit(false)
  }
}
