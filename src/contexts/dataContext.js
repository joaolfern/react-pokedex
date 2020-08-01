import React, { useState } from 'react'

const DataContext = React.createContext()

function DataContextProvider(props) {
    const [pokemonListData, setPokemonListData] = useState([])

    return (
        <DataContext.Provider value={({ pokemonListData, setPokemonListData })}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataContext, DataContextProvider }