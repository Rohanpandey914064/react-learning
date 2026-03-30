import React from 'react';
import TransactionItem from './Transaction-item';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <ul className="list">
      {transactions.map((transaction) => (
        <TransactionItem 
          key={transaction.id} 
          transaction={transaction} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TransactionList;