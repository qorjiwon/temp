import React from "react";
import "./ListInput.css";

export default function ListInput({
  handleSubmit,
  setExpenseItem,
  expenseItem,
  setCost,
  cost,
  editStatus,
}) {
  const handleChangeExpenseItem = (e) => {
    setExpenseItem(e.target.value);
  };

  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="content-container--input">
        <div className="content-container--input--expense-item">
          <h5>지출 항목</h5>
          <input
            type="text"
            value={expenseItem}
            onChange={handleChangeExpenseItem}
          />
        </div>
        <div className="content-container--input--cost">
          <h5>비용</h5>
          <input type="text" value={cost} onChange={handleChangeCost} />
        </div>
      </div>
      <input
        className="input-submit"
        type="submit"
        value={editStatus ? "수정" : "제출"}
      />
    </form>
  );
}
