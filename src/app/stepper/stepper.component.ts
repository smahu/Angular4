import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class StepperComponent implements OnInit {

  isLinear = true;
  firstStepper : FormGroup;
  secondStepper : FormGroup;
  thirdStepper : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstStepper = this.formBuilder.group({
      firstName :['',Validators.required],
      lastName :['',Validators.required],
      address :['',Validators.required],
      city :['',Validators.required],
      pincode :['',Validators.required],
      state :['',Validators.required]

    });
  }

}
