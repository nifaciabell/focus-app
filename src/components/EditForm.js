import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const EditForm = ({editedTask, editTask, closeEditMode}) => {

const [updatedTaskName, setUpdatedTaskName] = useState (editedTask.name)

useEffect(()=> {

  const closeModalIfEscaped = (e) => {
    e.key === "Escape" && closeEditMode()
  }

  window.addEventListener('keydown', closeModalIfEscaped )

  return() => {
    closeModalIfEscaped('keydown', closeModalIfEscaped)
  }
}, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editTask({...editedTask , name: updatedTaskName} )

  };

  return (
    <div role = "dialog"
    aria-labelledby="editTask"
    onClick={(e)=> {e.target === e.currentTarget && closeEditMode()}}
    >
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="editTask"
          className="input"
          value={updatedTaskName}
          onInput={(e)=> setUpdatedTaskName(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Update Task"
        />
        <label htmlFor="editTask" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label={`Confirm edited task ${updatedTaskName}`} type="submit">
      <CheckIcon strokeWidth={2} height={24} width={24} />      
      </button>
    </form>
    </div>
  );
};

export default EditForm;
