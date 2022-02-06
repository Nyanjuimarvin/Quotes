import { Directive, ElementRef } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Directive({
  selector: '[appQuotehighlight]'
})

export class QuotehighlightDirective {

  mostUpvotes!: Quotes;

  constructor(private element: ElementRef) {
    // let max = this.mostUpvotes.upvoteCount; W T H
    // if (this.element.nativeElement.mostUpvotes > max) {
      this.element.nativeElement.style.border = "2px outset red";
  }

}
