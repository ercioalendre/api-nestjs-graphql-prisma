import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetManyUserArgs {
  @Field(() => Int, { nullable: true })
  page?: number | null;

  @Field(() => Int, { nullable: true })
  perPage?: number | null;

  @Field(() => String, { nullable: true })
  filterBy?: string | null;

  @Field(() => String, { nullable: true })
  filterValue?: string | null;

  @Field(() => String, { nullable: true })
  sortBy?: string | null;

  @Field(() => String, { nullable: true })
  sortOrder?: 'asc' | 'desc' | null;
}
