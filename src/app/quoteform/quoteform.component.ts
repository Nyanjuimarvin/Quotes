import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Classes/quotes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {


  @Output() userSubmit = new EventEmitter<Quotes>();
  userQuote = new Quotes("", "", "",0,0,false,new Date());


  //Submit form 
  submitForm() {

    if(!this.userQuote.author && !this.userQuote.posterName && !this.userQuote.quote){
      Swal.fire({
        title:"Hello There",
        text:"Kindly Fill in all Fields"
      });
    }
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
