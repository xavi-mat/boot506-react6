function Headline({ art, lang }) {
  return (
    // <div className="card m-3">
    //   <div className="card-body d-flex justify-content-between">
    //     <span>{art.name}</span>
    //     <a className="btn btn-secondary me-2" href={art.url} target="_blank" rel="noreferrer">{lang.readMore}</a>
    //   </div>
    // </div>
    <a
      href={art.url}
      target="_blank"
      rel="noreferrer"
      className="list-group-item list-group-item-action"
    >
      {art.name}
    </a>
  )
}

export default Headline