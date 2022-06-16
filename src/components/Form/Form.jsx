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
    // TODO
  }



  return (
    <>
      <h1>{lang.Form}</h1>
      <form onSubmit={handleSubmit}>
        <input name="name"
          value={newsPiece.name}
          onChange={handleInputChange}
          placeholder={lang.newsName} />
        <input name="description"
          value={newsPiece.description}
          onChange={handleInputChange}
          placeholder={lang.newsDescription} />
        <input name="url"
          value={newsPiece.url}
          onChange={handleInputChange}
          placeholder={lang.newsUrl} />
        <input name="image"
          value={newsPiece.image}
          onChange={handleInputChange}
          placeholder={lang.imageUrl} />
      </form>
    </>
  )
}

export default Form