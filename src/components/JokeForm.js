import React from 'react';

const JokeForm = ({getJokes}) => <form onSubmit={getJokes} className="random">
    <input type="submit" value="Get joke" id="joke-button"/>
</form>

export default JokeForm;