import React from 'react';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <li>
      {transaction.text} <span>{transaction.type === 'expense' ? '-' : '+'}${transaction.amount}</span>
      <button onClick={() => onDelete(transaction.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
};

export default TransactionItem;