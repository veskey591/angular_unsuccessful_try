import { Component, Input } from "@angular/core";

@Component({
    selector: "table-array",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.css"]
})

export class TableComponent {
@Input() Cards:any

constructor(){}
deleteCard(Cards:any){
    return this.Cards.splice(this.Cards.id , 1) // хотябы что-то удаляет.
}
}
 
