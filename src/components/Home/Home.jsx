import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"
import Headline from "./Headline/Headline";
import { LANG } from "../../config/langs";

function Home() {

  const { articles, getArticles, country } = useContext(GlobalContext);

  const lang = LANG[country];

  useEffect(() => {
    getArticles();
  }, [country]);

  let content;

  if (articles.length < 1) {
    content = (
      <div className="text-center">
        <div className="spinner-grow spinner-grow-lg"></div>
      </div>
    )
  } else {
    content = articles.slice(0, 5).map((art, i) => (
      <Headline key={i} art={art} />
    ));
  }
  return (
    <>
      <h1>{lang.Home}</h1>
      <h3>{lang.Headlines}</h3>
      <div className="">
        {content}
      </div>
    </>
  )
}

export default Home