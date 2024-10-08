import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('drawer') sidenav!: MatSidenav;

  toggleDrawer(){
    console.log("Sidenav clicked");
    this.sidenav.toggle();
  }
}
