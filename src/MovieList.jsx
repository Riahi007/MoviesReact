import React, { useState } from 'react';
import movies from './Movilist'; 

function MovieList() {
    const [text, setText] = useState('');
    const [pageMovie, setPageMovie] = useState(movies);

    const handleSearch = (e) => {
        setText(e.target.value);
    };

    const filteredMovies = pageMovie.filter(movie => 
        movie.title.toLowerCase().includes(text.toLowerCase())|| movie.rating.toLowerCase().includes(text.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const posterUrl = e.target.posterUrl.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        setPageMovie([...pageMovie, { title, posterUrl, description, rating }]);
         
    };
    const [drop,Setdrop]=useState(false)

    return (
        <div>
            <input type="text" value={text} onChange={handleSearch} placeholder="Search by title or rating" />
            <div className='List'>
                {filteredMovies.map((movie) => (
                    <div key={movie.title}>
                        <h3>{movie.title}</h3>
                        <p><img src={movie.posterUrl} alt={movie.title} /></p>
                        <p>{movie.description}</p>
                        <p>{movie.rating}</p>
                    </div>
                ))}
            </div>
            <button onClick={()=>Setdrop(!drop)} >Add new Movie </button>
            {drop?
      (
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" name='title' placeholder='Title'  /><br />
                <input type="text" name='posterUrl' placeholder='Poster URL'  /><br />
                <input type="text" name='description' placeholder='Description'  /><br />
                <input type="text" name='rating' placeholder='Rating'  /><br />
                <button type='submit'>Submit</button>
            </form>):null}
        </div>
    );
}

export default MovieList;
