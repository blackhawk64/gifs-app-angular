import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get gifs(){
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  verGifs(termino: string){
    this.gifsService.buscarGifs(termino);
  }

}
