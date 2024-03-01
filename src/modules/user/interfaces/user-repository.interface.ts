import { CreateOneUserInputDto } from '@/modules/user/dtos/create-one-user-input.dto';
import { CreateOneUserOutputDto } from '@/modules/user/dtos/create-one-user-output.dto';
import { UpdateOneUserInputDto } from '@/modules/user/dtos/update-one-user-input.dto';
import { UpdateOneUserOutputDto } from '@/modules/user/dtos/update-one-user-output.dto';
import { GetOneUserOutputDto } from '@/modules/user/dtos/get-one-user-output.dto';
import { GetManyUserInputDto } from '@/modules/user/dtos/get-many-user-input.dto';
import { GetManyUserOutputDto } from '@/modules/user/dtos/get-many-user-output.dto';
import { DeleteOneUserOutputDto } from '@/modules/user/dtos/delete-one-user-output.dto';

export interface UserRepositoryInterface {
  createOne(
    createOneUserInputDto: CreateOneUserInputDto,
  ): Promise<CreateOneUserOutputDto>;

  getOneById(id: string): Promise<GetOneUserOutputDto>;

  getMany(
    getManyUserInputDto: GetManyUserInputDto,
  ): Promise<GetManyUserOutputDto[]>;

  updateOne(
    updateOneUserInputDto: UpdateOneUserInputDto,
  ): Promise<UpdateOneUserOutputDto>;

  deleteOneById(id: string): Promise<DeleteOneUserOutputDto>;
}
