import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { resultsPokemon, imgPokemon1 } from "../model/getPokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get<resultsPokemon>( 'https://pokeapi.co/api/v2/pokemon/')

  }
  getImage() {
      return this.http.get<imgPokemon1>('https://pokeapi.co/api/v2/pokemon/1/')
  }


}
