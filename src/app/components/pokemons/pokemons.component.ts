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
  imgpokemon = ''


  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(){
    this.pokeApiService.getPokemons().subscribe(data => {
      this.infoPokemons = data.results;
      console.log(data)
      this.pokeApiService.getImage().subscribe(res => {
      this.imgpokemon = res.front_default;
        console.log(res);
      })
    })
  }

}
