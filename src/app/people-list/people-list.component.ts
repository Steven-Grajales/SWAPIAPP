import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PeopleService } from '../service/people/people.service';
import { People } from '../models/people.model';
import { PeopleData } from '../models/peopleData.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  pageIndex = 1;
  people: People[];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getPeople()
  }

  private getPeople() {
    this.peopleService.getPeople(this.pageIndex).subscribe((data: PeopleData) => {
      this.people = data.results;
    })
  }

  previousPage() {
    this.pageIndex--;
    this.getPeople()
  }

  nextPage() {
    this.pageIndex++;
    this.getPeople()
  }

  selectPerson(person: People) {
    localStorage.setItem('people', JSON.stringify(person));
    this.router.navigate(['/people-detail']);
  }

}
