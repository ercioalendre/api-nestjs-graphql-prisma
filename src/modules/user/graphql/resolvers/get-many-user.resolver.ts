import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetManyUserService } from '@/modules/user/services/get-many-user.service';
import { GetManyUserArgs } from '@/modules/user/graphql/args/get-many-user.args';
import { GetManyUserResponseOutputDto } from '@/modules/user/dtos/output/get-many-user-response-output.dto';
import { User } from '@/modules/user/graphql/models/user.model';

@Resolver(() => User)
export class GetManyUserResolver {
  constructor(private readonly getManyUserService: GetManyUserService) {}

  @Query(() => GetManyUserResponseOutputDto)
  public async getManyUserQuery(
    @Args() getManyUserArgs: GetManyUserArgs,
  ): Promise<GetManyUserResponseOutputDto> {
    return await this.getManyUserService.execute(getManyUserArgs);
  }
}
