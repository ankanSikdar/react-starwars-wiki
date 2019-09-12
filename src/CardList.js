import React from 'react'
import Card from './Card'

const CardList = ({characterList}) => {
    
    if (characterList.length > 0) {
        let charactersArray = []
        characterList.forEach(character => {
            charactersArray.push(<Card key={character.url} character={character}/>)
        })
        return (
            <div>
                {charactersArray}
            </div>
        )
    } else {
        return (
            <div className="tc"><h1>LOADING...</h1></div>
        )
    }
    
}

export default CardList