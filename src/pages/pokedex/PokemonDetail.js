import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import NavPages from '../../components/detailPage/NavPages'
import Spinner from '../../components/Spinner'
import DetailMain from '../../components/detailPage/DetailMain'
import ToggleableItem from "../../components/detailPage/ToggleableItem"


import '../../styles/detailPage/detailedCard.css'
import '../../styles/spinner.css'
import '../../styles/detailPage/toggleableDetails.css'
import getCapitalizedWord from "../../getCapitalizedWord"

function ServiceDetail() {
    const [loading, setLoading] = useState(true)
    const { pokemonName } = useParams()
    const [currentSprite, setCurrentSprite] = useState('front_default')
    const [toggle, setToggle] = useState({ moves: false, abilities: false, stats: true })
    const [pokemon, setPokemon] = useState(
        {
            sprites:
                { front_default: '', front_female: '', front_shiny: '' },
            types: [],
            abilities: [],
            moves: [],
            stats: []
        })

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const data = await response.json()

            await setPokemon(data)
        }

        fetchData()

        window.scrollTo(0, 0)

        return () => {
            setToggle(prev => ({ ...prev, moves: false, abilities: false }))
        }
    }, [pokemonName])

    function changeSprite(newSprite) {
        setCurrentSprite(pokemon.sprites[newSprite] ? newSprite : 'front_default')
    }

    function stopLoading() {
        setLoading(false)
    }

    function handleToggle(name) {
        setToggle(prev => ({ ...prev, [name]: !prev[name] }))
    }

    return (
        <div className='pokemonDetail__wrapper centerFlex'>
            <div className='pokemonDetail'>

                <div style={{ visibility: loading ? 'visible' : 'hidden', display: loading ? 'block' : 'none' }}>
                    <Spinner size='small' />
                </div>

                <div
                    style={{ visibility: loading ? 'hidden' : 'visible', display: loading ? 'none' : 'flex' }}
                    className='pokemonDetail__item  pokemonDetail__fixSize centerFlex'
                >
                    <div className='pokemonDetail__main centerFlex'>
                        <h2>{pokemon.name && getCapitalizedWord(pokemon.name)}</h2>
                        <DetailMain
                            pokemon={pokemon}
                            currentSprite={currentSprite}
                            changeSprite={changeSprite}
                            stopLoading={stopLoading}
                        />
                    </div>
                </div>

                <nav className='pokemonDetail__item navPage'>
                    <NavPages dexNumber={pokemon.id} />
                </nav>

                <div className='pokemonDetail__item pokemonDetail__toggleables'>


                    <ToggleableItem
                        isToggled={toggle.stats}
                        handleToggle={handleToggle}
                        name='stats'
                        toRender={pokemon.stats}
                    />

                    <ToggleableItem
                        isToggled={toggle.abilities}
                        handleToggle={handleToggle}
                        name='abilities'
                        toRender={pokemon.abilities}
                    />

                    <ToggleableItem
                        isToggled={toggle.moves}
                        handleToggle={handleToggle}
                        name='moves'
                        toRender={pokemon.moves}
                    />

                </div>
            </div>
        </div>
    )
}

export default ServiceDetail