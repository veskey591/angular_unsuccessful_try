import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-2';
  creditCards: { id: number, type: string, number: number, expiration: any, owner: string }[] = [
    { id: 1, type: "American Express", number: 2496129306452222, expiration: 4.24, owner: "Hershel Bogisich" },
    { id: 2, type: "Visa", number: 5145178325825569, expiration: 2.22, owner: "Santina Swaniawski" },
    { id: 3, type: "Visa", number: 2673171633798922, expiration: 12.22, owner: "Zaria Kohler" },
    { id: 4, type: "MasterCard", number: 4532683518952777, expiration: 2.22, owner: "Angeline Collins" },
    { id: 5, type: "MasterCard", number: 4619119352580487, expiration: 8.24, owner: "Nayeli Gutkowski" },
    { id: 6, type: "Visa", number: 4532876869583429, expiration: 1.23, owner: "Vern Walter" },
    { id: 7, type: "American Express", number: 4532269366445526, expiration: 4.22, owner: "Minnie Aufderhar" },
    { id: 8, type: "Visa", number: 4485267505909789, expiration: 12.22, owner: "Carmen Skiles" },
    { id: 9, type: "Visa", number: 4929580947504529, expiration: 7.24, owner: "Alfonzo Mertz" },
    { id: 10, type: "MasterCard", number: 2531669736687480, expiration: 12.23, owner: "Rae Turner" }]
}
