import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDayPageComponent } from './covid-day-page/covid-day-page.component';

import { CovidListPageComponent } from './covid-list-page/covid-list-page.component';

const routes: Routes = [
  { path: 'all-day', component: CovidDayPageComponent },
  { path: 'list-province', component: CovidListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidRoutingModule {}
