import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../service/people/people.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import { Film } from '../models/film.model'


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  url=localStorage.getItem('url');
  filmSub : Subscription;
  film : Film = new Film();
  nameCharacters =[];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getFilm();
  }

  selectPerson(person) {
    this.peopleService.searchPeople(person).subscribe(data  => {
      localStorage.setItem('people', JSON.stringify(data['results'][0]));
      this.router.navigate(['/people-detail']);
    })
  }

  private getFilm() {

    this.filmSub = this.peopleService.getByUrl(this.url).subscribe((data: Film)  => {
      this.film = data;
      for (const character of this.film.characters) {
        this.peopleService.getByUrl(character).subscribe(dataPeople => this.nameCharacters.push(dataPeople['name']));
      }
    })
  }
}
