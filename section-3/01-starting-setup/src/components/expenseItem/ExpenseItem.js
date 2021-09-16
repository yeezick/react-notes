import "./ExpenseItem.css"

const ExpenseItem = () => {


  return (
    <div className="expense-item">
      <div> June 6, 2021</div>
      <div className="expense-item__description">
        <h2> car insurance</h2>
        <div
        className="expense-item__price">$294.67</div>
      </div>
    </div>
  )
}

export default ExpenseItem
