import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private PEOPLE_API = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {
  }
  getPeople(pageIndex: number) {
    return this.http.get( this.PEOPLE_API + `people/?page=${pageIndex}`);
  }
  getFilmId(url: string){
    return this.http.get( url);
  }

}
