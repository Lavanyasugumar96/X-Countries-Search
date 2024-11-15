import React, { useState } from "react";
import Countries from "./Countries";
import './App.css';


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <input 
        type="text"
        placeholder="Search for a country"
        value={searchQuery}
        onChange={handleSearch}
        style={{ padding: "10px", marginBottom: "20px" }}
      />
      <Countries searchQuery={searchQuery} />
    </div>
  );
}

export default App;