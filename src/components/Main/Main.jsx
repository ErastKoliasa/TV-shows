import { useEffect, useState } from "react";
import { getShowDetails, getShowsData } from "../../redux/middleware";
import { useDispatch, useSelector } from "react-redux";
import { clearShowsData, setLoading } from "../../redux/actions";
import SearchField from "../SearchField/SearchField";
import ShowsList from "../ShowsList/ShowsList";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const loading = useSelector(state => state.loading)
    const shows = useSelector(state => state.showsData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery.length >= 2) {
            dispatch(setLoading());
            dispatch(getShowsData(searchQuery));
        }
        else (
            dispatch(clearShowsData())
        )
        
    }, [searchQuery, dispatch])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    async function handleClick(id) {
        dispatch(setLoading())
        await dispatch(getShowDetails(id))
        navigate("details")
    }

    return (
        <div>
            <SearchField handleSearch={handleSearch} />
            {searchQuery.length < 2 ? <p>Type the show's name</p>
                : loading ? "LOADING..." : <ShowsList shows={shows} handleClick={handleClick} />}
        </div>
    )
}

export default Main;