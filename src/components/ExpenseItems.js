import React, {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card'


const ExpenseItems = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log('Expense items evaluated by React');

    const clickHandler = () => {
        setTitle('Update!');
        console.log(title);
    };

    return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>

    </Card>
    );
}
export default ExpenseItems;