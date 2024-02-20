import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.sass']
})
export class PadreComponent {
  message: string = 'Hola desde el componente padre';
  messageFromChild: string = '';
  total: number = 0
  tabs: {
    id: number
    title: string,
  }[] = [];


  obtenerMensajedelHijo(event: string) {
    console.log('Capturando mensaje del componente hijo: ', event);
    this.messageFromChild = event;
  }

  sumTotal() {
    const a = 1
    const b = 2
    const c = a + b;
    this.total = c
    console.log('SUMA TOTAL', this.total);
    // data
    // json / array / number / boolean / string / caracter
  }

  addTab() {
    console.log('ADD TABS');
    const data = {
      id: 4,
      title: 'Tab 4'
    }
    this.tabs.push(data);
  }
}



