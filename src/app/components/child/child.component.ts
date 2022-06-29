import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() count:number;
  @Output() boomClicked = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  
  }

  
}
