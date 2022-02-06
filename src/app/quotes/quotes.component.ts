import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})



export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes("Marvin", "Novik", "They are Rage, Brutal, without Mercy. But you, you will be Worse. RIP AND TEAR UNTIL ITS DONE!!!"),

  ];



  //Show/hide
  showDetails(index: number) {
    this.quotes[index].isDetailsShown = !this.quotes[index].isDetailsShown;
  }


  //Delete Quotes
  deleteQuote(deleteValue: boolean, index: number) {
    if (deleteValue) {

      let sure = confirm(`Do you really want to delete this quote by ${this.quotes[index].posterName} ?`);
      
      if (sure) {
        this.quotes.splice(index, 1);
      }
    }
  }

  //Add quotes to array
  addQuotes(user:any){
    this.quotes.push(user);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
