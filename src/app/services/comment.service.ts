import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080/api';

  private getCommentForAdminUrl = this.baseUrl + '/get-comment-for-admin';
  private activateCommentUrl = this.baseUrl + '/unlock-or-lock-comment';

  constructor(private http: HttpClient) { }

  getCommentForAdmin(username: string): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(this.getCommentForAdminUrl, { params: { username } });
  }

  activateComment(id_comment: number): Observable<any> {
    const id = id_comment + '';
    return this.http.put<any>(this.activateCommentUrl, {}, { params: { id } });
  }
}
