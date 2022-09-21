import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addTodo, selectedTodos } from "./counterSlice";
import styles from "./Counter.module.css";
import { Todo } from "./Todo";

export function Counter() {
  const [todoInput, setTodoInput] = useState("");
  const todos = useAppSelector(selectedTodos);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const handleOnInputChange = (e: any) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <div>
      <div className={styles.row}>
        <input
          aria-label="Set increment amount"
          value={todoInput}
          onChange={handleOnInputChange}
        />
        <button onClick={handleAddTodo}> ADD</button>

        <ul>
          {todos.length ? (
            todos.map((todo) => (
              <div>
                <Todo todo={todo} />
              </div>
            ))
          ) : (
            <div>No todos</div>
          )}
        </ul>

        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button> */}
      </div>
    </div>
  );
}
