import { useState } from 'react';
import Form from './component/Form';
import TransactionList from './component/Transaction-list';
import { sum } from './Utils';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (t) => setTransactions([...transactions, t]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  const totalIncome = sum(transactions, 'income');
  const totalExpense = sum(transactions, 'expense');

  return (
    <div>
      <h2>Transaction Tracker</h2>
      <div>Income: ❤️{totalIncome} | Expense: 😒{totalExpense}</div>
      <Form onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;