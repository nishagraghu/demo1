import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 
  constructor() { 
    
  }
  submit(x){
    console.log(x);
  }
  log(x){
    console.log(x)
  }
  ngOnInit(): void {
    
  }

}
