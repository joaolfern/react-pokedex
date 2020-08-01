import React from "react"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from './pages/About'
import ServicesList from "./pages/pokedex/PokemonList"
import ServiceDetail from "./pages/pokedex/PokemonDetail"

import './styles/general.css'

import { Switch, Route } from "react-router-dom"
import getTitle from "./getTitle"

function App() {

    document.title = getTitle()

    return (
        <div className='app'>
            <NavBar />
            <div className='content'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/pokemon" >
                        <ServicesList />
                    </Route>
                    <Route path="/pokemon/:pokemonName" >
                        <ServiceDetail />
                    </Route>


                    <Route path="/about" >
                        <About />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App