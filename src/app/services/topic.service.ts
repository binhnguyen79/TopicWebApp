import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../topic';

@Injectable({
    providedIn: 'root'
})
export class TopicService {

    private getTopicUrl = 'http://localhost:8080/api/get-topic';
    private getTopicByKeyUrl = 'http://localhost:8080/api/search-topic-by-key'

    constructor(private http: HttpClient) { }

    getTopic(): Observable<Array<Topic>> {
        return this.http.get<Array<Topic>>(this.getTopicUrl);
    }

    getTopicByKeyWord(key: string): Observable<Array<Topic>> {
        return this.http.get<Array<Topic>>(this.getTopicByKeyUrl, { params: { key } });
    }
}
