import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { filter } from 'rxjs';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss']
})
export class AddbuttonComponent implements OnInit {

  categories:boolean=false;
  addbutton:boolean=false;
  categorieslist:Array<string>=[]
  @Output() addEvent = new EventEmitter<Array<string>>();

  constructor() { }

  ngOnInit(): void {
  }
  addoptions(){
    this.addbutton=true;
  }
  date(e:any){
    this.addbutton=false;
    this.categories=true;
    this.categorieslist.push(e.target.value);
    this.addEvent.emit(this.categorieslist);
  }

}
