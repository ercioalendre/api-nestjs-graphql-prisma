import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DeleteOneUserByIdService } from '@/modules/user/services/delete-one-user-by-id.service';
import { DeleteOneUserResponseOutputDto } from '@/modules/user/dtos/output/delete-one-user-response-output.dto';
import { User } from '@/modules/user/graphql/models/user.model';

@Resolver(() => User)
export class DeleteOneUserByIdResolver {
  constructor(
    private readonly deleteOneUserByIdService: DeleteOneUserByIdService,
  ) {}

  @Mutation(() => DeleteOneUserResponseOutputDto)
  public async deleteOneUserByIdQuery(
    @Args('id') id: string,
  ): Promise<DeleteOneUserResponseOutputDto> {
    return await this.deleteOneUserByIdService.execute(id);
  }
}
