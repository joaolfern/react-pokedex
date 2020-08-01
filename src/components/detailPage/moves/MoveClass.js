import React from 'react'
import getCapitalizedWord from '../../../getCapitalizedWord'

function TypeLabel({ moveClass }) {
    const capitalizedMoveClass = getCapitalizedWord(moveClass)

    return (
        <div>
            <img src={`https://play.pokemonshowdown.com/sprites/categories/${capitalizedMoveClass}.png`} alt={`${capitalizedMoveClass} move`} />
        </div>
    )
}

export default TypeLabel