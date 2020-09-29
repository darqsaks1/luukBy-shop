import React from 'react';
export const calculate = (x) => {
    let sum = 0
    x.map((item) => {
        sum += item.price
    })
    return (
        <div>
            <div>количество товаров: {x.length}</div>
            <div>`сумма: {sum} руб.`</div>
        </div>

    )
}

export const returnAnyBucket = () => {
    return (
        <div className='prod-landing-card'>
            Кажется.. тут
        </div>
    )
}