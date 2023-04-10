import "./search.styles.scss";

const Search = ({ searchInput, updateUsername, hasError }) => {
  // We want an uncontrolled component to let the DOM handle our state instead of the component

  function onSubmit(e) {
    e.preventDefault();
    updateUsername(searchInput.current.value.toLowerCase());
  }

  return (
    <div className="form-wrapper">
    {/* We need to give the user some feedback when a error occurs */}
      {hasError ? <span className="error small">No results</span> : null}
    <form className="form-control" onSubmit={onSubmit} autoComplete="off">
      <input
        className="form-control-input"
        placeholder="Search Github username..."
        type="text"
        name="searchTerm"
        ref={searchInput}
      />
      {/* We need to give the user some feedback when a error occurs */}
      {hasError ? <span className="error full">No results</span> : null}
      <input className="form-control-action" type="submit" value="Search" />
    </form>
    </div>
  );
};

export default Search;
