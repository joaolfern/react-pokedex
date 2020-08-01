import React from 'react'

function LabeledData({ number, dataType }) {
    return (
        <div className='labeledData__item'>
            <p className='label'>{number && dataType ? `${dataType}` : '-'}</p>
            <p>{number}{dataType === 'Accuracy' && number && '%'}</p>
        </div>
    )
}

export default LabeledData