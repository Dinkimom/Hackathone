import { PaginationData } from './../types/PaginationData';

export interface ListDto<T> {
  list: T[];
  pagination: PaginationData;
}
