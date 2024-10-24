import './App.css';
import MovieList from './MovieList'; 
import NavBarre from './NavBarre';

function App() {
    return (
        <div className="App">
          <NavBarre/>
            <MovieList />
        </div>
    );
}

export default App;
