import React, { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [value, setValue] = useState("");

  const changeInputHandler = (evt) => {
    setValue(evt.target.value);
  };

  const submitFormHandler = (evt) => {
    evt.preventDefault();
    const obj = {
      id: Math.random(),
      title: value,
      isCompleted: false,
    };
    props.onGetTodo(obj);
    setValue("");
  };

  return (
    <>
      <form className="site-form" onSubmit={submitFormHandler}>
        <label className="site-form__label">
          <input
            className="site-form__text"
            type="text"
            name="user_text"
            placeholder="Enter todos"
            value={value}
            onChange={changeInputHandler}
          />
        </label>
        <button className="site-form__btn" type="submit">
          +
        </button>
      </form>
    </>
  );
};

export default Form;
