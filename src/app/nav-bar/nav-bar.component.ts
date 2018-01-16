import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {LoginService} from "../login.service";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  selected = '';
  constructor(public snackBar: MatSnackBar,public ls:LoginService) { }

  ngOnInit() {
  }

  openSnackBar() {
    let snackBarRef = this.snackBar.open(this.selected,'', {
      duration: 1000
    });
  }
}
