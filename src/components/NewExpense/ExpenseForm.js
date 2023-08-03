import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const fullNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredTitle: event.target.event,
  //     });
  //   };

  //   // If you state update depends on the previous state, use the function form below:
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });

  const submitHandler = (event) => {
    event.preventDefault();

    ////------------khodam comment kardam bebinam chi mishe
    // const expenseDate = {
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enteredDate),
    // };
    // console.log(expenseDate);
    // -----------------ta inja

    // --------------------------------
    // important tip: Hoe can we clear inputs:
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
    // and also set the value property for inputs: EX --> value={enteredDate}
    // --------------------------------

    setEnteredName("");
    setEnteredPhone("");
    setEnteredAddress("");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const myStyle = {
    color: "white",
    padding: "10px",
    margin: "20px",
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label style={myStyle}>Personal Information: </label>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Full Name: </label>
            <input type="text" onChange={fullNameChangeHandler}></input>
          </div>

          <div className="new-expense__control">
            <label>Address: </label>
            <input
              type="text"
              maxLength={50}
              onChange={addressChangeHandler}
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Phone Number: </label>
            <input
              type="number"
              maxLength={12}
              onChange={phoneChangeHandler}
            ></input>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
