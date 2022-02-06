import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { DeletequoteComponent } from './deletequote/deletequote.component';
import { QuotehighlightDirective } from './Directives/quotehighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotedetailsComponent,
    QuoteformComponent,
    DeletequoteComponent,
    QuotehighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
