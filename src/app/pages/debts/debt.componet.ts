import { Component } from '@angular/core';

@Component({
  selector: 'app-debts-list',
  standalone: true,
  template: `<h2>Listado de Deudas</h2>`
})
export class DebtsListComponent {}

@Component({
  selector: 'app-debt-form',
  standalone: true,
  template: `<h2>Nueva Deuda</h2>`
})
export class DebtFormComponent {}

@Component({
  selector: 'app-debt-detail',
  standalone: true,
  template: `<h2>Detalle de Deuda</h2>`
})
export class DebtDetailComponent {}

