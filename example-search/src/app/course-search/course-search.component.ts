import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseSearchService } from '../course-search.service';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html'
})
export class CourseSearchComponent {
  courses: Course[];
  constructor(private courseSearchService: CourseSearchService) {
    this.courses = [];
  }
  onSearch(query: string): void {
    this.courseSearchService.search(query).subscribe(courses => this.courses = courses);
  }
}
