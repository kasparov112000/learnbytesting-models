import { UserInfo } from './user-info';
import { Role } from './role';
import { Category } from './category';
import { RoleType } from './role-type';
import { UserFavorite } from './user-favorite';
export declare class User {
    _id?: string;
    active: boolean;
    info: UserInfo;
    roles: Array<Role>;
    linesOfService: Array<Category>;
    userFavorites: Array<UserFavorite>;
    createdDate?: Date;
    modifiedDate?: Date;
    static isInRoles(user: User, ...roleTypes: Array<RoleType>): boolean;
}
