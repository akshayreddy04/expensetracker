import { DatePipe } from '@angular/common';
import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';
import { empty } from 'rxjs';
import { listobject } from 'src/Utils/Types';


@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.scss']
})

export class AddbuttonComponent implements OnInit {
  categories:boolean=false;
  savebutton:boolean=false;
  showmodal:boolean=false;
  hideli:boolean=false;
  color:string='';
  selected:string[]=[];
  listobjarray:listobject[]=[];
  categoriesvalue:string[]=['Food','Clothing','Fruits','Shopping','Transpotation','Home','Travel','Wine','Bills','Gift','Education','Telephone','Baby','Sport','Tax','Electronics','Health','Entertainment','Car','Social','Insuarance','Office'];
  @Output() hide=new EventEmitter<boolean>();
  listobject:listobject = {
    category:'',
    datevar:new Date(),
    moneyspent:0,
    description:'',
    time:new Date().toLocaleTimeString()
  };
  expenseList: Array<listobject> = [];

  // categorieslist:Array<string>=[];
  // dates:Array<number>=[];
  // dateinstringformat:string=JSON.stringify(this.dates);
  // moneyspent:Array<number>=[];
  // today:any=new Date();
  // money:number=0;
  @Output() addEvent = new EventEmitter<Array<listobject>>();



  constructor(private datePipe: DatePipe) {
    this.listobject.datevar = this.datePipe.transform(this.listobject.datevar, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }

  addoptions(){
    this.categories=true;
    this.savebutton=false;
    this.hideli=true;
    this.hide.emit(this.hideli);
  }
  date():any{
    if(this.selected.length!=0){
      this.categories=false;
      this.savebutton=true;
      this.listobjarray=this.selected.map(val => JSON.parse(JSON.stringify(this.listobject)));
      this.selected.forEach((val,i) =>{
        this.listobjarray[i].category=val;
      })
    }else{
      alert('select category');

    }


  }

  formatTime(timeString: string) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }

  save(){
    this.listobjarray.forEach((value,i) => {
      value.time=this.formatTime(value.time);
    })
   console.log(this.formatTime(this.listobjarray[0].time));
   this.listobjarray.forEach(listobject =>{
    this.expenseList.push(JSON.parse(JSON.stringify(listobject)));
   })
   this.selected=[];
   this.addEvent.emit(this.expenseList);
   this.savebutton=false;
   this.showmodal=false;
   this.hideli=false;
   this.hide.emit(this.hideli);
  }
  addorremovevalue(value:string){
    if(this.selected.includes(value)){
      this.selected.splice(this.selected.indexOf(value),1);
    }else{
      this.selected.push(value);
    }
    console.log(this.selected);
  }
  findvalue(value:string){
    if(this.selected.includes(value)){
      return true;
    }else{
      return false;
    }

  }
  close(){
    this.showmodal=false;
  }

}
