import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { QuoteformComponent } from './quoteform/quoteform.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotedetailsComponent,
    QuoteformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
