import React from 'react'
import CharacterCard from './CharacterCard'




const CharactersList = ({ results }) => {

    let show;
    results
        ? show = results.map((character) => {
            return <CharacterCard character={character} key={character.id}/>
        })
        : show = "Error"

    return <ul 
    className='flex flex-wrap justify-center mb-8 gap-3 md:justify-between md:mb-12'


    >{show}</ul>
}

export default CharactersList