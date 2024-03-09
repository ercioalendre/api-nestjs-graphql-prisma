import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetOneUserByIdService } from '@/modules/user/services/get-one-user-by-id.service';
import { GetOneUserResponseOutputDto } from '@/modules/user/dtos/output/get-one-user-response-output.dto';
import { User } from '@/modules/user/graphql/models/user.model';

@Resolver(() => User)
export class GetOneUserByIdResolver {
  constructor(private readonly getOneUserByIdService: GetOneUserByIdService) {}

  @Query(() => GetOneUserResponseOutputDto)
  public async getOneUserByIdQuery(
    @Args('id') id: string,
  ): Promise<GetOneUserResponseOutputDto> {
    return await this.getOneUserByIdService.execute(id);
  }
}
