import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  afterLogin = false;
  constructor(public router: Router) {

  }

  OnClick(){
    this.afterLogin=true;
    this.router.navigate(['/user']);

  }
}

