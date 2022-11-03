import React, { useState } from "react";

export default function DiaryForm() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form>
        <div className="diary-form">
          <input
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Add an Item"
            className="diary-input"
          />
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="date"
            className="diary-date-input"
          />
        </div>
        <textarea
          onChange={(event) => setTitle(event.target.value)}
          rows="2"
          className="diary-textarea"
        />
        <button type="submit" className="diary-button">
          Add Item to Diary
        </button>
      </form>
    </div>
  );
}
