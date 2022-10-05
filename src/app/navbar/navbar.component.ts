import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() showNav: boolean = false;
  @Output() addLiEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addLiOnSearch(){
    this.addLiEvent.emit('fdgh')
  }

}
