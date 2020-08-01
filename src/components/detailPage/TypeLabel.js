import React from 'react'
import getCapitalizedWord from '../../getCapitalizedWord'

function TypeLabel({ type }) {
    const capitalizedType = getCapitalizedWord(type)

    return (
        <div>
            <img src={`https://play.pokemonshowdown.com/sprites/types/${capitalizedType}.png`} alt={`${capitalizedType} type`} />
        </div>
    )
}

export default TypeLabel