import './App.css';
import Expenses from './components/Expenses';
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expensesList =[
    {
      title: 'Title 1',
      price: '$555.55',
      date: new Date('01/12/1995')
    },
    {
      title: 'Title 2',
      price: '$600.55',
      date: new Date('06/30/1995')
    }
  ];

  const onAddExpenseHandler = expense => {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
      <Expenses item = {expensesList}></Expenses>
    </div>
  );
}

export default App;
