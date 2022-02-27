import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Covid, List } from 'src/app/models/covid';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() data: List<Covid> | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CovidService
  ) {}

  ngOnInit(): void {}
}
