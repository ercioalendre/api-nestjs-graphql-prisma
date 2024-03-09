import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateOneUserService } from '@/modules/user/services/update-one-user.service';
import { UpdateOneUserInput } from '@/modules/user/graphql/inputs/update-one-user.input';
import { User } from '@/modules/user/graphql/models/user.model';
import { UpdateOneUserResponseOutputDto } from '@/modules/user/dtos/output/update-one-user-response-output.dto';

@Resolver(() => User)
export class UpdateOneUserResolver {
  constructor(private readonly updateOneUserService: UpdateOneUserService) {}

  @Mutation(() => UpdateOneUserResponseOutputDto)
  public async updateOneUserMutation(
    @Args('id')
    id: string,
    @Args('updateOneUserInput')
    updateOneUserInput: UpdateOneUserInput,
  ): Promise<UpdateOneUserResponseOutputDto> {
    return await this.updateOneUserService.execute(id, updateOneUserInput);
  }
}
