import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  
  const expensesList =[
    {
      id: Math.random().toString(),
      title: 'Title 1',
      price: '500.50',
      date: new Date('01/12/2019')
    },
    {
      id: Math.random().toString(),
      title: 'Title 2',
      price: '30.01',
      date: new Date('06/30/2019')
    }
  ];

  const [expenses, setExpenses] = useState(expensesList);

  const onAddExpenseHandler = expense => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
      <Expenses item = {expenses}></Expenses>
    </div>
  );
}

export default App;
