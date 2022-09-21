import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updateTodo } from "./counterSlice";

export const Todo = ({ todo }: any) => {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useAppDispatch();
  const handleOnInputChange = (e: any) => {
    setTodoTitle(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(updateTodo({ id: todo.id, title: todoTitle }));
    setIsUpdating(false);
  };
  return (
    <div onDoubleClick={() => setIsUpdating(!isUpdating)}>
      {isUpdating ? (
        <>
          <input
            aria-label="Set increment amount"
            value={todoTitle}
            onChange={handleOnInputChange}
          />
          <button onClick={handleAddTodo}> ADD</button>
        </>
      ) : (
        todo.title
      )}
    </div>
  );
};
