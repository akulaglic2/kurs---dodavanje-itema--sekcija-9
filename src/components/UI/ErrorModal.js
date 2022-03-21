import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header>
          <h2 className={classes.header}>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
