import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})



export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes("Marvin","Novik","They are Rage, Brutal, without Mercy. But you, you will be Worse. RIP AND TEAR UNTIL ITS DONE!!!","ligma"),
    
  ];



  //Show/hide
  showDetails(index:number){
    this.quotes[index].isDetailsShown = !this.quotes[index].isDetailsShown;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
