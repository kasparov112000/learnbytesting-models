import { UserInfo } from './user-info';
import { Role } from './role';
import { Category } from './category';
import { RoleType } from './role-type';
import { UserFavorite } from './user-favorite';

export class User {
    public _id?: string;
    public active: boolean;
    public info: UserInfo;
    public roles: Array<Role> = new Array<Role>();
    public linesOfService: Array<Category> = new Array<Category>();
    public userFavorites: Array<UserFavorite> = new Array<UserFavorite>();
    public createdDate?: Date;
    public modifiedDate?: Date;

    public static isInRoles(user: User, ...roleTypes: Array<RoleType>): boolean {
        const userRoleTypes = user.roles.map(role => role.roleType);
        for (let roleType of roleTypes) {
            if (userRoleTypes.includes(roleType)) {
                return true;
            }
        }

        return false;
    }
}