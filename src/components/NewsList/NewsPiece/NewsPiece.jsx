import "./NewsPiece.css";

function NewsPiece({ art }) {
  return (
    <div className="card m-3">
      <div className="card-header lead">{art.name}</div>
      <div className="card-body">
        <div className="d-flex">
        <div>
          <img className="img-fluid" src={art.image?.thumbnail.contentUrl} alt="" />
        </div>
          <div className="ms-3">
            <div>
              {art.description}...
            </div>
            <div className="text-end w-100">
              <a className="btn btn-secondary me-2" href={art.url} target="_blank" rel="noreferrer">Read more</a>
              {/* <a className="btn btn-secondary">🗑️</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPiece