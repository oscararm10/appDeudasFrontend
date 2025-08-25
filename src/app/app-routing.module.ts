import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DebtDetailComponent, DebtFormComponent, DebtsListComponent } from './pages/debts/debt.componet';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'debts', 
    canActivate: [AuthGuard], 
    children: [
      { path: '', component: DebtsListComponent },
      { path: 'new', component: DebtFormComponent },
      { path: ':id', component: DebtDetailComponent },
    ]
  },
  { path: '', redirectTo: 'debts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
