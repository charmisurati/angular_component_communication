import { Component, OnInit,Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {

 
  @Input() element : {emp_name:string,emp_add:string,emp_mob:number}
  constructor() { }

  ngOnInit() {
  }

}
