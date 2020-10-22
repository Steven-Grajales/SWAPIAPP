import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Film} from '../../models/film.model';
import {PeopleService} from '../../service/people/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people = JSON.parse(localStorage.getItem('people'));
  nameFilms =[];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getNameCharacter();
  }

  selectFilm(name: string){
    this.peopleService.searchFilm(name).subscribe(data  => {
      localStorage.setItem('url', data['results'][0]['url']);
      this.router.navigate(['/film-list']);
    })
    // localStorage.setItem('url', url);

  }
  private getNameCharacter() {
    for (const character of this.people['films']) {
      this.peopleService.getByUrl(character).subscribe(dataPeople => this.nameFilms.push(dataPeople['title']));
    }
  }
}
