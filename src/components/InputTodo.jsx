import { React, Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {description};

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5 ">Pern Todo List</h1>
      <form className="flex py-2 px-5 space-x-2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline focus:bg-blue-100"
          id="InputTodo"
          type="text"
          placeholder="Enter Your Todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
