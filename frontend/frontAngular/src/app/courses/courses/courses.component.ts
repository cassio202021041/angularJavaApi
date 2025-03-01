import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Frontend'},
    {_id: "1", name: 'React', category: 'Frontend'},
    {_id: "2", name: 'Vue', category: 'Frontend'},
    {_id: "3", name: 'Node', category: 'Backend'},
    {_id: "4", name: 'Express', category: 'Backend'},
    {_id: "5", name: 'Django', category: 'Backend'},
    {_id: "6", name: 'Flask', category: 'Backend'},
  ];
  displayedColumns = ['name', 'category'];


  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {
  }

}
