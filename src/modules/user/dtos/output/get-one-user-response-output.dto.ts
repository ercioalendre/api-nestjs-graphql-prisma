import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetOneUserResponseOutputDto {
  @Field(() => ID)
  public readonly id: string;

  @Field(() => String)
  public readonly email: string;

  @Field(() => String)
  public readonly name: string;

  @Field(() => String)
  public readonly role: string;

  @Field(() => Date)
  public readonly createdAt: Date;

  @Field(() => String, { nullable: true })
  public readonly createdBy?: string | null;

  @Field(() => Date, { nullable: true })
  public readonly updatedAt?: Date | null;

  @Field(() => String, { nullable: true })
  public readonly updatedBy?: string | null;

  @Field(() => Date, { nullable: true })
  public readonly isActiveChangedAt?: Date | null;

  @Field(() => String, { nullable: true })
  public readonly isActiveChangedBy?: string | null;
}
