import { Component, Input } from "@angular/core";

@Component({
    selector: "table-array",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.css"]
})

export class Table {
    @Input() obj: {type:string, number:number, expiration:any, owner: string} ={
        type: "Card",
        number: 123,
        expiration: "01/01/01",
        owner:"mr Meow"
    }  
    removeString(index: number){
        this.creditCards.splice(index, 1) //а как сделать?(
      }

}
 
