import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonLocation } from '../model/getPokemon.model'

@Injectable({
  providedIn: 'root',
})

export class PokeApiService {
  private Api = 'https://pokeapi.co/api/v2/location'
  constructor(private http: HttpClient) {}

  getPokemons(index: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }

  getIdPokemon(ids: string) {
    return this.http.get<PokemonLocation>(`${this.Api}/${ids}`)
  }
getPokemons(index: number) {
return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`);
}
}
