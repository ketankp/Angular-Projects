import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Output() toggleEvent = new EventEmitter();

  drawerToggel(){
    this.toggleEvent.emit();
  }

}
