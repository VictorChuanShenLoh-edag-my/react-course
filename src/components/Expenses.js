import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [expenseFilter, setExpenseFilter] = useState('2022');

    const onSetExpenseFilterHandler = (selectedFilter) => {
        setExpenseFilter(selectedFilter);
    };

    const filteredExpenses = props.item.filter(expense => expense.date.getFullYear().toString() === expenseFilter);
    
    return (
        <Card className="expenses">
            <ExpensesFilter expenseFilter={expenseFilter} onSetExpenseFilter={onSetExpenseFilterHandler} />
            <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
    )
}

export default Expenses;