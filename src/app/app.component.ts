import { Component, Input, OnInit } from '@angular/core';
import { listobject } from 'src/Utils/Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'expensetracker';
  expenselist:Array<listobject>=[];
  hideli:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  addevent(expenseList:any){
    this.expenselist=expenseList;
  }
  hide(hideli:any){
    this.hideli=hideli;

  }
}
