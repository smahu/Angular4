import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Page2Component implements OnInit {
  secondStepper:FormGroup;

  constructor(private formbuilder : FormBuilder) { }

  ngOnInit() {
    this.secondStepper = this.formbuilder.group({

    })
  }

}
