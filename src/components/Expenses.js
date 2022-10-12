import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem date={props.date} title={props.title} price={props.price}></ExpenseItem>
        </div>
    )
}

export default Expenses;