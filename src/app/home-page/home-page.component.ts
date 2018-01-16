import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import storageAvailable from 'storage-available'
import { DataServvice } from '../datapass.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  name:string;

  constructor(public ds:DataServvice,public router: Router) {

    if(this.ds!==undefined) {
     debugger;
      this.name = this.ds.usename;
    }
  }

  ngOnInit() {
    if (storageAvailable('localStorage')) {
      alert("AAAAAAAAAAAAA")
    }
    else {
      alert("too bad")
    }
  }

}
