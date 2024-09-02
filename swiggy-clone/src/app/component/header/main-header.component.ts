import { Component, EventEmitter, Output } from '@angular/core';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {

  location_name:string = "Pune";
  constructor(private helperService:HelperService){}

  openSelectAddress(){
    this.helperService.addressSideNav.next(true);
  }
}
