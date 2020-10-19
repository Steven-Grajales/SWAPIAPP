import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people = JSON.parse(localStorage.getItem('people'));
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.people)
  }

  selectFilm(url: string){
    localStorage.setItem('url', url);
    this.router.navigate(['/film-list']);
  }

}
