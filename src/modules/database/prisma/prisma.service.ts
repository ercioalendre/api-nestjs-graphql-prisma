import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public onModuleInit(): void {
    this.$connect();
  }

  public onModuleDestroy(): void {
    this.$disconnect();
  }
}
