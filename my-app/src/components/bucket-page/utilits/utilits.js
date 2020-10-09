import React from 'react';
export const calculate = (x) => {
    let sum = 0
    x.map((item) => {
        sum += item.price * item.number
    })
    return (
        <div className='price-block-fin'>

            <div className='fin-sum'>{`    ${sum} руб.`}</div>
        </div>

    )
}

