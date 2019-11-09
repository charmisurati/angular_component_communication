import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {


  @Output() newaddemp = new EventEmitter<{emp_name:string,emp_add:string,emp_mob:number}> ()

  constructor() { }

  ngOnInit() {
  }

  //creating a Function Input form

  addemp(emp_name,emp_add,emp_mob)
  {
    this.newaddemp.emit({emp_name:emp_name.value,emp_add:emp_add.value,emp_mob:emp_mob.value})
  }
}
