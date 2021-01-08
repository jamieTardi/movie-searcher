import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Link} from 'react-router-dom'

const HomePage = () => {
    const [getMovie,
        setGetMovie] = useState(null)
    const [hideText,
        setHideText] = useState(true)

    const movieArray = ["pulp+fiction", "The+Shawshank+Redemption", "wreck+it+ralph", "toy+story"]
    const randMovie = Math.floor(Math.random() * 4)

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=514d1820&t=${movieArray[randMovie]}`).then(response => {
            setGetMovie(response)
        }).catch(error => console.log(error))

    }, [])

    return ( 
    <> 
        {getMovie && (
            <div className="App">
                <div className="card">
                    <Link to="/movieSearch">
                        <img
                            className="movie-pic"
                            src={getMovie.data.Poster}
                            alt="Movie"
                            onMouseEnter={() => {
                            setHideText(false)
                        }}
                            onMouseLeave={() => {
                            setHideText(true)
                        }}/>
                    </Link>
                    <div
                        className={hideText
                        ? "hide"
                        : "poster-text active"}>
                        <h2>Welcome to the movie searcher!</h2>
                        <p>Click this picture to get started!</p>
                    </div>
                </div>

                <div className="movie-page-title">
                    <h1>Movie Picking App</h1>
                    <p>Please Click the movie poster to get started.</p>
                </div>
            </div>
        )
    } 
    </>
    );
}

export default HomePage