import { Category } from './category';
import { Role } from './role';
import { RoleType } from './role-type';

export class MdrApplicationUser {
    claims: any;
    roles: string[];
    guidOrEmail: string;
    email: string;
    pwcPreferredEmail: string;
    guid: string;
    displayName: string;
    firstName: string;
    lastName: string;
    employeeId: string;
    lineOfService: string;
    officePhone: string;
    middleName: string;
    ppid: string;
    stateOrProvidence: string;
    jobTitle: string;
    countryCode: string;
    cloudEmail: string;
    permissions?: Array<Role>;
    categories?: Array<Category>;

    public static isInRoles(user: MdrApplicationUser, ...roleTypes: Array<RoleType>): boolean {
        const userRoleTypes = user.permissions.map(role => role.roleType);
        for (let roleType of roleTypes) {
            if (userRoleTypes.includes(roleType)) {
                return true;
            }
        }

        return false;
    }
}