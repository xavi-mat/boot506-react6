import { useContext, useEffect } from "react"
import { LANG } from "../../config/langs";
import { GlobalContext } from "../../context/GlobalState"
import NewsPiece from "./NewsPiece/NewsPiece"

function NewsList() {

    const { articles, getArticles, updatedAt, country } = useContext(GlobalContext);
    const lang = LANG[country];

    useEffect(() => {
        getArticles();
    }, [country]);

    let content;

    if (articles.length < 1) {
        content = (<div className="spinner-grow spinner-grow-lg"></div>)
    } else {
        content = articles.map((art, i) => (
            <NewsPiece key={i} art={art} />
        ));
    }

    return (
        <div>
            <h1>{lang.NewsList}</h1>
            <div className="text-end">{lang.UpdatedAt} {(new Date(updatedAt * 1000)).toLocaleTimeString('en')}</div>
            <div className="d-flex flex-wrap justify-content-center">
                {content}
            </div>
        </div>
    )
}

export default NewsList