import type { Transaction } from "../types";

const dummyTransactions: Transaction[] = [
  { id: 1, type: "expense", category: "Food", amount: 25, date: "2025-09-01" },
  { id: 2, type: "income", category: "Salary", amount: 1500, date: "2025-09-01" },
  { id: 3, type: "expense", category: "Rent", amount: 700, date: "2025-09-01" }
];

function Dashboard() {
  const income = dummyTransactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = dummyTransactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Dashboard</h1>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p><strong>Balance: ${balance}</strong></p>
    </div>
  );
}

export default Dashboard;