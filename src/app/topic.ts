import { Account } from './account';

export class Topic {
    idTopic: number;
    title: string;
    content: string;
    creationDay: Date;
    createdBy: string;
    state: number;
    commentId: number[];
}
