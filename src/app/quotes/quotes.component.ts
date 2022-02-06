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
    new Quotes("Edmond Rostand","Iroquois Pliskin","Oh! We have our pockets full. Our lady-loves, phantasms of our brains, dream-fancies blown into soap-bubbles! Come! Take it, and change feigned love-words into true. I breathed my sighs and moans haphazard-wise; Call all these wandering love-birds home to nest. Come! Take it. You'll see that I was in these lettered lines, Eloquent all the more, the less sincere! Take it, and make an end!"),
    new Quotes("Archer(Emiya)","Nanaya","I am the bone of my sword,Steel is my body and fire is my blood. I have created over a thousand blades.Unknown to death, Nor known to life. Have withstood pain to create many weapons. Yet those hands shall never hold anything. So, as I pray, Unlimited Blade Works  "),
    new Quotes("Shakespeare","Amaund Motierre","Nought's had,all's spent,where our desire is got without content"),
    new Quotes("Byakuya","Nox","We should not shed tears for that will serve as a defeat of our bodies to our hearts. It is then nothing more than proof for it to be said that our hearts are things beyond our ability to control."),
    new Quotes("Kubo Tite","Icon of Sin","If it rusts, it can never be trusted. If its owner fails to control it, it will cut him. Yes, pride is like a blade.")
  ];

  formshown:boolean =  false;

  showForm(){
    this.formshown = true
  }

  hideForm(){
    this.formshown = false;
  }


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


  constructor() { }

  ngOnInit(): void {
  }

}
