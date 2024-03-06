import { Injectable, NotFoundException } from '@nestjs/common';
import { UserPrismaRepository } from '@/modules/user/repositories/user-prisma.repository';
import { GetOneUserResponseOutputDto } from '../dtos/output/get-one-user-response-output.dto';

@Injectable()
export class GetOneUserByIdService {
  constructor(private readonly userPrismaRepository: UserPrismaRepository) {}

  public async execute(id: string): Promise<GetOneUserResponseOutputDto> {
    const existingUser = await this.userPrismaRepository.getOneById(id);

    if (!existingUser) {
      throw new NotFoundException('An user with the given id does not exists.');
    }

    return existingUser;
  }
}
