import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Changed Title!!!");
  };

  const clickHandlerCoupon = () => {
    setAmount(Math.round(0.2 * amount));
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <button className="expense-item__btnChangeTitle" onClick={clickHandler}>
        Change Title
      </button>
      <button className="expense-item__btnCoupon" onClick={clickHandlerCoupon}>
        Add Coupon
      </button>
    </Card>
  );
};

export default ExpenseItem;
