import { Module } from '@nestjs/common';
import { GetManyUserResolver } from './graphql/resolvers/get-many-user.resolver';
import { UserPrismaRepository } from './repositories/user-prisma.repository';
import { PrismaService } from '@/modules/database/prisma/prisma.service';
import { GetManyUserService } from './services/get-many-user.service';

@Module({
  providers: [
    GetManyUserService,
    GetManyUserResolver,
    UserPrismaRepository,
    PrismaService,
  ],
})
export class UserModule {}
