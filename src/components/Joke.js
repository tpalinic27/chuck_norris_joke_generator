import React, { useState } from 'react';
import Favourite from './Favourite';
import JokeStates from '../JokeState/JokeStates';


const Joke = ({joke, toggleFavourite, favourites}) => {

    const isFavourite = favourites.map(j => j.id).includes(joke.id)

    const [jokeState, setJokeState] = useState(JokeStates.Unfavourite)

    if(isFavourite  && (jokeState !== JokeStates.RemoveFavourite) && (jokeState !== JokeStates.Favourite)){
        setJokeState(JokeStates.Favourite)
    } 

    if(!isFavourite && (jokeState !== JokeStates.Unfavourite)) {
        setJokeState(JokeStates.Unfavourite)
    }
      
    const toggleFavouriteAndJokeState = () => {
        if(jokeState === JokeStates.Favourite) {
            setJokeState(JokeStates.RemoveFavourite) 
            setTimeout(() => setJokeState(JokeStates.Favourite), 5000)
        } else {
            toggleFavourite(joke)
        }
    }

    return (
        <div className="joke">
            <p>{joke.value}</p>
            <div className="interact">
                <Favourite jokeState={jokeState} toggleFavourite={toggleFavouriteAndJokeState} />
            </div>
        </div>
    )
}

export default Joke;