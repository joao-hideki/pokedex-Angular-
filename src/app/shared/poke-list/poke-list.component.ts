import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemon: any;
  public getAllPokemons: any;
  public apiError: boolean = true;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiLisAllPokemons.subscribe(
      (res) => {
        this.setAllPokemon = res.results;
        this.getAllPokemons = this.setAllPokemon;
      },
      (error) => (this.apiError = true)
    );
  }

  public getSearch(value: string) {
    const filteredList = this.setAllPokemon.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(value.toLocaleLowerCase())
    );

    this.getAllPokemons = filteredList;
  }
}
