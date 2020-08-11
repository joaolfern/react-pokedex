import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Move from './Move'
import Spinner from '../../Spinner'

import '../../../styles/detailPage/movesList.css'

function MovesList({ moves, loading, setLoading }) {
    const [movesData, setMovesData] = useState([])
    const [counter, setCounter] = useState(0)

    const arrayMoves = moves.map(item => item.move.url)

    useEffect(() => {

        fetchData()

        return () => {
            setCounter(0)
        }
    }, []) //eslint-disable-line

    function fetchData(from = 'somewhere else') {
        const howMany = from === 'infiniteScroll' ? 5 : 10
        const nextURLs = arrayMoves.slice(counter, counter + howMany)

        nextURLs.map(async url => {
            const response = await fetch(url)
            const data = await response.json()

            const effect = data.effect_entries[0].short_effect.replace("$effect_chance", data.effect_chance)

            setMovesData(prev => [
                ...prev,
                {
                    id: data.id,
                    name: data.name,
                    type: data.type.name,
                    damage_class: data.damage_class.name,
                    power: data.power,
                    accuracy: data.accuracy,
                    pp: data.pp,
                    effect: effect
                }
            ])
        })

        setCounter(prev => prev + howMany)

        if (loading)
            setLoading(false)

    }

    return (
        <InfiniteScroll
            dataLength={movesData.length}
            next={() => {
                console.log('fetched by the infinite scroll')
                return fetchData('infiniteScroll')
            }}
            hasMore={movesData.length < moves.length}
            loader={<Spinner size='small' />}
            className='moveList'
        >
            {
                movesData
                    .map(data => <Move key={data.id} data={data} />)
            }
        </InfiniteScroll>

    )
}

export default MovesList    