import React, { useRef, useState } from "react";

const AddTasks = () => {
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [showForm, setShowForm] = useState(false);
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, descriptionRef.current.value);
    setShowForm(false);
  };

  return (
    <div className="mx-auto">
      <h1 className="font-semibold text-2xl  mt-5">Have anything in mind?</h1>
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary mt-5"
        >
          Add Tasks
        </button>
      )}
      {showForm && (
        <form onSubmit={handleTodoSubmit} className="max-w-[400px]" action="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Todo Name</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              ref={descriptionRef}
              type="text"
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="w-full btn btn-primary mt-5">
            Add Todo
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTasks;
