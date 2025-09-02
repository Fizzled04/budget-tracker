import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Transaction } from "../types";

type Props = {
  onAdd: (transaction: Transaction) => void;
};

const TransactionForm: React.FC<Props> = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: parseFloat(amount),
      category,
      type,
    });
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 max-w-md">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
      />
      <select
        value={type}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value as "income" | "expense")}
        className="border border-gray-400 rounded px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;