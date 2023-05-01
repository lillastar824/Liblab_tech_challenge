import React, { useState } from "react"
import styles from "../styles/dashboard.module.css"
import Options from "./Options"
import useLOTRData from "../hooks/useLOTRData"
import Characters from "./Characters"
import Movies from "./Movies"
import Books from "./Books"
import Quotes from "./Quotes"
import Loader from "./Loader"

export default function Dashboard() {
  const [selection, setSelection] = useState(null)
  const { data, loading, error } = useLOTRData(selection)
  
  function onClickHander(clickedButton) {
    return () => {  
      setSelection(clickedButton)
    }
  }

  const dataRender = {
    character : <Characters data={data} />,
    book:<Books data={data} />,
    movie:<Movies data={data} />,
    quote:<Quotes data={data} />
  }
  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
      <h1 className={styles.bannerTitle}>LOTR INFO</h1>
      <Options selection={selection} setSelection={onClickHander} />
      {loading && (
        <Loader />
      )}
      {(data) && (
        dataRender[selection]
        )}
      </div>
    </div>
  )
}
