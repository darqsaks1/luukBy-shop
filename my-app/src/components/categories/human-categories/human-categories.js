import React from 'react';

const HumanCategories = () => {
    return (
        <div className="human-categories">
            <h2> Выберите товар для себя</h2>
            <div className ='human-categories-list'>
                <div class='man'>
                    <a href='/'>
                   Для мужчин
                    </a>
                </div>
                <div class='girl'>
                    <a href='/'>
                  Для женщин
                    </a>
                </div>
                <div class='child'>
                    <a href='/'>
                   Для детей
                    </a>
                </div>
              
            </div>
        </div>
    );
}

export default HumanCategories;