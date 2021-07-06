import React from "react";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.css";
import cx from "classnames";

const TodoApp = () => {
  const mystyle = {
    background: `linear-gradient(
      90deg,
      rgba(48, 16, 255, 1) 0%,
      rgba(100, 115, 255, 1) 100%
    )`,
    backgroundImage: ` url(https://us.123rf.com/450wm/tumsasedgars/tumsasedgars1904/tumsasedgars190400111/121845190-to-do-list-business-education-and-success-background.jpg?ver=6)`,
  };

  return (
    <div style={mystyle}>
      <div className={cx(styles.todoApp, styles.todobody)}>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
