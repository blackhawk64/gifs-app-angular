import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  constructor(private gifsService: GifsService){

  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar(){
    this.gifsService.buscarGifs(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
