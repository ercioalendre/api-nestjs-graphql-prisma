import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  public readonly id: string;

  @Field()
  public readonly email: string;

  @Field()
  public readonly name: string;

  @Field()
  public readonly role: string;

  @Field()
  public readonly createdAt: Date;

  @Field()
  public readonly createdBy?: string | null;

  @Field()
  public readonly updatedAt?: Date | null;

  @Field()
  public readonly updatedBy?: string | null;

  @Field()
  public readonly isActiveChangedAt?: Date | null;

  @Field()
  public readonly isActiveChangedBy?: string | null;
}
