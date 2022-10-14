import './NewExpense.css';
import './ExpenseForm.js';
import ExpenseForm from './ExpenseForm.js';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isStartEditing, setIsStartEditing] = useState(false);

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const onIsStartEdtingHandler = () =>{
        setIsStartEditing(prevState => !prevState);
    }

    let newExpenseContent = <button onClick={onIsStartEdtingHandler}>Add New Expense</button>;

    if (isStartEditing) {
        newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onSetCancel={onIsStartEdtingHandler}></ExpenseForm>;
    }

    return <div className="new-expense">
        {newExpenseContent}
    </div>
}

export default NewExpense;