export interface Debt {
  id: string;
  title: string;
  amount: number;
  due_date?: string;
  paid: boolean;
  created_at: string;
  updated_at: string;
  paid_at?: string;
}
