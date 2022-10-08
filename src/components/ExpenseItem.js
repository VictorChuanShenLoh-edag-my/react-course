import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card.js';
import { useState } from 'react';

const ExpenseItem = (props)=> {
    const [title, setTitle] = useState(props.title);

    const clickHandler = ()=>{
        setTitle('Updated !');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.price}</div>
            </div>
            <button onClick={clickHandler}>Update Title</button>
        </Card>
    )
}

export default ExpenseItem;