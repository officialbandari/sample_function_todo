import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState();
  const [item, setItem] = useState([]);

  const handleItem = () => {
    setItem([...item, todo]);

    setTodo("");
  };

  const handleRemove = (id) => {
    const upItem = item.filter((val, ind) => {
      return ind !== id;
    });
    setItem(upItem);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => handleItem()}>AddTodo</button>
      </div>

      <div>
        {item.map((val, ind) => {
          return (
            <div key={ind}>
              {val}
              <button onClick={() => handleRemove(ind)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
