import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-list/people-detail/people-detail.component';
import { FilmListComponent } from './film-list/film-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/people-list', pathMatch: 'full' },
  {
    path: 'people-list',
    component: PeopleListComponent
  },
  {
    path: 'film-list',
    component: FilmListComponent
  },
  {
    path: 'people-detail',
    component: PeopleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
