import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  form;
  subscription;

  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', null),
      lastName: new FormControl('', null),
      organization: new FormControl('', null),
      emailId: new FormControl('', null),
      phone: new FormControl('', null),
      pinCode: new FormControl('', null),
      comment: new FormControl('', null),
      recaptchaReactive: new FormControl('', null)
    });
  }

  onSubmit() {

  }

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }

}
