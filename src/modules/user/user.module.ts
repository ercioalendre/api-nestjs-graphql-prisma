import { Module } from '@nestjs/common';
import { GetManyUserResolver } from './graphql/resolvers/get-many-user.resolver';
import { UserPrismaRepository } from './repositories/user-prisma.repository';
import { PrismaService } from '@/modules/database/prisma/prisma.service';
import { GetManyUserService } from './services/get-many-user.service';
import { CreateOneUserService } from './services/create-one-user.service';
import { CreateOneUserResolver } from './graphql/resolvers/create-one-user.resolver';
import { GetOneUserByIdService } from './services/get-one-user-by-id.service';
import { GetOneUserByIdResolver } from './graphql/resolvers/get-one-user-by-id.resolver';
import { DeleteOneUserByIdService } from './services/delete-one-user-by-id.service';
import { DeleteOneUserByIdResolver } from './graphql/resolvers/delete-one-user-by-id.resolver';
import { UpdateOneUserService } from './services/update-one-user.service';
import { UpdateOneUserResolver } from './graphql/resolvers/update-one-user.resolver';

@Module({
  providers: [
    CreateOneUserService,
    CreateOneUserResolver,
    GetOneUserByIdService,
    GetOneUserByIdResolver,
    GetManyUserService,
    GetManyUserResolver,
    UpdateOneUserService,
    UpdateOneUserResolver,
    DeleteOneUserByIdService,
    DeleteOneUserByIdResolver,
    UserPrismaRepository,
    PrismaService,
  ],
})
export class UserModule {}
