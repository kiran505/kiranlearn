import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  category=[
    {id: 1, name: 'science'},
    {id: 2, name: 'arts'},
    {id: 3, name: 'biotech'},
    {id: 4, name: 'languages'},
  ];
submit(course){
  console.log(course);

}
  constructor() { }

  ngOnInit() {
  }

}
