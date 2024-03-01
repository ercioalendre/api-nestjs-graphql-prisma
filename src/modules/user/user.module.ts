import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver],
})
export class UserModule {}
