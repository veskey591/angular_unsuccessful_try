import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <table-array
  *ngFor="let el of creditCards" 
  [obj]="el"
  ></table-array>
  `
})
export class AppComponent {
  title = 'angular-2';
  creditCards: any[] =[
    {"type": "American Express", "number": "2496129306452222", "expiration": "04\/24","owner": "Hershel Bogisich"},
    {"type": "Visa", "number": "5145178325825569", "expiration": "02\/22","owner": "Santina Swaniawski"},
    {"type": "Visa", "number": "2673171633798922", "expiration": "12\/22","owner": "Zaria Kohler"},
    {"type": "MasterCard", "number": "4532683518952777", "expiration": "02\/22","owner": "Angeline Collins"},
    {"type": "MasterCard", "number": "4619119352580487", "expiration": "08\/24","owner": "Nayeli Gutkowski"},
    {"type": "Visa", "number": "4532876869583429", "expiration": "01\/23","owner": "Vern Walter"},
    {"type": "American Express", "number": "4532269366445526", "expiration": "04\/22","owner": "Minnie Aufderhar"},
    {"type": "Visa", "number": "4485267505909789", "expiration": "12\/22","owner": "Carmen Skiles"},
    {"type": "Visa", "number": "4929580947504529", "expiration": "07\/24","owner": "Alfonzo Mertz"},
    {"type": "MasterCard", "number": "2531669736687480", "expiration": "12\/23","owner": "Rae Turner"}]
}
