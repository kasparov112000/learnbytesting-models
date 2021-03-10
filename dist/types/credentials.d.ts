import { Role } from './role';
export declare class Credentials {
    _id: string;
    displayName: String;
    firstName: String;
    lastName: String;
    guid: String;
    guidOrEmail: String;
    roles: Array<Role>;
}
