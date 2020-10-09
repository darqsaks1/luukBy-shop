import React from 'react'; import { NavLink, Link } from "react-router-dom";
import Luuk from '../../../assets/grusniLuuk.png'
const WasteBucket = () => {

    return (
        <div className='waste-bucket'>
            <div className='waste-text'>
                <div className='waste-h'><p>В вашей корзине пока ничего нет</p></div>
                <div className='waste-p'>Корзина ждет, что ее наполнят. Желаем приятных покупок!</div>
                <div>
                    <NavLink to='./shop' activeClassName="active"
                    >
                        Каталог товаров
                    </NavLink>
                </div>
            </div>
            <div className='waste-img'>
                <img src={Luuk} alt='luuk' />
            </div>
        
        </div>
    );
}

export default WasteBucket;