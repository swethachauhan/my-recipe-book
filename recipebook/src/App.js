import './App.css';
import React from 'react';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import { BrowserRouter, Link , Routes, Route} from 'react-router-dom'
import FavouriteRecipes from './components/FavouriteRecipes';


const App = () => {

  return (
    <BrowserRouter>
      <nav>
      
       <h1>My Recipe Book</h1> 
        <div className='header'>

          <div><Link to="/">Home</Link> </div>
          <div><a href="/search">Search Recipes</a></div>
          <div><a href="/favourite">Favourites</a></div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/favourite" element={<FavouriteRecipes />}></Route>
          
        </Routes>
      </nav>
    </BrowserRouter>
  );
    
}

export default App;
