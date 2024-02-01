import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import ItemStatus from "./components/ItemStatus";
import ItemTotalPrice from "./components/ItemTotalPrice";

const initialItemData = localStorage.getItem("itemData")
  ? JSON.parse(localStorage.getItem("itemData"))
  : [];

function App() {
  const [itemData, setItemData] = useState(initialItemData);
  const [expenseItem, setExpenseItem] = useState("");
  const [cost, setCost] = useState(0);
  const [findItemKey, setFindItemKey] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [bannerRemoveStatus, setBannerRemoveStatus] = useState(false);
  const [bannerEditStatus, setBannerEditStatus] = useState(false);
  const [bannerCreateState, setBannerCreateState] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newItem = {
      id: Date.now(),
      expenseItem: expenseItem,
      cost: cost,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기
    if (editStatus) {
      setEditStatus((prev) => !prev);
      setBannerEditStatus((prev) => !prev);
      const newItemData = itemData.map((item) => {
        if (item.id === findItemKey) {
          return newItem;
        }
        return item;
      });
      setItemData([...newItemData]);
      localStorage.setItem("itemData", JSON.stringify([...newItemData]));
    } else {
      setBannerCreateState((prev) => !prev);
      setItemData((prev) => [...prev, newItem]);
      localStorage.setItem("itemData", JSON.stringify([...itemData, newItem]));
    }

    // 입력란에 있던 글씨 지워주기
    setExpenseItem("");
    setCost(0);
  };

  const handleRemoveClick = () => {
    setItemData([]);
    setBannerRemoveStatus((prev) => !prev);
    localStorage.setItem("itemData", JSON.stringify([]));
  };

  return (
    <div className="App">
      <ItemStatus
        bannerEditStatus={bannerEditStatus}
        setBannerEditStatus={setBannerEditStatus}
        bannerCreateState={bannerCreateState}
        setBannerCreateState={setBannerCreateState}
        bannerRemoveStatus={bannerRemoveStatus}
        setBannerRemoveStatus={setBannerRemoveStatus}
      />
      <h1>예산 계산기</h1>
      <Content
        handleSubmit={handleSubmit}
        handleRemoveClick={handleRemoveClick}
        itemData={itemData}
        expenseItem={expenseItem}
        setExpenseItem={setExpenseItem}
        cost={cost}
        setCost={setCost}
        setEditStatus={setEditStatus}
        setBannerRemoveStatus={setBannerRemoveStatus}
        setItemData={setItemData}
        editStatus={editStatus}
        setFindItemKey={setFindItemKey}
      />
      <ItemTotalPrice itemData={itemData} />
    </div>
  );
}

export default App;
