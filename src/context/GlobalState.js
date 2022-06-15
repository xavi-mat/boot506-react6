import { createContext, useReducer } from "react";
import AppReducer from  "./AppReducer";
import axios from "axios";
import config from "../config/config.json";

// Aquí definimos estados iniciales de las variables globales
const initialState = {
    articles: [],
    updatedAt: 0,  // Seconds from UNIX era
}

const requestOptions = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news?cc=US',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': config.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getArticles = async () => {

        const UNIXTime = Math.floor((new Date()).getTime() / 1000);
        // console.log(state.updatedAt, UNIXTime, UNIXTime - state.updatedAt)

        if (state.updatedAt > UNIXTime - 60 ) {
            // console.log("Don't update yet")
            return;
        }
        // console.log("Fetching news...")

        try {
            const res = await axios.request(requestOptions);

            dispatch({
                type: 'GET_ARTICLES',
                payload: res.data.value,
            })
        } catch (error) {
            throw error;
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                articles: state.articles,
                getArticles,
                updatedAt: state.updatedAt,
            }}
            >
            {children}
        </GlobalContext.Provider>
    )
}