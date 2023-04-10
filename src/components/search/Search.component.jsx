import "./search.styles.scss";

const Search = ({ searchInput, updateUsername, hasError }) => {
  // We want an uncontrolled component to let the DOM handle our state instead of the component

  function onSubmit(e) {
    e.preventDefault();
    updateUsername(searchInput.current.value.toLowerCase());
  }

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <input
        className="form-control-input"
        placeholder="Search Github username..."
        type="text"
        name="searchTerm"
        ref={searchInput}
      />
      {/* We need to give the user some feedback when a error occurs */}
      {hasError ? <span>No results</span> : null}
      <input className="form-control-action" type="submit" value="Search" />
    </form>
  );
};

export default Search;
