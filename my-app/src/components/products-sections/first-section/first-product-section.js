import React, { useEffect } from 'react';
import FirstProdSectionTittleOne from '../../../data/luukby/first-prod-sect/firstDataProdSection'
import renderTittles from './titles'

const FirstProductSection = () => {
    console.log(FirstProdSectionTittleOne)

    return (
        <div>
            <h2>Хиты продаж</h2>
            {renderTittles()}
        </div>
    );
}

export default FirstProductSection;
