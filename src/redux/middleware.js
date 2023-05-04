import axios from "axios";
import { setShowDetails, setShowsData } from "./actions";

export const getShowsData = (searchParameter) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchParameter}`);
        dispatch(setShowsData(res.data));
    };
};
export const getShowDetails = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        dispatch(setShowDetails(res.data));
    };
};

