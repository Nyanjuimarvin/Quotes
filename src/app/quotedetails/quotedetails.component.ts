import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {

  //Input binding
  @Input() quotedetail: any;

  //Upvote Button
  plusUp() {
    this.quotedetail.upvoteCount++;
  }

  //Downvote button
  plusDown() {
    this.quotedetail.downvoteCount++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
