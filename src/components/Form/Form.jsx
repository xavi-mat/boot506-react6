import { useContext, useState } from "react"
import { LANG } from "../../config/langs";
import { GlobalContext } from "../../context/GlobalState"

function Form() {

  const initialNewsData = {
    name: "",
    description: "",
    url: "",
    image: "",
  }

  const [newsPiece, setNewsPiece] = useState(initialNewsData);

  const { country } = useContext(GlobalContext);
  const lang = LANG[country];

  const handleInputChange = (ev) => {
    setNewsPiece({
      ...newsPiece,
      [ev.target.name]: ev.target.value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newNews = {
      name: newsPiece.name,
      description: newsPiece.description,
      url: newsPiece.url,
      image: { thumbnail: { contentUrl: newsPiece.image } },
    }

    const newsInLocalRAW = localStorage.S6_newsInLocal ?? '[]';
    const newsInLocal = JSON.parse(newsInLocalRAW);
    newsInLocal.unshift(newNews);
    localStorage.S6_newsInLocal = JSON.stringify(newsInLocal);
  }

  return (
    <>
      <h1>{lang.Form}</h1>
      <form onSubmit={handleSubmit}>
        <input name="name"
          className="form-control mb-2"
          value={newsPiece.name}
          onChange={handleInputChange}
          placeholder={lang.newsName} required />
        <input name="description"
          className="form-control mb-2"
          value={newsPiece.description}
          onChange={handleInputChange}
          placeholder={lang.newsDescription} required />
        <input name="url"
          className="form-control mb-2"
          value={newsPiece.url}
          onChange={handleInputChange}
          placeholder={lang.newsUrl} />
        <input name="image"
          className="form-control mb-2"
          value={newsPiece.image}
          onChange={handleInputChange}
          placeholder={lang.imageUrl} />
        <input type="submit" value={lang.sendForm}
          className="form-control btn btn-primary" />
      </form>
    </>
  )
}

export default Form