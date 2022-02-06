import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-deletequote',
  templateUrl: './deletequote.component.html',
  styleUrls: ['./deletequote.component.css']
})
export class DeletequoteComponent implements OnInit {

  deleteQuotes?:Quotes;

  //Emit delete event <bool>
  @Output()deleteAny = new EventEmitter<boolean>();

  quoteDeleted(isIt:boolean){
    this.deleteAny.emit(isIt);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
