import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDayComponent } from './covid-day/covid-day.component';
import { CovidListPageComponent } from './covid-list-page/covid-list-page.component';

const routes: Routes = [
  { path: 'all-day', component: CovidDayComponent },
  { path: 'list-province', component: CovidListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidRoutingModule {}
