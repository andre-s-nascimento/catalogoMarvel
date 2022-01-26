import { Observable } from 'rxjs';
import { CharactersApiService } from './character/shared/characters-api/characters-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharactersApiService) { }
  allCharacters: Observable<any> | undefined;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacters();
  }

}
