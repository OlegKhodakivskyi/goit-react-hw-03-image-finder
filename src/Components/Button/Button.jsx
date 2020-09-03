import css from "./Button.module.css";
import React from "react";

const Button = ({ loadMore }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    <button type="button" className={css.Button} onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;
