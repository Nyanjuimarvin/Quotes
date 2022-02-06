import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})



export class QuotesComponent implements OnInit {

  plusUp(index:number){
    this.quotes[index].upvoteCount++;
  }
  plusDown(index:number){
    this.quotes[index].downvoteCount++;
  }

  quotes:Quotes[] = [
    new Quotes("Marvin","Novik","They are Rage, Brutal, without Mercy. But you, you will be Worse. RIP AND TEAR UNTIL ITS DONE!!!","ligma"),


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
