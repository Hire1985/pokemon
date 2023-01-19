import { Component, ViewChild } from '@angular/core';
import { PokeApiService } from "../../services/poke-api.service";
import { nameUrlPokemons, Slots } from "../../model/getPokemon.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';


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

  displayedColumns: string[] = ['position', 'image' , 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any> (this.data)
  pokemons = []
  pokemonData = ''
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;



  constructor(
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(){

var pokemonData;
for(let i = 1; i <= 150; i++){
  this.pokeApiService.getPokemons(i).subscribe(data => {
    pokemonData = {
      position: this.imgpokemon,
      Image: data.sprites.front_default,
      name: data.name
    };
    this.data.push(pokemonData)
    this.dataSource = new MatTableDataSource<any>(this.data)
    this.dataSource.paginator = this.paginator
  })
}

    //   this.pokeApiService.getImage().subscribe(res => {
    //     this.imgpokemon = res.sprites.front_default;

    //       this.pokeApiService.getHeight().subscribe(ans => {
    //         this.height = ans.height;
    //           this.pokeApiService.getTypes().subscribe(datos => {
    //             this.typess = datos.types;

    //       })

    //   })
    // })
  }

}
