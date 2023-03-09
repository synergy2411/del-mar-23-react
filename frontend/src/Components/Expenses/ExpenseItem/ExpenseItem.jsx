import ExpenseCurrency from "../ExpenseCurrency/ExpenseCurrency";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h6 className="text-center">{props.exp.title.toUpperCase()}</h6>
        </div>
        <div className="card-body">
          <ExpenseCurrency amount={props.exp.amount} />
          {/* <p>Amount : ${props.exp.amount}</p> */}
          {/* <p>Created At : {props.exp.createdAt.toLocaleString()}</p> */}
          <ExpenseDate createdAt={props.exp.createdAt} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
