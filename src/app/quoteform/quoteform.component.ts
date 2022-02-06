import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {

  @Output() userSubmit = new EventEmitter<Quotes>();
  userQuote = new Quotes("", "", "");

  //Submit form 
  submitForm() {
    while (this.userQuote.author && this.userQuote.posterName && this.userQuote.quote) {
      this.userSubmit.emit(this.userQuote);
      //Try assigning a new instance
      this.userQuote = new Quotes("", "", "");
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
