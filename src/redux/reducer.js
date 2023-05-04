const initialState = {
    showsData: [],
    showDetails: "",
};

export const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SHOWS_DATA":
            return {
                ...state,
                showsData: action.payload,
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
            };
        default:
            return state;
    }
};