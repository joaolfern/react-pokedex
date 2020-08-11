import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import { DataContext } from '../contexts/dataContext'

import getBackground from '../regionalStyles'
import getCapitalizedWord from '../getCapitalizedWord'
import Spinner from '../components/Spinner'

const howManyToFetch = 30
let counter = 0

function usePokemonList(searchPokemon, itsBeenClean, handleCleaned) {
    const { pokemonListData, setPokemonListData } = useContext(DataContext)
    const [pokemonListViewData, setPokemonListViewData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!pokemonListData.length)        //check if every pokemon data's already been stored in the context
            fetchContextData()

        return () => {
            counter = 0
        }
    }, [pokemonListData]) //eslint-disable-line

    useEffect(() => {
        if (!pokemonListViewData.length) {  //check if the view data is empty
            fetchData()                     //it will be the case when mounting or when the input bar has been cleaned
        }
    }, [pokemonListViewData])

    useEffect(() => {
        if (itsBeenClean) {                 //if the user has cleaned their input
            handleCleaned()                 //empty the stored data in order to avoid a rendering of up to 809 components,
            setPokemonListViewData([])      //that would happen if they have scrolled all the way down before searching anything
            counter = 0
        }
    }, [itsBeenClean, handleCleaned])

    async function fetchContextData() {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=809`)
        const data = await response.json()

        await setPokemonListData(() => {
            const dataWithDexNumber = data.results.map((pokemon, index) => {
                return ({ ...pokemon, dexNumber: String(index + 1) })
            })
            return dataWithDexNumber
        })
    }

    async function fetchData() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${(howManyToFetch)}&offset=${counter}`)
        const data = await response.json()

        await setPokemonListViewData(prev => {
            const dataWithDexNumber = data.results.map((pokemon, index) => {

                return ({ ...pokemon, dexNumber: String((index + 1) + counter) })
            })
            return [...prev, ...dataWithDexNumber]
        })

        setLoading(false)
        counter = counter + 30
    }

    function matchSearch(pokemonName, dexNumber) {
        if (searchPokemon) {
            if (Number(searchPokemon))
                return !dexNumber.search(searchPokemon)
            return !pokemonName.search(searchPokemon.toLowerCase())
        }
        return true
    }

    function genLinkComponents(pokemonList) {
        return pokemonList
            .map((pokemon, index) => {
                return (
                    <Link
                        to={`/pokemon/${(pokemon.name)}`}
                        className={`pokemonCard`}
                        style={({
                            'background': getBackground(pokemon.dexNumber)
                        })}
                        key={index}
                    >
                        <h3 className='pokemonCard__font'>
                            {getCapitalizedWord(pokemon.name)}
                        </h3>
                        <p className='pokemonCard__font pokemonCard__id'>#{pokemon.dexNumber < 10 ? `00${pokemon.dexNumber}` : pokemon.dexNumber < 100 ? `0${pokemon.dexNumber}` : pokemon.dexNumber}</p>
                    </Link>
                )
            })
    }

    const List = loading ? <Spinner /> :

        searchPokemon ?
            <div className='pokemonTable'>
                {
                    genLinkComponents(
                        pokemonListData
                            .filter(pokemon => matchSearch(pokemon.name, pokemon.dexNumber))
                    )
                }
            </div>
            :
            <InfiniteScroll
                className='pokemonTable'
                dataLength={pokemonListViewData.length}
                next={() => {
                    return fetchData()
                }}
                hasMore={pokemonListViewData.length < 807}
                loader={<Spinner />}
            >
                {
                    genLinkComponents(pokemonListViewData)
                }
            </InfiniteScroll>
    return {
        loading,
        List
    }
}

export default usePokemonList