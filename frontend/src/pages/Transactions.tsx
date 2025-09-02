import { useState } from "react";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";
import type { Transaction } from "../types";

function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, type: "expense", category: "Food", amount: 25, date: "2025-09-01" },
    { id: 2, type: "income", category: "Salary", amount: 1500, date: "2025-09-01" }
  ]);

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    setTransactions([...transactions, { id: Date.now(), ...transaction }]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Transactions;