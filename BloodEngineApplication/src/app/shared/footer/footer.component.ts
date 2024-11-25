import { Component, OnInit, Inject } from '@angular/core';
import { from, Subscription } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  copyRightText;

  constructor() { 
    this.copyRightText = 'Copyright ' + (new Date()).getFullYear().toString() + ' Blood Engine';
  }

  ngOnInit() {

  }

}
