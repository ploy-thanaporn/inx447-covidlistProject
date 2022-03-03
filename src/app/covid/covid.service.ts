import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  CovidDay,
  CovidProvince,
  List,
  parseCovidDay,
  parseProvinceList,
} from '../models/covid';

const urlAllProvinces =
  'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';

const urlAllDay = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private readonly http: HttpClient) {}

  getAllProvinces(): Observable<List<CovidProvince>> {
    return this.http
      .get(urlAllProvinces)
      .pipe(map((data) => parseProvinceList(data)));
  }

  getAllDay(): Observable<List<CovidDay>> {
    return this.http.get(urlAllDay).pipe(map((data) => parseCovidDay(data)));
  }
}