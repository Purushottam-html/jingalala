import React from 'react';

function ExpenseList({ expenses, onEdit, onDelete }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - ${expense.amount} - {expense.category}
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default ExpenseList;