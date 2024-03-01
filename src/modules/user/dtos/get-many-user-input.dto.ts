import { UserBaseInputDto } from './user-base-input.dto';

export interface GetManyUserInputDto extends UserBaseInputDto {
  createdAt: Date;
  createdBy?: string | null;
  updatedAt?: Date | null;
  updatedBy?: string | null;
  isActiveChangedAt?: string | null;
  isActiveChangedBy?: string | null;
  searchParams: SearchParams;
}

interface SearchParams {
  page?: number | null;
  perPage?: number | null;
  filter?: string | null;
  sort?: string | null;
  sortDir?: 'asc' | 'desc' | null;
}
