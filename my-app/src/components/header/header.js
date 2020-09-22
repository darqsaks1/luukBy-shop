import React from 'react';
import bucketImage from '../../assets/app-images/bucket.png'

const Header = () => {
    return (
        <div className="header">
            <div className='header-list'>
                <div>
                    <a href='./'>
                        Главная
                    </a>
                </div>
                <div>
                    <a href='form'>
                        О магазине
                    </a>
                </div>
                <div>
                    <a href='form'>
                        Оплата и доставка
                    </a>
                </div>
            </div>
            <div className='header-bucket'>
                <img src={bucketImage} alt='bucket'/>
                <div>1</div>
            </div>
        </div>
    );
}

export default Header;
