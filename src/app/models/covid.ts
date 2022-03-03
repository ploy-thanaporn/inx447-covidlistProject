export type List<T> = {
  results: T[];
};

export type CovidProvince = {
  txn_date: Date;
  province: string;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  update_date: Date;
};

export type CovidDay = {
  txn_date: Date;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  new_recovered: number;
  total_recovered: number;
  update_date: Date;
};

//covid
export function parseProvinceList(data: any): List<CovidProvince> {
  return {
    results: data,
  };
}
export function parseCovidDay(data: any): List<CovidDay> {
  return {
    ...data,
  };
}
// export function parseCovidProvince(data: any): CovidProvince {
//   return {
//     ...data,
//   };
// }
