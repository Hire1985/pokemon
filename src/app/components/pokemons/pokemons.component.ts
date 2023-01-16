import { Component } from '@angular/core';
import { PokeApiService } from "../../services/poke-api.service";
import { nameUrlPokemons } from "../../model/getPokemon.model";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  infoPokemons: nameUrlPokemons [] = []

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(){
    this.pokeApiService.getPokemons().subscribe(data => {
      this.infoPokemons = data.results;
    })
  }

}
