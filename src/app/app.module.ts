import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';




@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    ProductComponent,
    ProductListComponent,
    ContactComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add this line
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
