import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [expenseFilter, setExpenseFilter] = useState('');

    const onSetExpenseFilterHandler = (selectedFilter) => {
        setExpenseFilter(selectedFilter);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter expenseFilter={expenseFilter} onSetExpenseFilter={onSetExpenseFilterHandler}/>
            <ExpenseItem date={props.item[0].date} title={props.item[0].title} price={props.item[0].price}></ExpenseItem>
            <ExpenseItem date={props.item[1].date} title={props.item[1].title} price={props.item[1].price}></ExpenseItem>
        </Card>
    )
}

export default Expenses;