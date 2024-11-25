import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from, Subscription } from 'rxjs';
import {  } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  form;
  subscription;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: any, private formBuildfer: FormBuilder) { 
      this.subscription = new Subscription();
    }

  ngOnInit() {
    this.form = new FormGroup({
      emailId: new FormControl('', null),
      password: new FormControl('', null)
    });
  }

  onSubmit() {

  }

  forgotPassword() {

  }

  newRegistration() {

  }

  facebookLogin() {

  }

  googleLogin() {

  }

  amazonLogin() {

  }

  twitterLogin() {
    
  }

}
