import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();
  @Output() notifyLoginAction: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  openLoginForm() {
    this.notifyLoginAction.emit('M');
  }

}
