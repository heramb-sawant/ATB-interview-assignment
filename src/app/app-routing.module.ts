import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SummaryComponent } from './account/summary/summary.component';
import { TransactionsComponent } from './account/transactions/transactions.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/summary', component: SummaryComponent },
  { path: 'account/transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
