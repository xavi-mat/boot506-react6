function Headline({ art }) {
  return (
    <div className="card m-3">
      <div className="card-body d-flex justify-content-between">
        <span>{art.name}</span>
        <a className="btn btn-secondary me-2" href={art.url} target="_blank" rel="noreferrer">Read more</a>
      </div>
    </div>
  )
}

export default Headline