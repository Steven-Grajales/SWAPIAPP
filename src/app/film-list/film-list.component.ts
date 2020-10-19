import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../service/people/people.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import { Film } from '../models/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  url=localStorage.getItem('url');
  filmSub : Subscription;
  film : Film[];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getFilmId();
  }

  private getFilmId() {
    this.filmSub = this.peopleService.getFilmId(this.url).subscribe((data : Film[] )=> {
      this.film = data;
    })
  }
}
