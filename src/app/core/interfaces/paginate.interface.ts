export interface IPaginate {
  page: number;
  perPage: number;
}

export interface IPaginateResponse extends IPaginate {
  total: number;
}
