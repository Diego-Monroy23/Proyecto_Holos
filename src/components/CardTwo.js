import React from "react"

const CardTwo = (props) => {
  return (
    <article className="feature-card">
          <div className="feature-content">
            <figure>
              <img src={props.iconUrl} alt="Publish icon"
              />
            </figure>
            <div className="text1">{props.title}</div>
            <div className="Comment1">{props.text}</div> 

            <a className="LinkCard" href="">{props.link}</a>
          </div>
          <div className="feature-image">
            <figure>
              <img
                src={props.imageUrl2}
                alt="Publish example"
              />
            </figure>
          </div>
        </article>
  )
}

export default CardTwo
