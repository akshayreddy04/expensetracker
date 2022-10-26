import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iconobject, listobject } from 'src/Utils/Types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 @Input() categorieslist:Array<listobject> = [];
 icons:Array<iconobject>=[
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  },
  {
    categoryname:'food',
    icon:'fa-solid fa-champagne-glasses'
  }

 ]
  constructor() {
  }

  ngOnInit(): void {

  }
  getColor(category:string):any{
    console.log(category,category.length,'Clothes & Shoping'.length);
    switch(category) {
      case 'Restaurant & Cafe':{
        return 'orange';
      }
      case 'Clothes & Shoping':{
        return 'voilet';
      }
      case 'Credit & Loans':{
        return 'green';
      }
      case 'Giftcards':{
        return 'yellow';
      }
    }
  }
  findicon(category:any){
    this.icons.forEach(element => {
      if(element.categoryname===category){
        return element.icon;
      }
    });
  }



}
