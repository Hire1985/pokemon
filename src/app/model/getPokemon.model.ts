export interface resultsPokemon {
  results: nameUrlPokemons[];
}
export interface nameUrlPokemons {
  name: string;
  url: string;
}
export interface Height {
  height: string;
}
export interface resultImgPokemon {
  sprites: imgPokemon1;
}
export interface imgPokemon1{
  front_default: string;
}
export interface Type {
  types: Slots[];
}
export interface Slots {
  slot: number;
}
