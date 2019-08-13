import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'direct';
  courses=[1,2,3,4,5];
 
viewMode='anything';
crs;
loadcrs(){
  this.crs=[
  {id: 1, name: 'course1'},
  {id: 2, name: 'course2'},
  {id: 3, name: 'course3'},
];
}
onAdd() {
  this.crs.push({id: 4,name: 'course4'});

}
onRemove(course){
  let index=this.crs.indexOf(course);
  this.crs.splice(index,1);

}
}
