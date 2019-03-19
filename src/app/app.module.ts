import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { SummaryComponent } from './account/summary/summary.component';
import { SummaryListComponent } from './account/summary/summary-list/summary-list.component';
import { SummaryListItemComponent } from './account/summary/summary-list/summary-list-item/summary-list-item.component';
import { TransactionsComponent } from './account/transactions/transactions.component';
import { TransactionListComponent } from './account/transactions/transaction-list/transaction-list.component';
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
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
