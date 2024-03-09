import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateOneUserRequestInputDto } from '@/modules/user/dtos/input/update-one-user-request-input.dto';
import { UpdateOneUserResponseOutputDto } from '@/modules/user/dtos/output/update-one-user-response-output.dto';
import { UserPrismaRepository } from '@/modules/user/repositories/user-prisma.repository';
import { randomUUID } from 'crypto';
import { UpdateOneUserModelInputDto } from '@/modules/user/dtos/input/update-one-user-model-input.dto';

@Injectable()
export class UpdateOneUserService {
  constructor(private readonly userPrismaRepository: UserPrismaRepository) {}

  public async execute(
    id: string,
    updateOneUserRequestInputDto: UpdateOneUserRequestInputDto,
  ): Promise<UpdateOneUserResponseOutputDto> {
    const existingUserById = await this.userPrismaRepository.getOneById(id);

    if (!existingUserById) {
      throw new NotFoundException('An user with the given id does not exists.');
    }

    const { email } = updateOneUserRequestInputDto;

    if (email) {
      const existingUserByEmail = await this.userPrismaRepository.getOne({
        email,
      });

      if (existingUserByEmail) {
        throw new ConflictException(
          'An user with the given email already exists.',
        );
      }
    }

    const updateOneUserModelInputDto: UpdateOneUserModelInputDto = {
      updatedAt: new Date(),
      updatedBy: randomUUID(),
      ...updateOneUserRequestInputDto,
    };

    return await this.userPrismaRepository.updateOne(
      id,
      updateOneUserModelInputDto,
    );
  }
}
