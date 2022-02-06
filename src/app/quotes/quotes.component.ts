import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})



export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes("Heike Monogatari","Marvin","The sound of the Gion Shōja bells echoes the impermanence of all things; the color of the sāla flowers reveals the truth that the prosperous must decline. The proud do not endure, they are like a dream on a spring night; the mighty fall at last, they are as dust before the wind."),
    new Quotes("Edmond Rostand","Iroquis Pliskin","Oh! We have our pockets full. Our lady-loves, phantasms of our brains, dream-fancies blown into soap-bubbles! Come! Take it, and change feigned love-words into true. I breathed my sighs and moans haphazard-wise; Call all these wandering love-birds home to nest. Come! Take it. You'll see that I was in these lettered lines, Eloquent all the more, the less sincere! Take it, and make an end!"),
    new Quotes("Shakespeare","Amaund Motierre","Nought's had,all's spent,where our desire is got without content"),
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
    this.quotes.unshift(user);
  }

  highlightQuote(index:number):any{
    let max = 1;
    if(this.quotes[index].upvoteCount > max){
      return this.quotes[index];
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
