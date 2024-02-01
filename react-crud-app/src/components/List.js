import React from "react";
import "./List.css";

export default function List({
  id,
  expenseItem,
  cost,
  setCost,
  setExpenseItem,
  itemData,
  setEditStatus,
  setBannerRemoveStatus,
  setItemData,
  setFindItemKey,
}) {
  const handleEditClick = () => {
    const item = itemData.find((item) => item.id === id);
    setExpenseItem(item.expenseItem);
    setCost(item.cost);
    setEditStatus((prev) => !prev);
    setFindItemKey(item.id);
  };

  const handleRemoveClick = () => {
    const newItemData = itemData.filter((item) => item.id !== id);
    setItemData(newItemData);
    setBannerRemoveStatus((prev) => !prev);
    localStorage.setItem("itemData", JSON.stringify([...newItemData]));
  };

  return (
    <div>
      <div className="content-container--output--list">
        <div>{expenseItem}</div>
        <div>{cost}</div>
        <div className="content-container--output--list--button">
          <button className="edit-button" onClick={handleEditClick}>
            편집
          </button>
          <button className="remove-button" onClick={handleRemoveClick}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
