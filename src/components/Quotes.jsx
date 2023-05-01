import React from "react"
import QuoteStyles from "../styles/Quotes.module.css"
import Styles from "../styles/Movies.module.css"


export default function Quotes(props) {
  const { data } = props

  return (
    <div className={Styles.movieDashboard}>
      {data.docs.map((quote) => (
        <div key={quote.id}>
          <p className={QuoteStyles.quoteText}>{quote.dialog}</p>
          <p className={QuoteStyles.quoteAuthor}>{quote.character}</p>
          {/* <p>Character: {quote.character}</p> */}
          {/* <p>Movie: {quote.movie}</p> */}
        </div>
      ))}
    </div>
  )
}
