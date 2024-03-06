import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteOneUserResponseOutputDto } from '@/modules/user/dtos/output/delete-one-user-response-output.dto';
import { UserPrismaRepository } from '@/modules/user/repositories/user-prisma.repository';

@Injectable()
export class DeleteOneUserByIdService {
  constructor(private readonly userPrismaRepository: UserPrismaRepository) {}

  public async execute(id: string): Promise<DeleteOneUserResponseOutputDto> {
    const existingUserById = await this.userPrismaRepository.getOneById(id);

    if (!existingUserById) {
      throw new NotFoundException('An user with the given id does not exists.');
    }

    return await this.userPrismaRepository.deleteOneById(id);
  }
}
