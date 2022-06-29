import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  status:string = ""
  counter:number = 0;
  
  
  myName:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onBoomClicked() {
    console.log('boom');
    this.status = "boom!"
  }
  
}
