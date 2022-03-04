import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDayPageComponent } from './covid-day-page/covid-day-page.component';

import { CovidListPageComponent } from './covid-list-page/covid-list-page.component';
import { CovidTotalPageComponent } from './covid-total-page/covid-total-page.component';

const routes: Routes = [
  { path: '',redirectTo: 'all-day',pathMatch: 'full' },
  { path: 'all-day', component: CovidDayPageComponent },
  { path: 'list-province', component: CovidListPageComponent },
  { path: 'all-total',component: CovidTotalPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidRoutingModule {}
