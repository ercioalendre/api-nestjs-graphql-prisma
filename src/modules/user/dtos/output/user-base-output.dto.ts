export class UserBaseOutputDto {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: Date;
  createdBy?: string | null;
  updatedAt?: Date | null;
  updatedBy?: string | null;
  isActiveChangedAt?: Date | null;
  isActiveChangedBy?: string | null;
}
