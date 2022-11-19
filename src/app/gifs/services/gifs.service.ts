import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apiKey: string = 'sn8vMrBljOZYAVeERHD1zB0luRaRVaEF';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private _http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs(termino: string) {
    termino = termino.trim().toLocaleLowerCase();

    if (termino.length === 0) {
      return;
    }

    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this._http.get<SearchGifsResponse>(
      `https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${termino}&limit=10`
    )
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
    });
  }
}
