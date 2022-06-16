import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"
import NewsPiece from "./NewsPiece/NewsPiece"

function NewsList() {

    const { articles, getArticles, updatedAt } = useContext(GlobalContext);
    useEffect(() => {
        getArticles();
    }, []);

    if (articles.length < 1) {
        return (<div className="spinner-grow spinner-grow-lg"></div>)
    }

    const article = articles.map((art, i) => (
        <NewsPiece key={i} art={art} />
    ));

    return (
        <div>
            <h1>NewsList</h1>
            <div className="text-end">Updated at {(new Date(updatedAt * 1000)).toLocaleTimeString('en')}</div>
            <div className="d-flex flex-wrap justify-content-center">
                {article}
            </div>
        </div>
    )
}

export default NewsList