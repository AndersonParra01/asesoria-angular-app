import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-hijo-test',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.sass'],
})
export class HijoComponent implements OnInit {
  @Input() childValue: string = '';
  @Input() sentValueFunction: number = 0;
  @Output() childEvent = new EventEmitter<string>()
  @Input() addTab: {
    id: number
    title: string,
  }[] = [];;

  sendMessageToParent() {
    console.log('Enviando al componente padre');
    this.childEvent.emit('Hola desde componente hijo')
  }
  tabs: {
    id: number
    title: string,
  }[] = [];


  ngOnInit() {
    this.tabs = this.addTab;
  }
}
