import { UserBaseInputDto } from './user-base-input.dto';

export class CreateOneUserModelInputDto extends UserBaseInputDto {
  public readonly id: string;
  public readonly createdAt: Date;
  public readonly createdBy?: string | null;
}
