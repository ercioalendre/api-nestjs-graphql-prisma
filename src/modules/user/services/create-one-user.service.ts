import { ConflictException, Injectable } from '@nestjs/common';
import { CreateOneUserRequestInputDto } from '@/modules/user/dtos/input/create-one-user-request-input.dto';
import { CreateOneUserResponseOutputDto } from '@/modules/user/dtos/output/create-one-user-response-output.dto';
import { UserPrismaRepository } from '@/modules/user/repositories/user-prisma.repository';
import { randomUUID } from 'crypto';
import { CreateOneUserModelInputDto } from '@/modules/user/dtos/input/create-one-user-model-input.dto';

@Injectable()
export class CreateOneUserService {
  constructor(private readonly userPrismaRepository: UserPrismaRepository) {}

  public async execute(
    createOneUserRequestInputDto: CreateOneUserRequestInputDto,
  ): Promise<CreateOneUserResponseOutputDto> {
    const { email } = createOneUserRequestInputDto;

    const existingUser = await this.userPrismaRepository.getOne({
      email,
    });

    if (existingUser) {
      throw new ConflictException(
        'An user with the given email already exists.',
      );
    }

    const createOneUserModelInputDto: CreateOneUserModelInputDto = {
      id: randomUUID(),
      createdAt: new Date(),
      ...createOneUserRequestInputDto,
    };

    return await this.userPrismaRepository.createOne(
      createOneUserModelInputDto,
    );
  }
}
