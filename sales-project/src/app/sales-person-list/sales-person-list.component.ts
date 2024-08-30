import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Kumar","anupkumar@test.com",100,5000),
    new SalesPerson("Pradeep","Mishra","pradeepmishra@test.com",200,10000),
    new SalesPerson("John","Doe","johndoe@test.com",300,15000)
  ];

}
