import { Injectable } from '@nestjs/common';
import { UserPrismaRepository } from '@/modules/user/repositories/user-prisma.repository';
import { UserSearchParams } from '@/modules/user/types/user-search-params.type';
import { GetManyUserResponseOutputDto } from '@/modules/user/dtos/output/get-many-user-response-output.dto';

@Injectable()
export class GetManyUserService {
  constructor(private readonly userPrismaRepository: UserPrismaRepository) {}

  public async execute(
    searchParams?: UserSearchParams | null,
  ): Promise<GetManyUserResponseOutputDto> {
    return await this.userPrismaRepository.getMany(searchParams);
  }
}
