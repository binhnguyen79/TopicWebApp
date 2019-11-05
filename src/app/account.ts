import { Role } from './role';

export class Account {
    accountId: number;
    name: string;
    username: string;
    roles: Role[];
    email: string;
    password: string;
    active: boolean;
}
