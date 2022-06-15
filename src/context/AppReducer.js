const articles = (state, action) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
                updatedAt: Math.floor((new Date()).getTime() / 1000),
            }
        default:
            return state;
    }
}

export default articles;
