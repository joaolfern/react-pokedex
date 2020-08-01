import React, { useEffect, useState } from 'react'

import '../../styles/detailPage/abilitiesList.css'

function AbilitiesList({ abilities, setLoading }) {
    const [abilitiesData, setAbilitiesData] = useState([])

    const arrayURLs = abilities.map(item => item.ability.url)
    let counter = 0

    useEffect(() => {
        arrayURLs.map(async url => {
            const abilityData = await fetchData(url)

            setAbilitiesData(prev => [...prev, abilityData])
        })
        return () => {
            counter = 0
            setLoading(true)
        }

    }, [])
    async function fetchData(url) {
        const response = await fetch(url)
        const data = await response.json()

        counter++
        if (counter === arrayURLs.length)
            setLoading(false)

        return data
    }

    return (
        <div>
            {abilitiesData.map(ability => (
                <div className='ability' key={ability.name}>
                    <p className='ability__name'>{ability.name}</p>
                    <p className='ability__desc'>{ability.effect_entries.find(desc => desc.language.name === 'en').short_effect}</p>
                </div>
            ))}
        </div>
    )
}

export default AbilitiesList