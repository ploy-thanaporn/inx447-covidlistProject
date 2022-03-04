import { Component, Input, OnInit } from '@angular/core';
import { CovidDay, List } from 'src/app/models/covid';

@Component({
  selector: 'app-covid-total',
  templateUrl: './covid-total.component.html',
  styleUrls: ['./covid-total.component.scss']
})
export class CovidTotalComponent implements OnInit {
  @Input() data: List<CovidDay> | null = null;

  constructor() { }

  ngOnInit(): void {
    return
  }

}
