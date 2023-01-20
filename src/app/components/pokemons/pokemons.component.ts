import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];
  pokemonData = '';
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit() {
    let pokemonData;
    for (let i = 1; i <= 151; i++) {
      this.pokeApiService.getPokemons(i).subscribe(data => {
        pokemonData = {
          position: i,
          image: data.sprites.front_default,
          name: data.name,
        };
        this.data.push(pokemonData);
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  @Input() img = 'hola';
  getRow(row: string) {
    console.log(row);
  }
}
