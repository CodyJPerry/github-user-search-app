const Search = ({ searchInput }) => {
  // We want an uncontrolled component to let the DOM handle our state instead of the component

  function onSubmit(e) {
    e.preventDefault();
    console.log(searchInput);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchTerm" ref={searchInput} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Search;
