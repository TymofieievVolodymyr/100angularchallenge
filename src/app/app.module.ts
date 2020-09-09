import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressbarComponent,
    StarRatingsComponent
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
