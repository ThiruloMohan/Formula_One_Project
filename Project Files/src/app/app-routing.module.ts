import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { WinnersListComponent } from './winners-list/winners-list/winners-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/standings', pathMatch: 'full'},
  { path: 'standings', component: RaceDetailsComponent},
  { path: 'winners', component: WinnersListComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RaceDetailsComponent, WinnersListComponent, PageNotFoundComponent]
