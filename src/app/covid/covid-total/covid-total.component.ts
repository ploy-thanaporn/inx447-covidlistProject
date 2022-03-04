import { Component, Input, OnInit } from '@angular/core';
import { CovidDay, CovidNews, List } from 'src/app/models/covid';

@Component({
  selector: 'app-covid-total',
  templateUrl: './covid-total.component.html',
  styleUrls: ['./covid-total.component.scss']
})

export class CovidTotalComponent implements OnInit {
  @Input() data: List<CovidDay> | null = null;
  @Input() news: List<CovidNews> | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
