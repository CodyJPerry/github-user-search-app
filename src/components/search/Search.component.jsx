const Search = ({ searchInput, updateUsername }) => {
  // We want an uncontrolled component to let the DOM handle our state instead of the component

  function onSubmit(e) {
    e.preventDefault();
    updateUsername(searchInput.current.value.toLowerCase());
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchTerm" ref={searchInput} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
