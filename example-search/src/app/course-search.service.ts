import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Course } from './course';

@Injectable()
export class CourseSearchService {
  constructor(private httpClient: HttpClient) {}
  getCourse(id: number): Observable<Course> {
    let url: string = `/api/course/${id}/`;
    return this.httpClient.get<Course>(url);
  }
  search(query: string): Observable<Course[]> {
    let url: string = '/api/course/search/';
    const params: HttpParams = new HttpParams().set('query', query);
    return this.httpClient.get<Course[]>(url, {params});
  }
}
