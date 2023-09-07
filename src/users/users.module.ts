import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { IsUserAlreadyExistConstraint } from './validation/isUserAlreadyExist.Constraint';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'UserModel',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, IsUserAlreadyExistConstraint],
})
export class UsersModule {}
