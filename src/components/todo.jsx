import React, { useState } from "react";
import todo from "../images/todo.svg";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Button from '@mui/material/Button';

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);

  const addItem = () => {
    if(!inputdata){
        alert('Please enter your task')
    }
    else{
      const myinput={ id:new Date().getTime().toString(), name:inputdata}
    setitems([...items, myinput]);
    setinputdata("");
    }
  };

  const DeleteItem=(index)=>{
    const updateditem=items.filter((ele)=>{
        return index !==ele.id;
    })
    setitems(updateditem);

  }

  const removeAll=()=>{
    setitems([])
  }

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
            <button className="fa" title="Add Task" onClick={addItem}>
              <AddIcon />
            </button>
          </div>

          <div className="show-Items">
            {items.map((ele)=>{
                return(
            <div className="eachItem" key={ele.id}>
              <h3>{ele.name}</h3>
              <button title="Edit Task" className="editbtn"><ModeEditOutlineOutlinedIcon/></button>
              <button title="Delete Task" className="delbtn" onClick={()=>DeleteItem(ele.id)}><DeleteOutlineIcon/></button>
            </div>
                )
            })}
          </div>

          <div className="showItems">
        <Button title="Remove All" onClick={removeAll} variant="contained">Remove All</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
