import { Component, Input, OnInit } from '@angular/core';
import { CovidDay, List } from 'src/app/models/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-day',
  templateUrl: './covid-day.component.html',
  styleUrls: ['./covid-day.component.scss'],
})
export class CovidDayComponent implements OnInit {
  @Input() data: List<CovidDay> | null = null;

  constructor(private readonly service: CovidService) {}

  ngOnInit(): void {}
}
