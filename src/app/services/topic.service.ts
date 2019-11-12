import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../topic';

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    private baseUrl = 'http://localhost:8080/api';

    private getTopicUrl = this.baseUrl + '/get-topic';
    private getTopicByKeyUrl = this.baseUrl + '/search-topic-by-key';
    private getTopicForUserUrl = this.baseUrl + '/my-topics';

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
}
