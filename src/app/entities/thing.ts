import { User } from './user';

export class Thing {
    _id: string;
    localFilter?: string; // Only used because the api cannot give me MY objects, but returns everything
    what: string;
    where: string;
    owner: User;
}