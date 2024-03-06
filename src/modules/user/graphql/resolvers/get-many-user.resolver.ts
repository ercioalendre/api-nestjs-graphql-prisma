import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetManyUserService } from '@/modules/user/services/get-many-user.service';
import { GetManyUserArgs } from '@/modules/user/graphql/args/get-many-user.args';
import { GetManyUserResponseOutputDto } from '@/modules/user/dtos/output/get-many-user-response-output.dto';

@Resolver(() => GetManyUserResponseOutputDto)
export class GetManyUserResolver {
  constructor(private readonly getManyUserService: GetManyUserService) {}

  @Query(() => GetManyUserResponseOutputDto)
  public async getManyUser(@Args() searchParams: GetManyUserArgs) {
    return await this.getManyUserService.execute(searchParams);
  }
}
