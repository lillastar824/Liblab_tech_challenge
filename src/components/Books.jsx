import React from "react"
import Styles from '../styles/Movies.module.css'

export default function Books(props) {
  const { data } = props

  return (
    <div className={Styles.movieDashboard}>
      {data.docs.map((book, index) => (
        <div key={book.id || index}>
          <h1>{book.name}</h1>
          <p>{book.author}</p>
          <p>{book.published}</p>
        </div>
      ))}
    </div>
  )
}
