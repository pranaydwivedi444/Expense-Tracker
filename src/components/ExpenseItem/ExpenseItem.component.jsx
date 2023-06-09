import { useState } from "react";
import Card from "../Card/card.component";
import ExpenseDate from "../ExpenseDate/ExpenseDate.component";
import "./ExpenseItem.styles.css";

function ExpenseItem(props) {
  console.log(props);
  const { date, title, id, amount } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
