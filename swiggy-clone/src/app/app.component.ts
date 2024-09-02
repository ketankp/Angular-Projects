import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HelperService } from './service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-clone';
  addressNavEnable = false;
  loginSideNavEnable = false;
  constructor(private helperService: HelperService){
    this.helperService.addressSideNav.subscribe(res=>{
      this.addressNavEnable = res;
    });
    
    this.helperService.loginSideNav.subscribe(res=>{
      this.loginSideNavEnable = res;
    });   
  }
}
