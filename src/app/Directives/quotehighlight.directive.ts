import { Directive,ElementRef} from '@angular/core';

@Directive({
  selector: '[appQuotehighlight]'
})
export class QuotehighlightDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.border = "2px outset red";

  }

}
