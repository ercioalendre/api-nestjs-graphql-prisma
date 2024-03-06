import { CreateOneUserModelInputDto } from '@/modules/user/dtos/input/create-one-user-model-input.dto';
import { CreateOneUserModelOutputDto } from '@/modules/user/dtos/output/create-one-user-model-output.dto';
import { GetOneUserModelOutputDto } from '@/modules/user/dtos/output/get-one-user-model-output.dto';
import { GetManyUserModelOutputDto } from '@/modules/user/dtos/output/get-many-user-model-output.dto';
import { UpdateOneUserModelInputDto } from '@/modules/user/dtos/input/update-one-user-model-input.dto';
import { UpdateOneUserModelOutputDto } from '@/modules/user/dtos/output/update-one-user-model-output.dto';
import { DeleteOneUserModelOutputDto } from '@/modules/user/dtos/output/delete-one-user-model-output.dto';

export interface UserRepositoryInterface {
  createOne(
    createOneUserModelInputDto: CreateOneUserModelInputDto,
  ): Promise<CreateOneUserModelOutputDto>;

  getOne(filter: Record<string, unknown>): Promise<GetOneUserModelOutputDto>;

  getOneById(id: string): Promise<GetOneUserModelOutputDto>;

  getMany(
    searchParams?: Record<string, unknown> | null,
  ): Promise<GetManyUserModelOutputDto>;

  updateOne(
    id: string,
    updateOneUserModelInputDto: UpdateOneUserModelInputDto,
  ): Promise<UpdateOneUserModelOutputDto>;

  deleteOneById(id: string): Promise<DeleteOneUserModelOutputDto>;
}
