import { Roles } from '../../constant/Roles.Const';

export class LoginRes {
  key: string;
  email: string;
  pwd: string;
  fullName: string;
  role: Roles;
  token: string;
  refreshToken: string;
}
