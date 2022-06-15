import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"
import NewsPiece from "./NewsPiece/NewsPiece"

function NewsList() {

    const { articles, getArticles } = useContext(GlobalContext);
    useEffect(() => {
        getArticles();
    }, []);

    const article = articles.map((art, i) => (
        <NewsPiece key={i} art={art} />
    ));

    return (
        <div>
            <h1>NewsList</h1>
            {article}
        </div>
    )
}

export default NewsList