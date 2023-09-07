import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

class filterUserDto extends OmitType(CreateUserDto, ['email'] as const) {}

export class UpdateUserDto extends PartialType(filterUserDto) {
  @ApiProperty({
    example: 'User Name',
    description: 'Username to choose',
  })
  username: string;

  @ApiProperty({
    example: 'userpassword',
    description:
      'choose a password that contains numbers, lowercase letters, uppercase letters, and special characters',
  })
  password: string;
}
