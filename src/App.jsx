import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExpenseIndex, setCurrentExpenseIndex] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === currentExpenseIndex ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    setIsEditing(false);
    setCurrentExpenseIndex(null);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentExpenseIndex(index);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm 
        addExpense={addExpense} 
        editExpense={editExpense}
        isEditing={isEditing}
        currentExpense={expenses[currentExpenseIndex]}
      />
      <ExpenseList 
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;