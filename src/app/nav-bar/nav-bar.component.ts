import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {LoginService} from "../login.service";
import { AfterViewInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit, AfterViewInit, OnDestroy {
  selected = '';
  _ls: LoginService;
  constructor(private snackBar: MatSnackBar,private ls:LoginService) {
    this._ls = ls;
    console.log("Navbar created.");
   }

   ngOnInit(){
     console.log("Navbar onInit()");
   }

  ngAfterViewInit(){
    console.log("Navbar afterViewInit()");
  }

  ngOnDestroy(){
    console.log("Navbar destroyed.");
  }

  openSnackBar() {
    let snackBarRef = this.snackBar.open(this.selected,'', {
      duration: 1000
    });
  }
}
