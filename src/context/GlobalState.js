import { createContext, useReducer } from "react";
import AppReducer from  "./AppReducer";
import axios from "axios";
import config from "../config/config.json";
const X_RAPIDAPI_KEY = config.X_RAPIDAPI_KEY;

// Aquí definimos estados iniciales de las variables globales
const initialState = {
    articles: [],
    more: {},
}

const requestOptions = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getArticles = async () => {

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
            }}
            >
            {children}
        </GlobalContext.Provider>
    )
}