export class UpdateOneUserModelInputDto {
  public readonly email?: string;
  public readonly name?: string;
  public readonly role?: string;
  public readonly updatedAt: Date;
  public readonly updatedBy: string;
}
