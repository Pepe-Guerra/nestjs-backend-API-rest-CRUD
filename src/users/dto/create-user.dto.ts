import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserAlreadyExist } from '../validation/isUserAlreadyExist.Constraint';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // DTO con validaciones

  @ApiProperty({
    example: 'User Name',
    description: 'Username to choose',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'useremail@email.com',
    description: 'User email',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsUserAlreadyExist()
  email: string;

  // firstName: string;
  // firstSurName: string;

  @ApiProperty({
    example: 'userpassword',
    description:
      'choose a password that contains numbers, lowercase letters, uppercase letters, and special characters',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
