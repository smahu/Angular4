import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import { DataServvice } from '../datapass.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl1 = new FormControl('', [
    Validators.required
  ]);
  textValue:boolean
textValue1;
  @Output()
  name: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router, public ds:DataServvice) { }

  ngOnInit() {
  }

  OnLogin(value1) {
    debugger;
    this.ds.usename = value1.value;
    localStorage.setItem('userName', value1.value);
    this.router.navigate(['/home']);
  }
}
