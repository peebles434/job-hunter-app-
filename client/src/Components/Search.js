import React from "react";
import { observer } from "mobx-react";
import { useJobStore } from "../Stores/hooks";

export const Search = observer(() => {
  const { handleSearch, handleButtonClick } = useJobStore();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for Job"
          onChange={(e) => handleSearch(e.target.value)}
          autoFocus
        />
      </form>
      <button onClick={handleButtonClick}>Click my ass!</button>
    </div>
  );
});
