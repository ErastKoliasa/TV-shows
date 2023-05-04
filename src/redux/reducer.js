const initialState = {
    showsData: [],
    showDetails: "",
    loading: false
};

export const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "SET_SHOWS_DATA":
            return {
                ...state,
                showsData: action.payload,
                loading: false,
            };
        case "CLEAR_SHOWS_DATA":
            return {
                ...state,
                showsData: [],
            };
        case "SET_SHOW_DETAILS":
            return {
                ...state,
                showDetails: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};