import React from 'react';

const HumanCategories = () => {
    return (
        <div className="human-categories">
            <h2> Выберите товар для себя</h2>
            <div className ='human-categories-list'>
                <div className='man'>
                    <a href='/'>
                   Для мужчин
                    </a>
                </div>
                <div className='girl'>
                    <a href='/'>
                  Для женщин
                    </a>
                </div>
                <div className='child'>
                    <a href='/'>
                   Для детей
                    </a>
                </div>
              
            </div>
        </div>
    );
}

export default HumanCategories;