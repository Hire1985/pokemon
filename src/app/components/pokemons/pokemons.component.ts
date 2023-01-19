import { Component } from '@angular/core';
import { PokeApiService } from "../../services/poke-api.service";
import { nameUrlPokemons, Slots } from "../../model/getPokemon.model";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  infoPokemons: nameUrlPokemons [] = []
  imgpokemon = ''
  height = ''
  typess: Slots [] = []

  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(){
    let pokemons;
for(let i = 1; i <= 150; i++){
  this.pokeApiService.getPokemons(i).subscribe(data => {
    this.infoPokemons = data.results;
    console.log(data)

  })
}

      this.pokeApiService.getImage().subscribe(res => {
        this.imgpokemon = res.sprites.front_default;
        console.log(res)
          this.pokeApiService.getHeight().subscribe(ans => {
            this.height = ans.height;
              this.pokeApiService.getTypes().subscribe(datos => {
                this.typess = datos.types;

          })

      })
    })
  }

}
