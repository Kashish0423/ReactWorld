import React, { useState, useEffect, useRef } from "react";
import styles from "./TodoApp.module.css";
import cx from "classnames";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className={cx(styles.todoForm)} onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          {" "}
          <input
            type='text'
            placeholder='Update your item'
            value={input}
            name='text'
            className={cx(styles.todoinput)}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className={styles.todobutton}>Update </button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Add item to list'
            value={input}
            name='text'
            className={styles.todoinput}
            onChange={handleChange}
            ref={inputRef}
          />

          <button className={styles.todobutton}>Add </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
