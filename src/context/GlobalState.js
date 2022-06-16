import { createContext, useReducer } from "react";
import AppReducer from  "./AppReducer";
import axios from "axios";
import config from "../config/config.json";

// Aquí definimos estados iniciales de las variables globales
const initialState = {
    articles: [],
    updatedAt: 0,  // Seconds from UNIX era
    country: 'ES',  // Language
}

const requestOptions = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news?cc=',
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

        if (state.updatedAt > UNIXTime - 60 ) {
            return;
        }

        try {
            const url = requestOptions.url + state.country;
            const res = await axios.request({...requestOptions, url});

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
                country: state.country,
            }}
            >
            {children}
        </GlobalContext.Provider>
    )
}