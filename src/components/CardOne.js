import React from "react"

const CardOne = (props) => {
  return (
    <article className="card1">
      <div className="container">
        <img src={props.imageUrl} alt="Avatar" className="image" />
        <div className="ventanaext">
          <div className="text">{props.title}</div>
        </div>
      </div>
      <button className="boton" id="boton2">
        Mas Información
      </button>
    </article>
  )
}

export default CardOne
