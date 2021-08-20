import { useState } from "react";
import classes from "./ReviewForm.module.css";

const ReviewForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValidation, setInputValidation] = useState(true);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 15) {
      setInputValidation(false);
    } else {
      setInputValidation(true);
      props.onComment(inputValue);
      setInputValue("");
    }
  };
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim().length < 20) {
      setInputValidation(false);
    } else {
      setInputValidation(true);
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input
        onChange={inputChangeHandler}
        value={inputValue}
        placeholder={props.placeholder}
        className={inputValidation ? classes.input : classes.inputWarning}
      />
      {!inputValidation && (
        <p className={classes.warning}>Please, add a few words!</p>
      )}
      <button
        type="submit"
        className={classes.button}
        disabled={!inputValidation}
      >
        Add Review
      </button>
    </form>
  );
};

export default ReviewForm;
