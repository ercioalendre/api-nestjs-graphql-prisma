import { PrismaService } from '@/modules/database/prisma/prisma.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../graphql/models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [User])
  public getManyUser() {
    return this.prismaService.user.findMany();
  }
}
