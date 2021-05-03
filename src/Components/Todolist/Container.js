import React, { useState } from 'react'
import Presentation from "./Presentation";
const Container = () => {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
const handleInput=(e)=>{
   setinput(e.target.value)
}
const handleTodos=(e)=>{
    settodos(e.target.value)
}
  const Addtodo = (e) => {
    settodos([...todos, input]);
    setinput("");
    e.preventDefault();
    const key = Date.now;
    console.log(key);
  };
  const DeleteTodo = (index) => {
    const Tododata = todos.filter((todo, i) => index !== i);

    settodos(Tododata);
  };
  return (
    <div>
      <Presentation 
      input={input}
      todos={todos}
      Addtodo={Addtodo}
      handleInput={handleInput}
      handleTodos={handleTodos}
      settodos={settodos}
      DeleteTodo={DeleteTodo}
      />
    </div>
  );
};

export default Container;
