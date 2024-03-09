import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateOneUserInput {
  @Field(() => String, { nullable: true })
  public readonly email?: string;

  @Field(() => String, { nullable: true })
  public readonly name?: string;

  @Field(() => String, { nullable: true })
  public readonly role?: string;
}
