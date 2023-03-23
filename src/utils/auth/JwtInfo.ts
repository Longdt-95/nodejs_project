import { Roles } from '../../constant/Roles.Const';

export interface JwtInfo {
  readonly key: string;
  readonly email: string;
  readonly role: Roles;
  readonly fullName: string;

  keyThread?: number;
}
