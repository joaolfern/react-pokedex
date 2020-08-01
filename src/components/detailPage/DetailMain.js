import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars, faFeather } from '@fortawesome/free-solid-svg-icons'
import TypeLabel from './TypeLabel'

function DetailMain({ pokemon, currentSprite, changeSprite, stopLoading }) {

    return (
        <div className='pokemonDetail__main__content'>
            <div className='pokemonDetail__main__typeAndImg centerFlex'>

                <img
                    className='pokemonImage'
                    src={pokemon.sprites[currentSprite]}
                    onLoad={stopLoading}
                />

                <div className='type-container'>
                    {pokemon.types.map(item => {

                        return (
                            <div className={`type`} key={item.type.name}>
                                <TypeLabel type={item.type.name} />
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className='altSprites-Bar '>
                <FontAwesomeIcon className='icon maleIcon' icon={faMars} onClick={() => changeSprite('front_default')} />
                <FontAwesomeIcon className='icon femaleIcon' icon={faVenus} onClick={() => changeSprite('front_female')} />
                <FontAwesomeIcon className='icon shinnyIcon' icon={faFeather} onClick={() => changeSprite('front_shiny')} />
            </div>
        </div >
    )
}

export default DetailMain