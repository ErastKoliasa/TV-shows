const SearchField = ({handleSearch}) => {
    return(
        <div>
            <input type="text" placeholder="Search TV show" onChange={handleSearch}/>
        </div>
    )
}

export default SearchField;