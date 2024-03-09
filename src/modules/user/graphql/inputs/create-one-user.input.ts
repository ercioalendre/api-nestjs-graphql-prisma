import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOneUserInput {
  @Field(() => String)
  public readonly email: string;

  @Field(() => String)
  public readonly name: string;

  @Field(() => String)
  public readonly role: string;
}
