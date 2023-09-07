import { Document } from 'mongoose';

export interface User extends Document {
  readonly username: string;
  readonly email: string;
  // readonly firstName: string;
  // readonly firstSurName: string;
  readonly password: string;
}
