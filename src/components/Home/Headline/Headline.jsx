function Headline({ art }) {
  return (
    <a href={art.url} target="_blank" rel="noreferrer"
      className="list-group-item list-group-item-action" >
      {art.name}
    </a>
  )
}

export default Headline