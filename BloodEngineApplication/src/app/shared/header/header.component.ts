import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { MaterialModule } from '../../core/material-module';
import { Router } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();
  @Output() notifyLoginAction: EventEmitter<string> = new EventEmitter<string>();
  imageBloodEngineLogo;

  constructor(private router: Router, public dialog: MatDialog) { 
    this.imageBloodEngineLogo = 'assets/images/BloodEngineLogo.png';
  }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  openLoginForm() {
    this.notifyLoginAction.emit('D');
  }

}
