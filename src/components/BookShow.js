import React, { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    onUpdate(id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
      {showEdit === false ? (
        <h3>{book.title}</h3>
      ) : (
        <BookEdit book={book} onSubmit={handleSubmit} />
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
