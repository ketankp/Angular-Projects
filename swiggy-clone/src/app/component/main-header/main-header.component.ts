import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  @Output() toggleEvent = new EventEmitter();

  location_name:string = "Pune";

  drawerToggel(){
    this.toggleEvent.emit();
  }
}
