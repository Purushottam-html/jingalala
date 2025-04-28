import React, { useState, useEffect } from 'react';

function ExpenseForm({ addExpense, editExpense, isEditing, currentExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (isEditing && currentExpense) {
      setName(currentExpense.name);
      setAmount(currentExpense.amount);
      setCategory(currentExpense.category);
    }
  }, [isEditing, currentExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;

    const expenseData = {
      name,
      amount: parseFloat(amount),
      category,
    };

    if (isEditing) {
      editExpense(expenseData);
    } else {
      addExpense(expenseData);
    }

    setName('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Expense Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button type="submit">{isEditing ? 'Update Expense' : 'Add Expense'}</button>
    </form>
  );
}

export default ExpenseForm;