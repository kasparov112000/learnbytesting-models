import { IdamApplicationUser } from '@easydevops/pwc-us-agc-logger';
import { Role } from './role';

export class Credentials {
    public _id!: string;
    public displayName!: String;
    public firstName!: String;
    public lastName!: String;
    public guid!: String;
    public guidOrEmail!: String;
    public roles: Array<Role> = new Array<Role>();
}