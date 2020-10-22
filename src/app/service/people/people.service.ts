import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private PEOPLE_API = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {
  }

  searchPeople(search: string){
    return this.http.get( this.PEOPLE_API + `people/?search=${search}`);
  }
  searchFilm(search: string){
    return this.http.get( this.PEOPLE_API + `films/?search=${search}`);
  }

  getPeople(pageIndex: number) {
    return this.http.get( this.PEOPLE_API + `people/?page=${pageIndex}`);
  }
  getByUrl(url: string){
    return this.http.get( url);
  }

}
