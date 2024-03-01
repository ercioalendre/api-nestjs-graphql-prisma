import { UserBaseOutputDto } from './user-base-output.dto';

export interface GetManyUserOutputDto {
  data: UserBaseOutputDto[];
  currentPage: number;
  perPage: number;
  lastPage: number;
  total: number;
}
