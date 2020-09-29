import React from 'react';


const SecondProductSection = () => {
    const renderSections = () => {
        let arr = [1, 2, 3, 4, 5]
        let arr1 = [6, 7, 8, 9, 10]
        let array = arr.map((item, i) => {
            return (
                <div className='product-card'>
                    <div className='img'>
                        Товар {item}
                    </div>
                    <h4> Название товара {item}</h4>
                    <h3> Цена {item}</h3>
                </div>
            )
        })
        let array1 = arr1.map((item, i) => {
            return (
                <div className='product-card'>
                    <div className='img'>
                        Товар {item}
                    </div>
                    <h4> Название товара {item}</h4>
                    <h3> Цена {item}</h3>
                </div>

            )
        })
        return (
            <div>
                <div className='product-section'>
                    {array}
                </div>
                <div className='product-section'>
                    {array1}
                </div >
            </div>
        )
    }


    return (
        <div className="first-product_container">
            <h2>Хиты продаж</h2>
            {renderSections()}
        </div>
    );
}

export default SecondProductSection;
