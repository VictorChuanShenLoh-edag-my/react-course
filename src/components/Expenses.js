import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = () => {
    const date = new Date();
    const title = 'Test Title';
    const price = '$888.88';
    return (
        <div className="expenses">
            <ExpenseItem date={date} title={title} price={price}></ExpenseItem>
            <ExpenseItem date={date} title={title} price={price}></ExpenseItem>
            <ExpenseItem date={date} title={title} price={price}></ExpenseItem>
        </div>
    )
}

export default Expenses;