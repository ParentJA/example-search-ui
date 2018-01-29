import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
  course: Course;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe((data: {course: Course}) => this.course = data.course);
  }
}
