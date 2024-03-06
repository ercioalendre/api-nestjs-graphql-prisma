import { UserRepositoryInterface } from '@/modules/user/interfaces/user-repository.interface';
import { PrismaService } from '@/modules/database/prisma/prisma.service';
import { CreateOneUserModelInputDto } from '@/modules/user/dtos/input/create-one-user-model-input.dto';
import { CreateOneUserModelOutputDto } from '@/modules/user/dtos/output/create-one-user-model-output.dto';
import { GetOneUserModelOutputDto } from '@/modules/user/dtos/output/get-one-user-model-output.dto';
import { GetManyUserModelOutputDto } from '@/modules/user/dtos/output/get-many-user-model-output.dto';
import { UpdateOneUserModelInputDto } from '@/modules/user/dtos/input/update-one-user-model-input.dto';
import { UpdateOneUserModelOutputDto } from '@/modules/user/dtos/output/update-one-user-model-output.dto';
import { DeleteOneUserModelOutputDto } from '@/modules/user/dtos/output/delete-one-user-model-output.dto';
import { UserSearchParams } from '@/modules/user/types/user-search-params.type';
import { UserSortableFieldList } from '@/modules/user/constants/user-sortable-field-list';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserPrismaRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async createOne(
    createOneUserModelInputDto: CreateOneUserModelInputDto,
  ): Promise<CreateOneUserModelOutputDto> {
    return await this.prismaService.user.create({
      data: createOneUserModelInputDto,
    });
  }

  public async getOne(
    filter: Prisma.UserWhereInput,
  ): Promise<GetOneUserModelOutputDto> {
    return await this.prismaService.user.findFirst({
      where: filter,
    });
  }

  public async getOneById(id: string): Promise<GetOneUserModelOutputDto> {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async getMany(
    userPrismaSearchParams: UserSearchParams | null = {},
  ): Promise<GetManyUserModelOutputDto> {
    const {
      page = 1,
      perPage = 10,
      filterBy = undefined,
      filterValue = undefined,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = userPrismaSearchParams;

    const skip = (page - 1) * perPage;

    const orderBy = {};

    const isSortableField = UserSortableFieldList.find(
      (sortableField) => sortableField === sortBy,
    );

    const parsedSortBy = isSortableField || 'createdAt';

    orderBy[parsedSortBy] = sortOrder;

    const filters = {
      [filterBy]: filterValue,
    };

    const userFoundCount = await this.prismaService.user.count({
      where: filters,
    });

    const userFoundList = await this.prismaService.user.findMany({
      where: filters,
      orderBy,
      skip,
      take: perPage,
    });

    return {
      data: userFoundList,
      currentPage: page,
      perPage,
      lastPage: Math.ceil(userFoundCount / perPage) || 1,
      totalRecords: userFoundCount,
    };
  }

  public async updateOne(
    id: string,
    updateOneUserModelInputDto: UpdateOneUserModelInputDto,
  ): Promise<UpdateOneUserModelOutputDto> {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateOneUserModelInputDto,
    });
  }

  public async deleteOneById(id: string): Promise<DeleteOneUserModelOutputDto> {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
