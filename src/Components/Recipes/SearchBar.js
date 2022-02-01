function SearchBar({ setQuery }) {
  const searchBarHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="search"
        placeholder="Search for recipes..."
        onChange={searchBarHandler}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
