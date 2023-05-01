import React from 'react'
import Styles from '../styles/Movies.module.css'

export default function Movies(props) {
    const { data } = props
    const { docs } = data
    
    return (
        <div className={Styles.movieDashboard}>
            {docs.map((movie, index) => {
                const filteredEntries = Object.entries(movie).filter(([key]) => {
                    return key !== 'name' && key !== '_id'
                })
                return (
                    <div key={index}>
                        <h1>{movie.name}</h1>
                        {filteredEntries.map(([key, value]) => {
                            return (
                                <div key={key}>
                                    <p>{key}: {value}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
