import React from 'react'
import TypeLabel from '../TypeLabel'
import MoveClass from './MoveClass'
import LabeledData from './LabeledData'

function Move({ data }) {
    return (
        <div className='moveTile'>

            <div className='moveTile__firstCol'>

                <div className='moveTile__nameAndType'>
                    <p className='moveTile__name'>{data.name}</p>
                    <div className='typeAndClass'>
                        <TypeLabel className='typeAndClass__item' type={data.type} />
                        <MoveClass className='typeAndClass__item' moveClass={data.damage_class} />
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