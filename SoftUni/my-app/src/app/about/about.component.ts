import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: number;
  name: string;
  phone: number;
  isShown: boolean = false;
  contacts = [];

  constructor() {
    this.contacts = [
      {id: 1, name: "Vladimir", phone: 12345678},
      {id: 2, name: "Ivan", phone: 3456789},
      {id: 3, name: "Dimitar", phone: 5678901}
    ]
  }

  showContacts() {
    this.isShown = !this.isShown; 
  }

  ngOnInit() {
  }

}
