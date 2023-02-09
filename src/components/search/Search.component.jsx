const Search = ({ value, handleChange }) => {
    return (
        <input 
            value={value}
            onChange={(event) => handleChange(event)}
            type="search"
        />
        );
}

export default Search;