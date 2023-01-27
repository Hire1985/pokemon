import { Component } from '@angular/core';
import { PokeApiService } from "../app/services/poke-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  constructor (
    private pokeApiService: PokeApiService
  ) {}
  title = 'pokemon';
  imgParent: string = "https://openseauserdata.com/files/0d17c23c409d8e5cc60de4ed195dbdb3.jpg"

  showPlaces(id: string){
    this.pokeApiService.getIdPokemon(id)
    .subscribe(data => {
      console.log(data)
    })
  }




}

