import { RoleType } from './role-type';

export class Role {
    public _id?: string;
    public name: string;
    public roleType: RoleType;
    public orderNum?: number;


    constructor(_id?: string, name?: string, roleType?: RoleType, orderNum?: number) {
        this._id = _id;
        this.name = name;
        this.roleType = roleType;
        this.orderNum = orderNum;
    }
}