import { createContext, useReducer } from "react";
import "./AppReducer";

// Aquí definimos estados iniciales de las variables globales
const initialState = {
    articles: [],
    more: {},
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getArticles = async () => {
        const res = await axios.get('https://api.nytimes.com/svc/archive/v1/2022/5.json')

        dispatch({
            type: 'GET_ARTICLES',
            payload: res.data.response.docs,
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                articles: state.articles,
                getArticles,
            }}
            >
            {children}
        </GlobalContext.Provider>
    )
}