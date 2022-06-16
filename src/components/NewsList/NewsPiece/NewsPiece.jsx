import "./NewsPiece.scss";

function NewsPiece({ art, lang }) {

  const img = art.image?.thumbnail.contentUrl ?? '/assets/unavailable.jpg'

  return (
    <div className="card card-in-list m-3">
      <div className="card-header lead">{art.name}</div>
      <div className="card-body">
        <div className="d-flex">
        <div>
          <img className="img-fluid img-in-card" src={img} alt="" />
        </div>
          <div className="ms-3">
            <div>
              {art.description}...
            </div>
            <div className="text-end w-100">
              <a className="btn btn-secondary me-2" href={art.url} target="_blank" rel="noreferrer">{lang.readMore}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPiece