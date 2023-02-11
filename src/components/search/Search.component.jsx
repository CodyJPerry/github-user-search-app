const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <input 
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            type="text"
        />
        );
}

export default Search;