import React from 'react'

function Box({movie}) {
  return (
    <div className='box'>
        {movies.map((movie, i) => (
                    <div key={i}>
                        <h3>{movie.title}</h3>
                        <p><img src={movie.posterUrl} alt="" /></p>
                        <p>{movie.description}</p>
                        <p>{movie.rating}</p>
                    </div>
                ))}
    </div>
  )
}

export default Box
