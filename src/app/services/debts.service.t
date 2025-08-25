import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Debt } from '../models/debt';

@Injectable({ providedIn: 'root' })
export class DebtsService {
  private api = 'http://localhost:3000/debts';
  constructor(private http: HttpClient) {}

  list(status: 'all'|'pending'|'paid' = 'all') {
    return this.http.get<{ data: Debt[] }>(`${this.api}?status=${status}`);
  }
  get(id: string) {
    return this.http.get<Debt>(`${this.api}/${id}`);
  }
  create(d: Partial<Debt>) {
    return this.http.post<Debt>(this.api, d);
  }
  update(id: string, d: Partial<Debt>) {
    return this.http.patch<Debt>(`${this.api}/${id}`, d);
  }
  pay(id: string) {
    return this.http.post<Debt>(`${this.api}/${id}/pay`, {});
  }
  remove(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
