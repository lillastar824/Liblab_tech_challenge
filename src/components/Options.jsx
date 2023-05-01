import React from 'react'
import styles from '../styles/option.module.css'
export default function Options(props) {
  const {selection, setSelection} = props
  const questions = [
    'character',
    'movie',
    'book',
    'quote'
  ]
  return (
    
    <div className={styles.groupbtn}>
     
      {questions.map((question, index) => {
        return (
          <button onClick={setSelection(question)} key={index} className={`${styles.button} ${question === selection ? styles.selectedButton : styles.nonSelectedButton} `}>{question}</button>
        )
      })}
    </div>
  )
}
