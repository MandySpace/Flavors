import filter_off_svg from "../../img/svgs/filter_off.svg";
import filter_on_svg from "../../img/svgs/filter_on.svg";

function SearchBar({ setQuery, isFilterOn, setIsFilterOn }) {
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
      <img
        src={isFilterOn ? filter_on_svg : filter_off_svg}
        alt="filter"
        className="filter-icon"
        onClick={() => setIsFilterOn((isFilterOn) => !isFilterOn)}
      />
    </div>
  );
}

export default SearchBar;
