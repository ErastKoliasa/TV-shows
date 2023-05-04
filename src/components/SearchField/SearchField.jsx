import style from './SearchField.module.css'

const SearchField = ({handleSearch}) => {
    return(
        <div className={style.containerSearchField}>
            <input type="text" placeholder="Search TV show" onChange={handleSearch}/>
        </div>
    )
}

export default SearchField;