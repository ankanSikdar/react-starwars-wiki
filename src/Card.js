import React from 'react'


const Card = ({character}) => {
    return (
        <div className="tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <h3>Name: {character.name}</h3>
            <p>Sex: {character.gender}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Height/Mass: {character.height}/{character.mass}</p>
        </div>
    )
}


export default Card;