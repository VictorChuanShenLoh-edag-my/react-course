import React from 'react';
import './ExpensesList.css';
import ExpensesItem from './ExpenseItem';

export default function ExpensesList(props) {
    if (props.items?.length === 0) {
        return <h1 className='expenses-list__fallback'>No Expenses Found.</h1>;
    } 

    return (
        <ul className='expenses-list'>
            {
                props.items?.map(expense =>
                    <ExpensesItem key={expense.id} date={expense.date} title={expense.title} price={`$${expense.price}`}></ExpensesItem>
                )
            }
        </ul>
    )
}
