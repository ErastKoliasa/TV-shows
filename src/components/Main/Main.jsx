import { useEffect, useState } from "react";
import { getShowDetails, getShowsData } from "../../redux/middleware";
import { useDispatch, useSelector } from "react-redux";
import { clearShowsData } from "../../redux/actions";
import SearchField from "../SearchField/SearchField";
import ShowsList from "../ShowsList/ShowsList";
import ShowDetails from "../ShowDetails/ShowDetails";

const Main = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const shows = useSelector(state => state.showsData);
    const showDetails = useSelector(state => state.showDetails);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(searchQuery.length >= 2) {
            dispatch(getShowsData(searchQuery));
        }
        else(
            dispatch(clearShowsData())
        )
    }, [searchQuery,dispatch])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleClick = (id) => {
        dispatch(getShowDetails(id))
    }

    return(
        <div>
            <SearchField handleSearch={handleSearch}/>
            {searchQuery.length < 2 ? <p>Type the show's name</p> : <ShowsList shows={shows} handleClick={handleClick}/>}
            {console.log(showDetails)}
            {showDetails ? <ShowDetails showDetails={showDetails} />:""}
        </div>
    )
}

export default Main;