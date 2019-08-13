import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
contactMethod=[
  {id: 1,name:'email'},
  {id: 2,name:'phone'},
  {id: 3,name:'mobile'},
];
  log(x){
  console.log(x);
}
submit(f){
  f.valid;
}

  constructor() { }
  

  ngOnInit() {
  }

}
