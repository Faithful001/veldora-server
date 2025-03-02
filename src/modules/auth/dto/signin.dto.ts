import { Types } from 'mongoose';
export interface SigninRequestDto {
  username: string;

  password: string;
}

export interface SigninResponseDto {
  _id: Types.ObjectId;

  username: string;

  email: string;

  access_token: string;
}
