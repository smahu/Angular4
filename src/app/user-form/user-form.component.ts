import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormComponent implements OnInit {

  selectedGender: string;
  firstStepper : FormGroup;
  genders=[
    'Male',
    'Female',
    'Others'
  ]

  emailFormControl = new FormControl('', [
    Validators.required,Validators.email
  ]);


  constructor(public snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

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
  getErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  openSnackBar() {
    let snackBarRef = this.snackBar.open(this.selectedGender,'', {
      duration: 1000
    });
  }

  saveSanckBar(){
    if (this.firstStepper.valid) {
      let snackBarRef = this.snackBar.open("Saved Successfully", '', {
        duration: 1000
      });
    }
  }
}
