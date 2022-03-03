import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { CovidRoutingModule } from './covid-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { CovidListComponent } from './covid-list/covid-list.component';
import { CovidListPageComponent } from './covid-list-page/covid-list-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CovidDayComponent } from './covid-day/covid-day.component';

@NgModule({
  declarations: [CovidListComponent, CovidListPageComponent, CovidDayComponent],
  imports: [
    CommonModule,
    CovidRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
})
export class CovidModule {}
