import { Account } from './account';
import { Comment } from './comment';

export class Topic {
    idTopic: number;
    title: string;
    content: string;
    creationDay: Date;
    createdBy: string;
    state: number;
    commentId: Comment[];
}
