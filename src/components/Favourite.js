import React from 'react';
import JokeStates from '../JokeState/JokeStates'

const Favourite = ({toggleFavourite, jokeState}) => {
    const style = 
          jokeState === JokeStates.Favourite 
          ? " added" : 
          jokeState === JokeStates.RemoveFavourite
          ? " are-you-sure" 
          : ""

    return(
        <button className={`favourite${style}`} onClick={toggleFavourite}>
            <span><i className="fas fa-star"></i></span>
            <span className="text">
                {jokeState === JokeStates.Favourite ? "Unfavourite" : ""}
                {jokeState === JokeStates.RemoveFavourite ? "Are you sure?" : ""}
                {jokeState === JokeStates.Unfavourite ? "Favourite" : ""}
            </span>
        </button>
    )
}

export default Favourite;