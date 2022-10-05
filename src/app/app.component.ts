import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'expensetracker';
  categorieslist:Array<string>=[];

  constructor() { }

  ngOnInit(): void {
  }

  addevent(categories:any){
    this.categorieslist=categories;
  }
}
