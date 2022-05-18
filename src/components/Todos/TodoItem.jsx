import React from "react";

const TodoItem = () => {
  return (
    <div className="border-l-2 border-l-primary p-2 w-[400px] my-3">
      <div className="flex items-center  gap-3">
        <div>
          <p className="w-full text-lg font-semibold">Feed the cat</p>
          <small data-tip="hello" className="tooltip text-left">
            Lorem ipsum dolor sit amet consectetur...
          </small>
        </div>
        <div className="flex">
          <button className="btn btn-xs btn-success">Done</button>
          <button className="btn btn-xs btn-error mx-2">X</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
