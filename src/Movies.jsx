import React, { useState } from 'react'; 
import movies from './Movilist'; 
import Box from './Box';

function Movies() {
    const [search, setSearch] = useState('');

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); setSearch(e.target.search.value); }}>
                <input  className='InputSearch' type="text" name='search' />
            </form>
            <div className='Box'>
                {filteredMovies.map(movie => (
                    <Box key={movie.title} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;
