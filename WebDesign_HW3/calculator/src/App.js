import { useReducer } from "react";
import "./App.css";

const ACTIONS = {
  ADD_CHAR: "add-char",
  CLEAR: "clear",
  EVALUATE: "evaluate",
  PERCENT: "percentage",
  FACT: "factorial",
  LN: "ln",
  LOG: "log",
  SIN: "sin",
  COS: "cos",
  TAN: "tan",
  SQRT: "sqrt",
  EXP: "exp",
  XY: "x^y",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_CHAR:
      if (payload === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload === "." && state.currentOperand == null) {
        return state;
      }
      if (payload === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };

    case ACTIONS.EVALUATE:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: eval(state.currentOperand),
      };
    case ACTIONS.PERCENT:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: state.currentOperand * 0.01,
      };
    case ACTIONS.FACT:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: fact(state.currentOperand),
      };
    case ACTIONS.LN:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.log(state.currentOperand),
      };
    case ACTIONS.LOG:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.log(state.currentOperand),
      };
    case ACTIONS.SIN:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.sin(state.currentOperand),
      };
    case ACTIONS.COS:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.cos(state.currentOperand),
      };
    case ACTIONS.TAN:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.tan(state.currentOperand),
      };
    case ACTIONS.SQRT:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.sqrt(state.currentOperand, 2),
      };
    case ACTIONS.XY:
      if (state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: Math.pow(state.currentOperand, 2),
      };
    case ACTIONS.CLEAR:
      return {};
  }
}

function fact(userInput) {
  let i, num, f;
  f = 1;
  num = userInput;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;

  userInput = f;
  return userInput;
}

function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {});
  return (
    <div className="page-content">
      <div className="container">
        <div className="display">
          <div id="outputBox">{currentOperand}</div>
        </div>
        <div className="btns">
          <div className="row">
            <button id="deg" className="btn">
              Deg
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.FACT,
                })
              }
            >
              x!
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "(" })}
            >
              (
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: ")" })}
            >
              )
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.PERCENT })}
            >
              %
            </button>
            <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
              AC
            </button>
          </div>

          <div className="row">
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.SIN,
                })
              }
            >
              sin
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.LN,
                })
              }
            >
              ln
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 7 })}
            >
              7
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 8 })}
            >
              8
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 9 })}
            >
              9
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "/" })}
            >
              ÷
            </button>
          </div>

          <div className="row">
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.COS,
                })
              }
            >
              cos
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.LOG,
                })
              }
            >
              log
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 4 })}
            >
              4
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 5 })}
            >
              5
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 6 })}
            >
              6
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "*" })}
            >
              x
            </button>
          </div>

          <div className="row">
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.TAN,
                })
              }
            >
              tan
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.SQRT,
                })
              }
            >
              √
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 1 })}
            >
              1
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 2 })}
            >
              2
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: 3 })}
            >
              3
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "-" })}
            >
              -
            </button>
          </div>

          <div className="row">
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_CHAR, payload: "2.71828182846" })
              }
            >
              EXP
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.XY,
                })
              }
            >
              x^y
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "0" })}
            >
              0
            </button>
            <button
              id="numbtn"
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "." })}
            >
              .
            </button>
            <button
              id="eval"
              onClick={() =>
                dispatch({
                  type: ACTIONS.EVALUATE,
                })
              }
            >
              =
            </button>
            <button
              className="btn"
              onClick={() => dispatch({ type: ACTIONS.ADD_CHAR, payload: "+" })}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
