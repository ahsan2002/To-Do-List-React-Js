import React, { useState } from "react";
import todo from "../images/todo.svg";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);

  const addItem = () => {
    if(!inputdata){
        alert('Please enter your task')
    }
    else{
    setitems([...items, inputdata]);
    setinputdata("");
    }
  };

  const DeleteItem=(id)=>{
    const updateditem=items.filter((ele,ind)=>{
        return ind !==id;
    })
    setitems(updateditem);

  }

  // const removeAll=()=>{
  //   setitems([])
  // }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="" />
            <figcaption>Add your tasks here✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="📝Add Items...."
              value={inputdata}
              onChange={(e) => {
                setinputdata(e.target.value);
              }}
            />
            <button className="fa" title="Add Item" onClick={addItem}>
              <AddIcon />
            </button>
          </div>

          <div className="show-Items">
            {items.map((ele,ind)=>{
                return(
            <div className="eachItem">
              <h3>{ele}</h3>
              <button title="Delete Item" className="delbtn" onClick={()=>DeleteItem(ind)}><DeleteOutlineIcon/></button>
            </div>
                )
            })}
          </div>

          <div className="showItems">
        <Button variant="contained">Remove All</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
