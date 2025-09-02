import type { Transaction } from "../types";

interface Props {
  transactions: Transaction[];
}

function TransactionList({ transactions }: Props) {
  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>
          {t.date} — {t.category} ({t.type}): ${t.amount}
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;