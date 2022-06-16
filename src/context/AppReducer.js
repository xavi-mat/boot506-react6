const articles = (state, action) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
                updatedAt: Math.floor((new Date()).getTime() / 1000),
            }
        case "UPDATE_COUNTRY":
            return {
                ...state,
                country: action.payload,
                articles: [],
                updatedAt: 0,
            }
        default:
            return state;
    }
}

export default articles;
