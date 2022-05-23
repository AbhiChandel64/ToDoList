import React, { useState } from "react";

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([])
  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const ListOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("")
  };

  return (<div className="main_div">
    <div className="center_div">
      <h1>Todo List</h1>
      <div className="join">
        <input type="text" placeholder="Add task..." onChange={itemEvent} />
        <button onClick={ListOfItems}> + </button>
      </div>


      <ul>
        {/*<li> {inputList} </li> */}
        {Items.map((itemval) => {
          return <li>{itemval}</li>
        })}
      </ul>
    </div>
  </div>)
}

export default App;
