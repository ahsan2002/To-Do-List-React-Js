import React, { useState } from "react";
import todo from "../images/todo.svg";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import Button from "@mui/material/Button";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);
  const [togglebtn, settogglebtn] = useState(true);
  const [isedit, setisedit] = useState(null);

  const addItem = () => {
    if (!inputdata) {
      alert("Please enter your task");
    } else if (inputdata && !togglebtn) {
      setitems(
        items.map((ele) => {
          if (ele.id === isedit) {
            return { ...ele, name: inputdata };
          }
          return ele;
        })
      );
      settogglebtn(true);

      setinputdata("");

      setisedit(null);
    } else {
      const myinput = { id: new Date().getTime().toString(), name: inputdata };
      setitems([...items, myinput]);
      setinputdata("");
    }
  };

  const DeleteItem = (index) => {
    const updateditem = items.filter((ele) => {
      return index !== ele.id;
    });
    setitems(updateditem);
  };

  const editItem = (id) => {
    let newEditItem = items.find((ele) => {
      return ele.id === id;
    });
    console.log(newEditItem);
    settogglebtn(false);
    setinputdata(newEditItem.name);
    setisedit(id);
  };

  const removeAll = () => {
    setitems([]);
  };

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

            {togglebtn ? (
              <button className="addbtn" title="Add Task" onClick={addItem}>
                <AddCircleOutlinedIcon />
              </button>
            ) : (
              <button className="addbtn" title="Add Task" onClick={addItem}>
                <ModeEditOutlineRoundedIcon />
              </button>
            )}
          </div>
          <div className="show-Items">
            {items.map((ele) => {
              return (
                <div className="eachItem" key={ele.id}>
                  <h3>{ele.name}</h3>
                  <div className="todo-btn">
                    <button
                      title="Edit Task"
                      className="editbtn"
                      onClick={() => editItem(ele.id)}
                    >
                      <ModeEditOutlineRoundedIcon />
                    </button>

                    <button
                      title="Delete Task"
                      className="delbtn"
                      onClick={() => DeleteItem(ele.id)}
                    >
                      <DeleteRoundedIcon />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <Button title="Remove All" onClick={removeAll} variant="contained">
              Remove All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
