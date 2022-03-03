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

export type CovidAll = {
  txn_date: string;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  new_recovered: number;
  total_recovered: number;
  update_date: string;
};

export type Chart = {
  data: Array<number>;
  categories: Array<string>;
};

export type CovidTimelineCasesAll = {
  chartNewCases: Chart;
  chartNewDeath: Chart;
  chartRecovered: Chart;
  results: Array<CovidAll>;
};

//covid
export function parseProvinceList(data: any): List<CovidProvince> {
  return {
    results: data,
  };
}

export function parseCovidDayList(data: any): List<CovidDay> {
  return {
    results: data,
  };
}

export function parseTimeLineCasesAll(data: any): CovidTimelineCasesAll {
  return {
    chartNewCases: {
      data: data.map((d: any) => d.new_case),
      categories: data.map((d: any) => d.txn_date),
    },
    chartNewDeath: {
      data: data.map((d: any) => d.new_death),
      categories: data.map((d: any) => d.txn_date),
    },
    chartRecovered: {
      data: data.map((d: any) => d.new_recovered),
      categories: data.map((d: any) => d.txn_date),
    },
    results: data,
  };
}
