import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { resultsPokemon, resultImgPokemon, Height, Type } from "../model/getPokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(index: number) {
    return this.http.get<resultsPokemon>( `https://pokeapi.co/api/v2/pokemon/${index}`)

  }
  getImage() {
      return this.http.get<resultImgPokemon>('https://pokeapi.co/api/v2/pokemon/1/')
  }
  getHeight(){
    return this.http.get<Height>('https://pokeapi.co/api/v2/pokemon/1/')
  }
  getTypes() {
    return this.http.get<Type>('https://pokeapi.co/api/v2/pokemon/1/')
  }

}
