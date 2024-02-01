import React from "react";
import "./Lists.css";
import List from "./List";

export default function Lists({
  itemData,
  handleRemoveClick,
  setExpenseItem,
  setCost,
  setEditStatus,
  setBannerRemoveStatus,
  setItemData,
  setFindItemKey,
}) {
  return (
    <div>
      <div className="content-container--output">
        {itemData.map((data) => (
          <List
            key={data.id}
            id={data.id}
            expenseItem={data.expenseItem}
            cost={data.cost}
            setCost={setCost}
            setExpenseItem={setExpenseItem}
            itemData={itemData}
            setEditStatus={setEditStatus}
            setBannerRemoveStatus={setBannerRemoveStatus}
            setItemData={setItemData}
            setFindItemKey={setFindItemKey}
          />
        ))}
      </div>
      <button className="remove-all-button" onClick={handleRemoveClick}>
        목록 지우기
      </button>
    </div>
  );
}
