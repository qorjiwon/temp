import React from "react";
import "./ItemTotalPrice.css";

export default function ItemTotalPrice({ itemData }) {
  function getTotalPrice() {
    return itemData.map((item) => +item.cost).reduce((a, b) => a + b, 0);
  }
  return (
    <div className="item-total-price-container">
      총지출:{getTotalPrice(itemData)}
    </div>
  );
}
