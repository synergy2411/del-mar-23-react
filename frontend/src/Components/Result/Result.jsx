import React, { Component } from "react";
import { connect } from "react-redux";
import * as fromActions from "../../store/actions/rootActions";
import classes from "./Result.module.css";

class Result extends Component {
  render() {
    console.log(this.props); // { counter, result, onStoreResult()}
    return (
      <div className="row">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-outline-danger"
              onClick={() => this.props.onStoreResult(this.props.counter)}
            >
              Store Result
            </button>
          </div>
          <ul className="list-group">
            {this.props.result.map((r, i) => (
              <li
                className={`list-group-item mb-2 ${classes["clickable"]}`}
                key={i}
                onClick={() => this.props.onDeleteResult(i)}
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// map the redux store state with the props of the connected component
const mapStateToProps = (state) => {
  return {
    result: state.result,
    counter: state.counter,
  };
};

// map the dispatch function with the props of the connected component
const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: (ctr) => dispatch(fromActions.onStoreResult(ctr)),
    onDeleteResult: (index) => dispatch(fromActions.onDeleteResult(index)),
  };
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(Result);

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// const Result = () => {
//   const { result, counter } = useSelector((state) => state);
//   const dispatch = useDispatch();

//   return (
//     <div className="row">
//       <div className="col-4 offset-4">
//         <div className="d-grid">
//           <button
//             className="btn btn-outline-danger"
//             onClick={() => dispatch(fromActions.onStoreResult(counter))}
//           >
//             Store Result
//           </button>
//         </div>
//         <ul className="list-group">
//           {result.map((r, i) => (
//             <li key={i}>{r}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Result;
