import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styles from "./TodoApp.module.css";
import cx from "classnames";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete ? cx(styles.complete, styles.todorow) : styles.todorow
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className={styles.deleteicon}
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={styles.editicon}
        />
      </div>
    </div>
  ));
};

export default Todo;
