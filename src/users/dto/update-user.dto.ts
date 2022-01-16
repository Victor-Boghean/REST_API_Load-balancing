export class UpdateUserDto {
  readonly password?: string;
  readonly banned?: boolean;
  readonly banReason?: string;
}
