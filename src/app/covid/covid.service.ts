import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Covid, List, parseProvinceList } from '../models/covid';

const urlAllProvinces =
  'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private readonly http: HttpClient) {}

  getAllProvinces(): Observable<List<Covid>> {
    return this.http
      .get(urlAllProvinces)
      .pipe(map((data) => parseProvinceList(data)));
  }
}
