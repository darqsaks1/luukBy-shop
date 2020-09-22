import watchTNKvTittleImage from '../../assets/base/watch/watch-tn-kvarc25/title-img.jpg';
import watchTNKvGalImage from '../../assets/base/watch/watch-tn-kvarc25/img1.jpg';
import watch61T from '../../assets/base/watch/watch6.11/6.1Tittle.jpg';
import watch61G from '../../assets/base/watch/watch6.11/6.1gal.jpg';
import FD_T from '../../assets/base/watch/flowerdiamond/FD-title.jpg';
import FD_gal from '../../assets/base/watch/flowerdiamond/FD_gal.jpg';
import FD_gal2 from '../../assets/base/watch/flowerdiamond/FD_gal2.jpg';
import SS_T from '../../assets/base/watch/starSky/SS_T.jpg';
import SS_gal from '../../assets/base/watch/starSky/SS_G.jpg';
import SS_gal2 from '../../assets/base/watch/starSky/SS_T2.jpg';
import dom_T from '../../assets/base/watch/dom/DOM_T.jpg';
import DOM_G from '../../assets/base/watch/starSky/DOM_G.jpg';
import DOM_G2 from '../../assets/base/watch/starSky/DOM_G2.jpg';
import Cur_T from '../../assets/base/watch/currentWatch/Cur_T.jpg';
import Cur_G from '../../assets/base/watch/currentWatch/Cur_G.jpg';
import Cur_G2 from '../../assets/base/watch/currentWatch/Cur_G2.jpg';
const watchData = [
        {
            name: 'Часы TH кварц',
            image: { watchTNKvTittleImage },
            description:
                `Характеристики: 
            Пол: Мужские
            Функции: Часы, минуты, секунды, день недели
            Механизм: Кварц
            Стекло: Минеральное
            Браслет: металл`,
            galImage: { watchTNKvGalImage },
            price: 61,
        },
        {
            name: 'Часы 6.11 кварц',
            image: watch61T,
            description:
                `Характеристики: 
            Пол: Мужские
            Функции: Часы, минуты, секунды, дата
            Механизм: Кварц
            Стекло: Минеральное
            Браслет: металл
            Водонепроницаемые: да`,
            galImage: [watch61G],
            price: 61,
        },
        {
            name: 'Flower Diamond',
            image: FD_T ,
            description:
            `Часы Flower Diamond – яркая находка для современной девушки,
            которая желает выделиться среди подружек.
            Этот аксессуар привлекает внимание своим оригинальным дизайном.
            Циферблат украшен переливающимися кристаллами, он крутится. 
            Браслет металлический, чуть темнее основного цвета, в котором выполнен циферблат. 
            Застежка-магнит позволяет быстро и надежно застегнуть браслет.`,
            galImage: [FD_gal, FD_gal2],
            price: 25,
        },
        {
            name: 'Женские наручные часы Звездное небо',
            image:  SS_T ,
            description:
            `Аккуратные женские часы Звездное небо станут незаменимым аксессуаром. Нанесенные на черный циферблат блестки имитируют звезды на небе. Такое интересное решение декора смотрится необычно и интересно. Вместо цифр по кругу размещены стразы. Удобный ремешок часов застегивается сбоку. Благодаря этому аксессуар невозможно потерять, застежка не будет цепляться за одежду.`,
            galImage: [SS_gal, SS_gal2],
            price: 61,
        }, 
        {
            name: 'Мужские часы Dom ',
            image:  dom_T,
            description:
            `Минеральное стекло долговечно и за ним просто ухаживать, потому что оно легко поддается полировке. Профиль корпуса немного изогнут, что позволяет часам удобно охватывать руку. Браслет часов выполнен из износостойкого сплава, устойчивого к повреждениям. Механизм замка застегивается так, что позволяет визуально браслету выглядеть, как единое целое.`,
            galImage: [DOM_G, DOM_G2],
            price: 25,
        }, 
        {
            name: 'Часы Curren кварц (арт.3) ',
            image:  Cur_T,
            description:
            `Бренд: Curren
            Пол: Мужская
            Функции: Часы, минуты, секунды, дата
            Механизм: Кварцевый
            Стекло: Минеральное
            Ремень: Из искусственной кожи, с классической застежкой
            Диаметр: 45 мм
            Толщина: 12 мм
            Вес: 85 гр`,
            galImage: [Cur_G, Cur_G2],
            price: 20,
        }
]