import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  //MARVEL API
  PUBLIC_KEY = '03932e529eb948333068a10dc78fe1c7';
  HASH = '9050389413b935af52b188a8c22db144';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&ts=1`;
  // 10f7a079c9d7e5fb469e28d69a1706a60a371b86003932e529eb948333068a10dc78fe1c7

  constructor(private http: HttpClient) {}

  /**
   * Metodo que listara todos os personagens
   */
  getAllCharacters(): Observable<any> {
    console.log('API: ', this.URL_API);
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
