import { UserFavoriteType } from './user-favorite-type';

export class UserFavorite {
    public entityId: string;
    public userFavoriteType: UserFavoriteType;

    constructor(entityId: string, userFavoriteType: UserFavoriteType) {
        this.entityId = entityId;
        this.userFavoriteType = userFavoriteType;
    }
}