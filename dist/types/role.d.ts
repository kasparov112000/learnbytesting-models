import { RoleType } from './role-type';
export declare class Role {
    _id?: string;
    name: string;
    roleType: RoleType;
    orderNum?: number;
    constructor(_id?: string, name?: string, roleType?: RoleType, orderNum?: number);
}
