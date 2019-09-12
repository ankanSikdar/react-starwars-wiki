import React from 'react'


const Card = ({character}) => {
    return (
        <div className="tc mw5 mv3 ba b--black-10 pa4-ns bg-white dib br3 pa3 ma2 dim bw2 shadow-5">
            <p className="f3 mb2"><strong>Name:</strong> {character.name}</p>
            <p className="f5 fw4 gray mt0"><strong>Sex:</strong> {character.gender}</p>
            <p className="f5 fw4 gray mt0"><strong>Birth Year:</strong> {character.birth_year}</p>
            <p className="f5 fw4 gray mt0"><strong>Height/Mass:</strong> {character.height}/{character.mass}</p>
        </div>
    )
}
export default Card;