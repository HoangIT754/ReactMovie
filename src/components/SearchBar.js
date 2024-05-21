import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
      />
    </form>
  );
};

export default SearchBar;
