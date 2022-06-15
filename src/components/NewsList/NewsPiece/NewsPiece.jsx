function NewsPiece({art}) {
  return (
    <div className="card mb-3">
            <div className="card-header">{art.name}</div>
            <div className="card-body">
            <div className="d-flex">
                <img src={art.image?.thumbnail.contentUrl} alt="" />
                <div className="ms-3">{art.description}</div>
            </div>
            </div>
        </div>
  )
}

export default NewsPiece