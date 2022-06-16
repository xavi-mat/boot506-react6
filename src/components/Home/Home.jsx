import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"
import Headline from "./Headline/Headline";
import { LANG } from "../../config/langs";
import publi1 from "../../assets/publi1.jpg"
import publi2 from "../../assets/publi2.jpg"
import publi4 from "../../assets/publi4.jpg"
import publi5 from "../../assets/publi5.jpg"
import cityImg from "../../assets/city.jpg"


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
      <div className="row">
        <div className="col-md-8">
          <h3>{lang.Headlines}</h3>
          <div className="list-group">{content}</div>
          <div className="d-none d-md-block">
            <h3 className="mt-3">{lang.HomeSubtitle}</h3>
            <img className="img-fluid mb-2" src={cityImg} alt="" />
          </div>
        </div>
        <div className="col-md-4">
          <img className="img-fluid mb-2" src={publi1} alt="" />
          <img className="img-fluid mb-2" src={publi2} alt="" />
          <img className="img-fluid mb-2" src={publi4} alt="" />
          <img className="img-fluid mb-2" src={publi5} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home