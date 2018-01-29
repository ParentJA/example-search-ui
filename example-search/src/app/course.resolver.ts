import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Course } from './course';
import { CourseSearchService } from './course-search.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private courseSearchService: CourseSearchService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    return this.courseSearchService.getCourse(route.params.id);
  }
}
