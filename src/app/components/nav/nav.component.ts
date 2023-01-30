import { Component } from '@angular/core';
import { PokeApiService } from "../../services/poke-api.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor (
    private pokeApiService: PokeApiService
  ) {}
  showPlaces(){
    this.pokeApiService.getIdPokemon()
    .subscribe(data => {
      console.log('Esto es el id', data)
    })
  }
}
