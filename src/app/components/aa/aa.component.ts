import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})
export class AaComponent implements OnInit {

  @Input() count:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
