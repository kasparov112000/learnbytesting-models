import { Category } from './category';
import { Role } from './role';
import { RoleType } from './role-type';
export declare class MdrApplicationUser {
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
    static isInRoles(user: MdrApplicationUser, ...roleTypes: Array<RoleType>): boolean;
}
