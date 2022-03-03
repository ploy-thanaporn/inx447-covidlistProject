import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidDay, CovidTimelineCasesAll, List } from 'src/app/models/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-day-page',
  templateUrl: './covid-day-page.component.html',
  styleUrls: ['./covid-day-page.component.scss'],
})
export class CovidDayPageComponent implements OnInit {
  data$!: Observable<List<CovidDay>>;
  timelineCasesAll$!: Observable<CovidTimelineCasesAll>;

  constructor(private readonly service: CovidService) {}

  ngOnInit(): void {
    this.data$ = this.service.getAllDay();

    this.timelineCasesAll$ = this.service.timelineCasesAll();
  }
}
