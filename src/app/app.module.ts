import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { SummaryComponent } from './account/summary/summary.component';
import { SummaryListComponent } from './account/summary/summary-list/summary-list.component';
import { SummaryListItemComponent } from './account/summary/summary-list/summary-list-item/summary-list-item.component';
import { TransactionsComponent } from './account/transactions/transactions.component';
import { TransactionListComponent } from './account/transactions/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './account/transactions/transaction-list/transaction-list-item/transaction-list-item.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SummaryComponent,
    SummaryListComponent,
    SummaryListItemComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
