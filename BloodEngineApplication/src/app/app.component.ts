import { Component, ViewChild } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Blood Engine';

  constructor(private router: Router, public dialog: MatDialog) {
    
  }

  setLoginAction(action: string) {
    alert(action);

    let loginData: string = "Hello";
    let height: string = "";
    let width: string = "";
    let top: string = "";
    let left: string = "";

    if(action.toUpperCase() == "M") {
      height = "60%";
      width = "250px";
      top = "50vh";
      left = "50vw";
    }
    else {
      height = "375px";
      width = "550px";
      top = "50vh";
      left = "50vw";
    }

    const dialogRef = this.dialog.open(
      LoginComponent,
      {
        data: { loginData },
        height: height,
        width: width,
        disableClose: false,
        hasBackdrop: true,
        panelClass:'makeItMiddle',
        position: {top: top, left: left}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      alert('Bingo');
    });
  }
}
