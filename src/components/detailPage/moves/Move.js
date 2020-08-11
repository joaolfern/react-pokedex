import React from 'react'
import TypeLabel from '../TypeLabel'
import LabeledData from './LabeledData'

import getCapitalizedWord from '../../../getCapitalizedWord'

function Move({ data }) {
    return (
        <div className='moveTile'>

            <div className='moveTile__firstCol'>

                <div className='moveTile__nameAndType'>
                    <p className='moveTile__name'>{getCapitalizedWord(data.name)}</p>
                    <div className='typeAndClass'>
                        <TypeLabel className='typeAndClass__item' type={data.type} />
                        <div className='typeAndClass__item'>
                            <img src={`https://play.pokemonshowdown.com/sprites/categories/${getCapitalizedWord(data.damage_class)}.png`} alt={`${getCapitalizedWord(data.damage_class)} move`} />
                        </div>
                    </div>
                </div>

                <div className=' moveTile__stats'>
                    <div className='LabeledData'>
                        <LabeledData className='LabeledData__item' number={data.power} dataType='Power' />
                        <LabeledData className='LabeledData__item' number={data.accuracy} dataType='Accuracy' />
                        <LabeledData className='LabeledData__item' number={data.pp} dataType='PP' />
                    </div>
                </div>

            </div>

            <div>
                <p className='moveTile__effect'>{data.effect}</p>
            </div>
        </div>
    )
}

export default Move