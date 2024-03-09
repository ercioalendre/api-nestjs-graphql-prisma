import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOneUserService } from '@/modules/user/services/create-one-user.service';
import { CreateOneUserInput } from '@/modules/user/graphql/inputs/create-one-user.input';
import { User } from '@/modules/user/graphql/models/user.model';
import { CreateOneUserResponseOutputDto } from '@/modules/user/dtos/output/create-one-user-response-output.dto';

@Resolver(() => User)
export class CreateOneUserResolver {
  constructor(private readonly createOneUserService: CreateOneUserService) {}

  @Mutation(() => CreateOneUserResponseOutputDto)
  public async createOneUserMutation(
    @Args('createOneUserInput') createOneUserInput: CreateOneUserInput,
  ): Promise<CreateOneUserResponseOutputDto> {
    return await this.createOneUserService.execute(createOneUserInput);
  }
}
