import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import '../../styles/navStyles.css'

function NavPages({ dexNumber }) {
    const nextDexNumber = dexNumber + 1 > 807 ? 807 : dexNumber + 1
    const prevDexNumber = dexNumber - 1 < 1 ? 1 : dexNumber - 1

    return (
        <>
            <ul className='nav-list'>
                <Link className='navPage__item nav-item' to={`/pokemon/${prevDexNumber}`}>
                    <li >
                        <FontAwesomeIcon className='navPage__item--whiteColor' icon={faArrowLeft} />
                    </li>
                </Link>
                <Link className='navPage__item nav-item' to={`/pokemon/${nextDexNumber}`}>
                    <li >
                        <FontAwesomeIcon className='navPage__item--whiteColor' icon={faArrowRight} />
                    </li>
                </Link>
            </ul>
        </>
    )
}

export default NavPages