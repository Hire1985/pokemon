import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  getPokemons(index: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }
}
