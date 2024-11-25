import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form;
  subscription;
  action;

  countrySettings;
  stateSettings;
  districtSettings;
  bloodGroupSettings;

  countryData;
  stateData;
  districtData;
  bloodGroupData;

  registeredDonors;
  bloodBanks;
  bloodRequests;
  activeDonors;

  constructor(private route: ActivatedRoute) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.form = new FormGroup({
      country: new FormControl('', null),
      state: new FormControl('', null),
      district: new FormControl('', null),
      bloodGroup: new FormControl('', null)
    });

    this.countrySettings = { 
      singleSelection: true, 
      text:"Select Country",
      enableSearchFilter: true,
      badgeShowLimit: 1,
      classes:"dropdownClass"
    };
    this.stateSettings = { 
      singleSelection: true, 
      text:"Select State",
      enableSearchFilter: true,
      badgeShowLimit: 1,
      classes:"dropdownClass"
    };
    this.districtSettings = { 
      singleSelection: false, 
      text:"Select District",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      showCheckBox: true,
      badgeShowLimit: 1,
      classes:"dropdownClass"
    };
    this.bloodGroupSettings = { 
      singleSelection: true, 
      text:"Select Blood Group",
      enableSearchFilter: true,
      badgeShowLimit: 1,
      classes:"dropdownClass"
    };

    //Dummy data - Starts.
    this.countryData = [
      { "id":1,"itemName":"India" }
    ];
    this.stateData = [
      { "id":1,"itemName":"West Bengal" },
      { "id":2,"itemName":"Delhi" },
      { "id":3,"itemName":"Punjab" },
      { "id":4,"itemName":"Tamilnadu" },
      { "id":5,"itemName":"Gujrat" }
    ];
    this.districtData = [
      { "id":1,"itemName":"Jalpaiguri" },
      { "id":2,"itemName":"Howrah" },
      { "id":3,"itemName":"Hoogly" },
      { "id":4,"itemName":"Bankura" },
      { "id":5,"itemName":"Midnapur" }
    ];
    this.bloodGroupData = [
      { "id":1,"itemName":"A (+) ve" },
      { "id":2,"itemName":"A (-) ve" },
      { "id":3,"itemName":"B (+) ve" },
      { "id":4,"itemName":"B (-) ve" },
      { "id":5,"itemName":"AB (+) ve" },
      { "id":6,"itemName":"AB (-) ve" },
      { "id":7,"itemName":"O (+) ve" },
      { "id":8,"itemName":"O (-) ve" },
    ];
    //Dummy data - Ends.

    this.registeredDonors = 2104;
    this.bloodBanks = 34;
    this.bloodRequests = 214;
    this.activeDonors = 15;

    // this.route
    //   .data
    //   .subscribe(v => {
    //     // console.log(v);
    //     if(v && v !== undefined) {
    //       this.action = v;
    //     }
    //     else {
    //       this.action = "";
    //     }

    //     if(this.action.toString().toUpperCase() == "LOGIN") {
    //       // this.loginWindow = true;
    //     }
    //   });
  }

  onSubmit(){

  }

  onCountrySelect(item: any) {

  }

  OnCountryDeSelect(items: any) {

  }

  onStateSelect(items: any) {

  }

  OnStateDeSelect(items: any) {

  }

  onLearnMore1() {

  }

  onLearnMore2() {

  }

  onLearnMore3() {

  }

  googlePlayStore() {

  }

}
