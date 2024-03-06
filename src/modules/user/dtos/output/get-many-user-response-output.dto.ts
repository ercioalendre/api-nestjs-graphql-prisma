import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserBaseOutputDto } from './user-base-output.dto';
import { User } from '@/modules/user/graphql/models/user.model';

@ObjectType()
export class GetManyUserResponseOutputDto {
  @Field(() => [User])
  public readonly data: UserBaseOutputDto[];

  @Field(() => Int)
  public readonly currentPage: number;

  @Field(() => Int)
  public readonly perPage: number;

  @Field(() => Int)
  public readonly lastPage: number;

  @Field(() => Int)
  public readonly totalRecords: number;
}
