import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { DeletequoteComponent } from './deletequote/deletequote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotedetailsComponent,
    QuoteformComponent,
    DeletequoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
