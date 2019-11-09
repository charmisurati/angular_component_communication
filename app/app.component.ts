import { Component,OnInit } from '@angular/core';
import { Server } from 'https';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'componetcontacts';
  arrlist =[]

  ngOnInit()
  {

  }
 
  addok ( server:{emp_name:string,emp_add:string,emp_mob:number})
    {
          this.arrlist.push({emp_name:server.emp_name, emp_mob:server.emp_mob, emp_add:server.emp_add})
    }




}



