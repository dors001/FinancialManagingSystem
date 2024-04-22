import React from "react";
import style from "./Calculator.module.css";

const calculator = () => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    formatInput(event.target);
  };

  return (
    <>
      <div className={style.calcContainer}>
        <div className={style.descriptionContaier}>
          <textarea
            className={style.descContent}
            placeholder="Expenses description"
            maxLength={85}
          ></textarea>
        </div>
        <div className={style.amountContainer} />
        <input
          type="text"
          className={style.amountContent + " placeholder='Amount'"}
          placeholder="Amount"
          onInput={handleInput}
        ></input>
      </div>
      <div></div>
      <div className={style.amountBtnsGrp}>
        <div className={style.amountBtn}>+</div>
        <div className={style.amountBtn}>0</div>
        <div className={style.amountBtn}>-</div>
      </div>
      <div className={style.calcBtnsGrp}>
        <div className={style.calcBtn}>Add</div>
        <div className={style.calcBtn}>Subtract</div>
      </div>
    </>
  );
};

export default calculator;
