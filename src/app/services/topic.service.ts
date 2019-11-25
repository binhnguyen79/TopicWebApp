import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../topic';
import { Comment } from '../comment';

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    private baseUrl = 'http://localhost:8080/api';

    private getTopicUrl = this.baseUrl + '/get-topic';
    private getTopicByKeyUrl = this.baseUrl + '/search-topic-by-key';
    private getTopicForUserUrl = this.baseUrl + '/my-topics';
    private createTopicForUserUrl = this.baseUrl + '/create-topic';
    private getIsTrueOwnerUrl = this.baseUrl + '/is-true-owner';
    private submitCommentForTopicUrl = this.baseUrl + '/submit-comment';
    private getListIsTrueComment = this.baseUrl + '/get-list-is-true-comment';
    private onSaveUpdateTopic = this.baseUrl + '/update-topic';
    private unLockOrLockTopicUrl = this.baseUrl + '/unlock-or-lock-topic';

    constructor(private http: HttpClient) { }

    getTopic(): Observable<Array<Topic>> {
        return this.http.get<Array<Topic>>(this.getTopicUrl);
    }

    getTopicByKeyWord(key: string): Observable<Array<Topic>> {
        return this.http.get<Array<Topic>>(this.getTopicByKeyUrl, { params: { key } });
    }

    getTopicForUser(username: string): Observable<Array<Topic>> {
        return this.http.get<Array<Topic>>(this.getTopicForUserUrl, {params: { username }});
    }

    createTopic(title: string, content: string, username: string): Observable<Topic> {
        return this.http.post<Topic>(this.createTopicForUserUrl, {}, { params: { username, title, content } });
    }

    isTrueOwner(username: string, topicId: number): Observable<boolean> {
        const id = topicId + '';
        return this.http.get<boolean>(this.getIsTrueOwnerUrl, { params: { username, id } });
    }    
    
    submitComment(idTopic: number, comment: string, username: string) {
        const id = idTopic + '';
        return this.http.post(this.submitCommentForTopicUrl, {}, { params: { id, comment, username } });
    }
    
    isTrueOwnerComment(username: string, idTopic: number) {
        const id = idTopic + '';
        return this.http.get<Array<Comment>>(this.getListIsTrueComment, { params: { username, id } });
    }

    onUpdateTopic(topic: Topic) {
        return this.http.put(this.onSaveUpdateTopic, topic);
    }
    
    unlockOrLockTopic(idTopic: number) {
        const id = idTopic + '';
        return this.http.post(this.unLockOrLockTopicUrl, {}, { params: { id } });
    }
}
