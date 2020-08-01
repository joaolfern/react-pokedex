import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'


import MovesList from './moves/MovesList'
import AbilitiesList from './AbilitiesList'
import Spinner from '../Spinner'
import Stats from './Stats'

function ToggleItem({ isToggled, handleToggle, name, toRender }) {
    const [loading, setLoading] = useState(true)

    return (
        <>
            <div className='pokemonDetail__toggleables__item'>
                <div className='pokemonDetail__toggleables__header'>
                    <FontAwesomeIcon
                        icon={isToggled ? faToggleOn : faToggleOff}
                        onClick={() => handleToggle(name)}
                        name={name}
                        className='toggleIcon'
                    />
                    <p>{name}</p>
                </div>
                {
                    isToggled &&
                    <div
                        className={`pokemonDetail__${name} pokemonDetail__toggleables__content`}
                    >
                        <div style={{ visibility: loading ? 'visible' : 'hidden', display: loading ? 'block' : 'none' }}>
                            <Spinner size='small' />
                        </div>

                        {name === 'moves' ?
                            <div style={{ visibility: loading ? 'hidden' : 'visible', display: loading ? 'none' : 'block' }}>
                                <MovesList
                                    moves={toRender}
                                    setLoading={setLoading}
                                    loading={loading}
                                />
                            </div>
                            :
                            name === 'abilities' ?
                                <div style={{ visibility: loading ? 'hidden' : 'visible', display: loading ? 'none' : 'block' }}>
                                    <AbilitiesList
                                        abilities={toRender}
                                        setLoading={setLoading}
                                    />
                                </div>
                                :
                                <div style={{ visibility: loading ? 'hidden' : 'visible', display: loading ? 'none' : 'block' }}>
                                    <Stats
                                        stats={toRender}
                                        setLoading={setLoading}
                                        loading={loading}
                                    />
                                </div>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default ToggleItem