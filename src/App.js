import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import JokeForm from './components/JokeForm';
import Tabs from './components/Tabs';
import JokeStates from './JokeState/JokeStates'
import Jokes from './components/Jokes';
import axios from 'axios';

function App() {
  const API_URL = "https://api.chucknorris.io/jokes/random"
  const [jokes, setJokes] = useState([])
  const [tab, setTab] = useState("")
  const [favourites, setFavourites] = useState(localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [])
  
  
  const getJokes = (e) => {
    e.preventDefault()
      fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        setJokes([{...json, jokeState: favourites.map(j => j.id).includes(json.id) ? JokeStates.Favourite : JokeStates.Unfavourite}])
      })
  } 

  const toggleFavourite = joke => {
    const newFavourites = favourites.map(j => j.id).includes(joke.id) ? favourites.filter(i => i.id !== joke.id) : [joke, ...favourites];
    localStorage.setItem("favourites", JSON.stringify(newFavourites))
    setFavourites(newFavourites)
  }

  useEffect(() => {
    localStorage.removeItem("favourites")
    localStorage.setItem("favourites", JSON.stringify(favourites))
  }, [favourites])

  return (
    <div className="App">
      <Header />
      <main>
        <Tabs tab={tab} setTab={setTab} />
        {
          tab === "random" &&
            <JokeForm getJokes={getJokes} />
        }
        <div className="jokes">
          {
            tab === "favourites"
              ? <Jokes jokes={favourites} toggleFavourite={toggleFavourite} favourites={favourites} />
              : <Jokes jokes={jokes} toggleFavourite={toggleFavourite} favourites={favourites} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
