import { IPaginate, IPaginateResponse } from './paginate.interface';

export interface IMovie {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  sharedBy: string;
  createdDate: Date;
  updatedDate: Date;
}

export interface ICreateMovie {
  title: string;
  description: string;
  videoUrl: string;
}

export interface IGetMoviesRequest extends IPaginate {}

export interface IGetMoviesResponse {
  data: IMovie[];
  paginate: IPaginateResponse;
}
