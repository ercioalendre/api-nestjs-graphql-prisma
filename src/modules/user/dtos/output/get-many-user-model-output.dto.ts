import { UserBaseOutputDto } from './user-base-output.dto';

export class GetManyUserModelOutputDto {
  public readonly data: UserBaseOutputDto[];
  public readonly currentPage: number;
  public readonly perPage: number;
  public readonly lastPage: number;
  public readonly totalRecords: number;
}
