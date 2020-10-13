const shopObj = [
    {
        name: ' Компактный монокуляр BUSHNELL ',
        subDescr: '4 цвета на выбор',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/monokular4.jpg?alt=media&token=65706efa-6045-411c-ab22-985eeff8b862',
        description: `Принцип работы монокуляра заключается в особом напылении FullVision, которым оснащены стеклянные линзы устройства. Напыление мгновенно реагирует на уровень освещения и позволяет использовать монокуляр для обзора как в дневное, так и в ночное время. Сегодня эта научная разработка успешно применяется в военных подразделениях 15-ти стран мира, в том числе США, Германии и России.
       
        Кратность увеличения:16-ти кратное, Поле зрения:66 м / 8000 м, Изображение:качественное, четкое
        ,Диаметр объектива:52 мм
       , Коэффициент пропускания света:высокий
        ,Корпус:металлический прорезиненный
        ,Конструкция регулировки:двойная
        ,Диапазон рабочих температур:от -40 до +50
       , Защита:от ударов и влаги
        ,Производство:Тайвань
        ,Оптика:стекло
        ,Вес:270 `,
        galImage: ['https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/monokular4.jpg?alt=media&token=65706efa-6045-411c-ab22-985eeff8b862',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/monokular3.jpg?alt=media&token=fcdc3e00-7e2b-4e91-a0da-5b3cdacf3c56',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/monokular2.jpg?alt=media&token=e6ce1d4e-9a04-4737-ba13-851e2b1af260',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/monokular5.jpg?alt=media&token=de490807-f54d-438f-9a2d-b83afda498a7',
        ],
        price: 39,

        categories: 'electric',
        hrefLink: '/monokular',
    },
    {
        name: 'Ночник "Звездное небо"',
        subDescr: '4 цвета на выбор',
        image: 'http://night-light.luuk.by/images/offer-top-new.png',
        description: `2 вида свечения:
        Светильник может работать как ночная лампа, так проектор звездного неба
        2 способа зарядки:
        Проектор работает как от 4 батареек ААА (не входят в комплект), так от USB кабеля.
        Примечание: обратите внимание, что usb-кабель и аккумуляторы не могут использоваться одновременно.`,
        galImage: ['https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/night1.png?alt=media&token=1a17bed9-f0a4-4441-83df-357ed2ec5e2a',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/night7.jpg?alt=media&token=0186d1b5-8e8a-48ae-8116-e9a682bf69de',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/122.jpg?alt=media&token=98e7536e-fd2f-4c14-8ad2-d0895e4c3866',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/night3.jpg?alt=media&token=ac54dbdc-a01d-40a7-9956-e654e46244b7',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/night4.jpg?alt=media&token=b592c715-9f28-4ae9-8236-d4e732807983'],
        price: 29,
        categories: 'gifts',
        hrefLink: '/nochnik',
    },
    {
        name: 'Slim Shapewear',
        subDescr: 'Комбидресс для коррекции фигуры',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/slim.jpg?alt=media&token=72d08a45-5696-4c1c-9933-7b3687466091',
        description: `Уменьшает объем бедер, делает ягодицы визуально упругими и придает им правильную форму
        Приподнимает грудь, увеличивая на 1-2 размера
        Подтягивает живот, уменьшая линию талии`,
        galImage: [
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sl1.jpg?alt=media&token=61529cf2-e21c-4ea6-b294-13aad3605d7e",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sl2.jpg?alt=media&token=3dc3743f-c434-4236-9613-152587723591",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sl3.jpg?alt=media&token=abc17db0-5ff4-45fa-a53a-095558f818ea",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sl4.jpg?alt=media&token=fc0139ed-df96-4d7b-82ce-72391763c80d",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sl5.gif?alt=media&token=170f2348-2b01-4b01-9c7c-d2c1999b6cda"],
        price: 25,
        categories: 'life',
        hrefLink: '/slim-shapewear',
    },
    {
        name: 'Органайзер для одежды',
        subDescr: 'ЗАКАЖИ СЕЙЧАС И ПОЛУЧИ 5 КОМПЛЕКТОВ ОРГАНАЙЗЕРОВ',
        image: "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/org1.png?alt=media&token=c62ac09b-be7a-4302-9175-2cb839b5c5ff",
        description:
            `Преимущества органайзера для одежды:
        Уникальная, запатентованная конструкция вешалки, позволяет хранить до 8 раз больше вещей, эффективно используя пространство шкафа.
        Увеличенное количество секций, в отличие от других вешалок, позволяет значительно экономить место, при этом облегчая доступ к одежде.
        Еще одним важным преимуществом органайзера - свободное вращение на 360 градусов, что обеспечивает максимально удобный способ доступа к гардеробу и гарантирует порядок в шкафу
        Вешалки изготовлены из ударопрочного, плотного пластика, что гарантирует максимальную долговечность.`,
        galImage: [
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/org2.gif?alt=media&token=f51b1ca6-b7b9-4921-8216-a9c84f42e54a",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/org3.png?alt=media&token=0ba747fc-6e74-4160-9883-9a9b5b9c3ea4",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/org4.gif?alt=media&token=ba0aaefb-2edc-40ef-881a-384a2b5b7a24",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/org5.jpg?alt=media&token=9642b33b-7b55-4a15-b5f7-99fb8d2adafa",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/org6.gif?alt=media&token=29e5a8a5-97d5-415e-a786-14d7ab2f4386"],
        price: 25,
        categories: 'acsses ',
        hrefLink: '/organaizer',
    },
    {
        name: 'ЖЕНСКАЯ СУМКА-КЛАТЧ',
        subDescr: '4 цвета на выбор',
        image: "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/kl1.jpg?alt=media&token=2b4c6ceb-7ccf-4374-ac76-4252e34b58b7",
        description: `Сумка-клатч - это стиль, мода и качество. Важные документы и деньги всегда под рукой и в безопасности. Станет подарком близкой подруге или знакомым. Сумка-клатч - аксессуар, который с лёгкостью вмещает в себя вышеперечисленные необходимые вещи.`,
        galImage: [
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/kl2.jpg?alt=media&token=2f2eb073-b203-40af-b92c-291121758332",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/kl5.jpg?alt=media&token=d3455ce0-6f46-4570-bf80-7bfdb53c244a",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/kl4.jpg?alt=media&token=9e4f715c-b783-4ddf-b042-d437573a1139",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/kl3.jpg?alt=media&token=6b30fd30-1495-4920-83a8-3b1023ae3e1d",
            "https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/kl6.jpg?alt=media&token=da4b1a85-0553-4291-afe5-7ed3c048ca27"],
        price: 29,
        hrefLink: '/sumkaa-klatch',
        categories: 'acsses ',
    },
    {
        name: 'ДЕТСКИЙ ИГРОВОЙ КОВРИК-АКВАРИУМ',
        subDescr: 'Укрепляет руки, спину и шею малыша',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/7.png?alt=media&token=ea2592a0-0fed-4222-8eb5-fbeda6ba9366',
        description: `У вас не хватает времени для своих дел, так как ребенок постоянно просится на руки? Вам просто необходим наш игровой коврик-аквариум. Просто заполните наружное кольцо воздухом, а внутренний коврик - желаемым уровнем воды, поставьте его на пол и начните веселье!
        Детский игровой коврик-аквариум
        Игровой коврик-аквариум развивает мелкую моторику ребенка, воображение, помогает укрепить спину, руки и шею. Он легко складывается, его можно взять с собой на прогулку и играть где угодно.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/8.jpg?alt=media&token=92581aa6-42e1-4e70-bbd2-8641c583fce2',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/9.jpg?alt=media&token=8c1e4798-d41e-4d6a-8c1f-6a1c1cbd35e7',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/10.jpg?alt=media&token=b984cdb3-837e-48dc-ae12-15f714d63137',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/11.jpg?alt=media&token=37e011b7-6591-4c8d-b524-a184126a407f',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/12.jpg?alt=media&token=25d06286-d56a-4329-88f2-c8b5993e8ce6'],
        price: 49,
        hrefLink: `/child-kover`,
        categories: 'child',
    },
    {
        name: 'Набор ножей 6 в 1 для дома',
        subDescr: 'УЛЫБКА СТАНЕТ БЕЛОСНЕЖНОЙ',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/n1.png?alt=media&token=5ddcebcd-a97c-4ee7-8dc5-b502cef63287  ',
        description: `
        Режущая кромка и поверхность ножа с V-образной канавкой, отличается бритвенной остротой и долго не тупится
        К поверхности стали не прилипают кусочки пищи, в том числе и вязкие
        Набор ножей содержит как универсальное лезвие, так и узкоспециализированные модели, заточенные под конкретную задачу разделка мяса, нарезка овощей и фруктов, хлеба
        Мытье занимает считанные секунды`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/n2.png?alt=media&token=dc048f57-c4ab-4f21-9577-a008ae95da0b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/n3.png?alt=media&token=063259f2-85f8-4c7d-b7b0-fe1c0639d129',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/n4.jpg?alt=media&token=3accedfc-ac5f-4296-8e80-9578a8f87b2a',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/n5.jpg?alt=media&token=9a18978d-af6b-4bfc-b489-4e44ab90dafc',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/n6.jpg?alt=media&token=fda21b65-fc8b-418c-bcea-45811b5befe9'],
        price: 39,
        hrefLink: `/stack-knives`,
        categories: 'home'
    },
    {
        name: 'POWERBANK 40000 MAH + 4 подарка',
        subDescr: ' В подарок наушники, блютуз колонка, led часы',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/swiper1Img.png?alt=media&token=65994718-1b3f-46ab-8afe-8ff047fc9807',
        description: `РЕИМУЩЕСТВА ПОРТАТИВНОЙ BLUETOOTH КОЛОНКИ:
        1)Поддержка Bluetooth. Подключение с помощью Bluetooth к любому устройству, включая планшеты и телефоны.    
        2)Защита от брызг. Можно не беспокоиться о случайных брызгах или внезапном дожде.     
        3)Батарея большой емкости. В динамик встроена литий-ионная аккумуляторная батарея - 6000 mAh, которая обеспечивает до 8 часов непрерывного прослушивания.
        4)Стильный дизайн. Стильный и современный дизайн поможет украсить как обычный семейный ужин, так и шумную вечеринку. Имеет встроенный микрофон.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/swiper3Img.png?alt=media&token=2a6f76a5-42e0-4f68-9b18-5d4c96112e1d',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/swiper4Img.png?alt=media&token=73fd5f6d-5d0d-4cb8-b068-b42fde58a0bc',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/swiper5Img.png?alt=media&token=d1da48db-03be-467e-bc54-9555efeb53b5',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/swiper6Img.png?alt=media&token=34e914c3-96a3-45ab-85c4-7d494b4fc434',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/swiper8Img.png?alt=media&token=38ec7c97-ee85-4d8c-bb92-13ab2a0dd093'],
        price: 59,
        hrefLink: `/powerback-fourmah`,
        categories: 'electric'
    },
    {
        name: 'Aroma Diffuser',
        subDescr: 'УВЛАЖНИТЕЛЬ ВОЗДУХА АРОМАДИФФУЗОР ОРИГИНАЛЬНЫЙ НОЧНИК',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/aroma1.jpg?alt=media&token=4a5ecdc8-e86a-48f5-93be-285404a1f76a',
        description: `Компактный увлажнитель воздуха Aroma Diffuser создает идеальный микроклимат в комнате и сочетает в себе сразу несколько устройств: увлажнитель воздуха, аромалампа, ночник и стильный элемент декора, оформленный под светлое или темное дерево.
        Прибор бесшумно увлажняет воздух в комнате, превращая воду в туман. Добавив в воду несколько капель эфирного масла, вы наполните дом нежным приятным ароматом и создадите уютную и расслабляющую атмосферу. А красивая и спокойная подсветка в форме звезд, работающая в режиме плавной смены цветов, способна превратить этот прибор в ваш любимый ночник.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/aroma2.jpg?alt=media&token=0f991b20-9853-4c43-a7fe-d4ca25ed3560',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/aroma3.jpg?alt=media&token=e6d62592-557e-4326-be73-0a3c7db28a72',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/aroma4.jpg?alt=media&token=848e4caa-f750-4d8f-bba3-2e390fdd53bc',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/aroma5.jpg?alt=media&token=5dc483e4-c489-4375-b78a-aa8331179951',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/aroma6.jpg?alt=media&token=f3e3ace4-f7a5-4fe1-a34c-3d9739c03d3d'],
        price: 39,
        hrefLink: `/aroma-diffuser`,
        categories: 'home'
    },
    {
        name: 'Бамбуковое одеяло',
        subDescr: '+ 2 подушки из бамбука в подарок',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam1.png?alt=media&token=996373f4-68a8-4bfc-8b38-33ac2a5fd4e1',
        description: `
        Преимущества бамбукового одеяла:
        Гипоаллергенность. Популярные одеяла из бамбукового волокна не вызывают аллергию
        Гигроскопичность. Волокна бамбука хорошо пропускает и испаряет влагу
        Воздухопроницаемость. Бамбуковое волокно хорошо пропускает воздух
        Стерильность. Бамбуковому волокну присущи антимикробные и бактерицидные свойства`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam2.png?alt=media&token=9e960467-ce9b-4b0e-ba0e-14a85e1b3cba',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam3.png?alt=media&token=94cf43bf-ee4d-493f-8f57-22b6756dfd2a',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam4.jpg?alt=media&token=3adbb16f-6b8a-4525-acd0-430ddcceb64b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam5.jpg?alt=media&token=a3c4d3b4-814e-4cb9-959f-02b96978ebe0',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam6.jpg?alt=media&token=3fb2c53f-c7ae-4ff6-a6a3-4174ca18e0a8'],
        price: 39,
        hrefLink: `/bamboo`,
        categories: 'home'
    },
    {
        name: 'SMАRT WATCH',
        subDescr: '+ КЛАТЧ И НАУШНИКИ В ПОДАРОК',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sm-watch1.jpg?alt=media&token=c96e7b6e-4f2e-4eb0-9857-fbbc30435988',
        description: `
        Фитнес-трекер, камера, телефон, смарт часы на твоей руке. Классические и одновременно спортивные. Показывают время по взмаху руки и могут звонить!
        Они предлагают вам важную информацию там, где она нужна. Тогда, когда она вам нужна. 
        И помогают в считанные секунды выполнять повседневные задачи.
        Позволяют моментально связаться с близкими людьми или проконтролировать важные для вас вещи. 
        И при этом показывают точное время. Да, это часы. Но совсем не такие, какими вы их всегда себе представляли.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sm-watch2.jpg?alt=media&token=8c6fcacc-b1ab-4d83-a27c-6e9a313491b8',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sm-watch3.jpg?alt=media&token=706cb586-63e2-4b0b-930b-98f1c114a9d2',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sm-watch4.jpg?alt=media&token=3b29108a-a29b-4646-bcfb-7b31ce5b4592',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/sm-watch5.jpg?alt=media&token=82ef8180-2446-4a86-b914-3cb29d68c80b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam6.jpg?alt=media&token=3fb2c53f-c7ae-4ff6-a6a3-4174ca18e0a8'],
        price: 59,
        hrefLink: `/smart-watch`,
        categories: 'electric'
    },
    {
        name: 'Женские сумки BEARS 4в1 ',
        subDescr: 'В набор входит: Сумка + клатч + кошелёк + визитница + подарок',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/1.jpg?alt=media&token=5dad967b-f069-4a84-a8b2-ba853d17e402',
        description: `
    Стильная сумка BEARS  несомненно порадует молодых девушек. Отличительной чертой бренда является качество материала.  
    Особенности сумочки включают:
    • Большую стильную сумку
    • Элегантный клатч
    • Качественный кошелек
    • Удобная визитница
    • Подарок от магазина.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/2.jpg?alt=media&token=e8db5beb-0c28-4149-98b2-54307e0bd6a5',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/3.jpg?alt=media&token=8896a36f-411f-4a3d-b9db-8463bb9f0b0a',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/4.jpg?alt=media&token=8c72f08d-30d1-4516-b1ad-22d9b9bca137',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/1.jpg?alt=media&token=5dad967b-f069-4a84-a8b2-ba853d17e402',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch2.jpg?alt=media&token=172a0d5f-7e99-49df-85cd-bdbc62ab1241'],
        price: 59,
        hrefLink: `/bag-bear`,
        categories: 'acsses'
    },
    {
        name: 'Электрическая зубная щетка',
        subDescr: `В комплект входит: 
       электрическая зубная щётка Sonic toothbrush x-3,
        зубная насадка 4 шт,
        Кабель USB 1 шт`,
        image:
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/chentka1.jpg?alt=media&token=63734bad-8dae-4726-bae7-b6dbe5b0b065',
        description: ` Стабильный режим ожидания,
легкость в управлении.
После полной зарядки при ежедневной работе
по 2 минуты утром и вечером
работает 60 дней без подзарядки. Совместимость с зарядным устройством
для мобильного телефона,
USB-порт для зарядка любого зарядного устройства.

Удобная зарядка, высокая эффективность, экономия времени`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/chentka2.jpg?alt=media&token=17297d28-140d-4d90-b5a4-676ebdc68f74',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/chentka3.jpg?alt=media&token=65fdc3ef-4c2d-4964-aeb9-fac31d464eda',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/chentka4.jpg?alt=media&token=717623ab-7897-4c57-9745-eaa7e6d0e00a',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/chentka5.jpg?alt=media&token=c48709ed-dfe5-4154-b862-44e7fd7df98d',
        ],
        price: 39,
        hrefLink: `/zub-chetka`,
        categories: 'life'
    }, {
        name: 'Женские сумки EVERYDAY 4в1 ',
        subDescr: 'В набор входит: Сумка + клатч + кошелёк + визитница  ',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/everyady.png?alt=media&token=13905fb1-6035-4367-b17b-3c79b6e439a3',
        description: `
    Стильная сумка  EVERYDAY  несомненно порадует молодых девушек. Отличительной чертой бренда является качество материала.  
    Особенности сумочки включают:
    • Большую стильную сумку
    • Элегантный клатч
    • Качественный кошелек
    • Удобная визитница
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/everyady.png?alt=media&token=13905fb1-6035-4367-b17b-3c79b6e439a3',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/everyady2.png?alt=media&token=3fbd9ed6-2bc7-4c67-a2c2-a8965aa4d454',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/everyady1.png?alt=media&token=7028286c-12de-4373-b903-404862152527',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/everyady4.png?alt=media&token=35c33329-c59c-4488-98e8-2463036a0e7a',
        ],
        price: 59,
        hrefLink: `/bag-everyday`,
        categories: 'acsses'
    },
    {
        name: 'Powerbank с беспроводной зарядкой  ',
        subDescr: '+ беспроводные наушники ',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/powerbank1Tuttle.jpg?alt=media&token=5d888457-f734-4d70-a2de-7fb422e4ab0e',
        description:
            `
        Успей заказать POWERBANK на 20000 mAh с функцией бесповодной зарядки + беспроводные наушники. ПРЕИМУЩЕСТВА
        POWERBANK С ФУНКЦИЕЙ БЕСПОВОДНОЙ ЗАРЯДКИ. МОЩНОСТЬ - Продолжительность работы устройства.   ДОСТУПНОСТЬ - Продаем по лучшим ценам на рынке. Сделайте покупку с выгодой 51%.  ПОРТАТИВНОСТЬ -  Имеет очень компактные небольшие размеры: 10 см x 16 см x 4,5 см мм и вес всего 329 г.
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/power1.png?alt=media&token=121518dc-6787-486d-b727-a43884a812ba',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/powerbank1Tuttle.jpg?alt=media&token=5d888457-f734-4d70-a2de-7fb422e4ab0e',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/powe12.jpg.png?alt=media&token=3607c181-94cb-4cd2-9785-9b9dee424234',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/power1.png?alt=media&token=121518dc-6787-486d-b727-a43884a812ba',
        ],
        price: 59,
        hrefLink: `/powerbank-with-lignthing`,
        categories: 'electric'
    }, {
        name: 'Женские сумки Valeriance 4в1 ',
        subDescr: 'В набор входит: Сумка + клатч + кошелёк + визитница  ',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/valeriance1.png?alt=media&token=9b149248-d58a-4320-8ec9-f54be79a0070',
        description: `
    Стильная сумка  Valeriance  несомненно порадует молодых девушек. Отличительной чертой бренда является качество материала.  
    Особенности сумочки включают:
    • Большую стильную сумку
    • Элегантный клатч
    • Качественный кошелек
    • Удобная визитница
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/valeriance2.png?alt=media&token=8e70f7d8-3eb6-4919-84bc-9894d6f3aeba',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/everyady2.png?alt=media&token=3fbd9ed6-2bc7-4c67-a2c2-a8965aa4d454',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/valeriance3%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png?alt=media&token=287f908d-be6a-4b89-956c-d5b2d9ad7f54',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/valeriance4.png?alt=media&token=2378bc6a-f75e-4561-b89d-b595b57945a3',
        ],
        price: 59,
        hrefLink: `/bag-Valeriance`,
        categories: 'acsses'
    },
    {
        name: 'Дозатор зубной пасты "МИНЬОН"  ',
        subDescr: ' Больше не нужно заставлять детей чистить зубы, теперь им это в радость.',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dozator1.jpg?alt=media&token=a9c86385-02c7-4a4f-a539-ea52d86787ca',
        description:
            `
            Как известно, желтые человечки обожают быть полезными для своего босса.
             Поэтому если вы решили завести себе знаменитого приспешника, то Миньон дозатор 
             зубной пасты действительно принесет вам пользу. Во-первых, он сэкономит пространство
              в маленькой ванной комнате. Во-вторых, он с удовольствием поддержит две зубные щетки.
               В-третьих, поможет сэкономить на зубной пасте. Тюбику не будет никакой пощады, он будет
                выжат до последней капли. Дети очень любят миньонов, поэтому рекомендуем дозатор купить в подарок ребенку. Функциональной игрушкой будет хотеться пользоваться каждый день, поэтому пропущенные сеансы чистки зубов останутся позади.
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dozator2.jpg?alt=media&token=c9319bd4-2088-4051-97a4-b789e5eec815',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dozator4.jpg?alt=media&token=d235cdf0-a207-4d3f-8f07-498a9163b627',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dozator3.jpg?alt=media&token=aab93327-98d5-4c90-9d12-ec761410da6f',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dozator2.jpg?alt=media&token=c9319bd4-2088-4051-97a4-b789e5eec815',
        ],
        price: 25,
        hrefLink: `/dozator`,
        categories: 'child'
    },
    {
        name: 'Ортопедическая подушка ',
        subDescr: 'Здoрoвый coн для челoвекa – зaлoг хoрoшегo caмoчувcтвия и прoдуктивнoй рaбoты.',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/podushka1.jpg?alt=media&token=64638e32-22b6-4335-bfd8-a721f70040a8',
        description: `
        Пoчему вaжнo cпaть нa oртoпедичеcкoй пoдушке?
        Нaпoлнитель - пенa MemoryFoam aнaтoмичеcкoй фoрмы c эффектoм пaмяти oбеcпечивaет прaвильнoе пoлoжение гoлoвы и шеи вo время cнa. Жеcткocть-cредняя.
        Пoдушкa гипoaллергеннa. Подушка специальной эргономической формы с двумя валиками. Подушка изготовлена из уникального материала с эффектом памяти формы он оказывает минимальное давление на тело. При надавливании подушка принимает форму давящего на него объекта, сохраняет эту форму, затем, при снятии давления, полностью медленно восстанавливается.

        Наполнитель подушки – вязко эластичный ППУ с памятью формы практически не оказывает давления на кровеносные сосуды, позволяет мышцам полностью расслабиться, благодаря чему покровные ткани не пережимаются. Материал реагирует не только на вес, но и на тепло.
        
        Благодаря ячеистой структуре материала подушка “дышит” и обладает превосходным теплообменом, таким образом, во время сна обеспечивается хорошая вентиляция и терморегуляция.
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/podushka2.jpg?alt=media&token=3fe17066-35c9-4435-be05-2fd1e49cd660',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/podushka1.jpg?alt=media&token=64638e32-22b6-4335-bfd8-a721f70040a8',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/podushka2.jpg?alt=media&token=3fe17066-35c9-4435-be05-2fd1e49cd660',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/podushka3.jpg?alt=media&token=64b07e25-4a60-4bc5-bafd-6c2c98fa907d',
        ],
        price: 49,
        hrefLink: `/ortoped-podushka`,
        categories: 'life'
    }, {
        name: 'Беспроводные наушники + 3 подарка ',
        subDescr: 'В Мощный powerbank на 20000 mAh, Универсальные LED-часы с мягким ремешком, Легкая и компактная селфи-палка!',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/pods3.jpg?alt=media&token=1e27705d-ee73-4a63-af94-dd939496cf2b',
        description: `
        Премущество беспроводных наушников - это МОЩНОСТЬ( Продолжительность автономной работы устройства), ДОСТУПНОСТЬ (Продаем по лучшим ценам на рынке. Сделайте покупку с выгодой 74%), ПОРТАТИВНОСТЬ (Имеет очень компактные небольшие размеры: 40,5 х 18 х 16,5 мм и вес всего 4 г. (каждый))
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/pods1.png?alt=media&token=e8f63046-d394-4729-b1d6-6f7e373da78d',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/pods3.jpg?alt=media&token=1e27705d-ee73-4a63-af94-dd939496cf2b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/pods1.png?alt=media&token=e8f63046-d394-4729-b1d6-6f7e373da78d',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/pods2.jpg?alt=media&token=aa5aa2d0-d368-412c-a3f7-b5968b1fbcee',
        ],
        price: 69,
        hrefLink: `/pezprovods-earpods`,
        categories: 'gifts'
    }, {
        name: 'Эпилятор Yes Finishing Touch ',
        subDescr: '+ Женский триммер для лица Flawless',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/depilator1.jpg?alt=media&token=fcf0047a-0336-4f54-8a1e-4598e56ef6fc',
        description: `
        Finishing Touch заменяет все средства для удаления волос. Через несколько процедур вы заметите, что волоски стали тоньше и реже. К старым средствам возвращаться не захочется!

Волосы удаляются бережно и без боли, поэтому эпилятор подходит для всех зон и даже самой чувствительной кожи.

Вместе с Finishing Touch вы скажете “да” открытой одежде и забудете о вросших волосках, красных точках, раздражениях и боли от эпиляции!
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/depilator4.jpg?alt=media&token=cafb4377-9be7-4dba-8773-2536a9f4e79b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/depilator1.jpg?alt=media&token=fcf0047a-0336-4f54-8a1e-4598e56ef6fc',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/depilator2.jpg?alt=media&token=7cd5e8d0-95e1-489d-8bbf-76f695646bf9',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/depilator4.jpg?alt=media&token=cafb4377-9be7-4dba-8773-2536a9f4e79b',
        ],
        price: 39,
        hrefLink: `/epilator`,
        categories: 'life'
    },
    {
        name: 'Мощный бытовой ваакуматор FRESHPACK PRO ',
        subDescr: 'За пару минут можно упаковать в пакет с минимальным содержанием воздуха абсолютно все от продуктов до документов!',
        image: 'https://freshpack-pro.luuk.by/site/vacskitpais/files/7.jpg',
        description: `
        Продлите срок хранения, поместив продукты в безвоздушное пространство. Они перестанут окисляться, а живущие в них бактерии погибнут без кислорода.

        Препятствует распространению запаха таких продуктов, как рыба, травы, пряности и другие.

        Позволяет мариновать продукты за короткое время. Продукт упакованный в пакет можно замораживать, разогревать в СВЧ. Пакет возможно использовать несколько раз.
     `,
        galImage: [
            'https://freshpack-pro.luuk.by/site/vacskitpais/files/about__image24cace.jpg',
            'https://freshpack-pro.luuk.by/site/vacskitpais/files/7.jpg',
            'https://freshpack-pro.luuk.by/site/vacskitpais/files/offer__image83215.jpg',
            'https://freshpack-pro.luuk.by/site/vacskitpais/files/about__image24cace.jpg',
        ],
        price: 59,
        hrefLink: `/vaakumator`,
        categories: 'home'
    },
    {
        name: 'Держатель Smart Sensor R1 ',
        subDescr: 'ИНТЕЛЛЕКТУАЛЬНАЯ, БЕСПРОВОДНАЯ ЗАРЯДКА НОВОГО ПОКОЛЕНИЯ',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/derjatel2.jpg?alt=media&token=a7065570-7769-48f6-bd85-ab53753cb71b',
        description: `
        Почему держатель Smart Sensor R1?
        На фиксаторах имеются мягкие резиновые накладки для предотвращения царапин.
         Шарнирная конструкция позволяет поворачивать держатель на 360°, 
         например для удобного просмотра навигационных карт. Беспроводная зарядка способна заряжать телефон
          даже через толстый чехол до 8 мм также по бокам имеется два светодиода: Синий - телефон заряжается, Зеленый
           - зарядился. Держатель крепится к любому дефлектору горизонтального типа.
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/derjatel3.jpg?alt=media&token=ce2cb0d4-06e0-4796-ac3c-d268eba5b73e',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/derjatel1.jpg?alt=media&token=ccbf3215-0390-4267-abec-7684963c8880',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/derjatel3.jpg?alt=media&token=ce2cb0d4-06e0-4796-ac3c-d268eba5b73e',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/derjatel2.jpg?alt=media&token=a7065570-7769-48f6-bd85-ab53753cb71b',
        ],
        price: 59,
        hrefLink: `/derjatel`,
        categories: 'auto'
    }, {
        name: 'Простыни на резинке ',
        subDescr: ' Цвета: Бирюзовый, Графитовый, Молочный, Кофейный, Марсад',
        image: 'https://sheet.luuk.by/qwert.png',
        description: `
        Нежные простыни из 100% хлопка на резинке. 
        Простыни на резинке из импортного полотна - 100% хлопка.
         Отличное сочетание низкой цены и хорошего качества. 
         Простыни на резинке представлены в разной цветовой гамме: бирюзовой, графитовой, молоко, марсала и кофе.
     `,
        galImage: [
            'https://sheet.luuk.by/gallery/marsala.png',
            'https://sheet.luuk.by/gallery/golyboi.jpg',
            'https://sheet.luuk.by/gallery/bely.jpg',
            'https://sheet.luuk.by/gallery/chorni.jpg',
        ],
        price: 19,
        hrefLink: `/prostini`,
        categories: 'home'
    },
    {
        name: 'Вытягивающая ортопедическая подушка Ostio+ ',
        subDescr: ' Здоровый сон, поддержка тонуса, работоспособность',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/ostio1.jpg?alt=media&token=a1ff4071-d77b-495f-818b-3aa7a2cb04dd',
        description: `
        Вытягивающая ортопедическая подушка 
Помогает решить проблему при шейном остеохондрозе. Улучшает кровообращение шейного отдела и отделов головного мозга. Забудьте о боли в шее и симптомах остеохондроза! Это приводит к огромному перенапряжению в шейно-воротниковой зоне и часто вызывает дискомфорт и боли в плечах, шее. Более того, может стать причиной частых головных болей разной интенсивности, сонливости, раздраженности, чувству усталости и даже изменениям кровяного давления. 
Настоящим спасением для Вас станет надувная ортопедическая подушка для шеи ― Tractors for cervical spine. Это специальное приспособление представляет собой протектор для шеи в виде пневматических надувных колец, которое разработано для эффективной борьбы с неприятными болевыми ощущениями и симптоматическими проявлениями, связанными с застоями в  шейном отделе позвоночника и шейно-плечевого пояса. Так же подходит для лечения и профилактики шейного остеохондроза. 
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/ostio2.jpg?alt=media&token=b6806446-1315-4a1e-9e31-6cddb53a10af',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/ostio1.jpg?alt=media&token=a1ff4071-d77b-495f-818b-3aa7a2cb04dd',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/ostio2.jpg?alt=media&token=b6806446-1315-4a1e-9e31-6cddb53a10af',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/ostio3.jpg?alt=media&token=da7088ac-9370-44a7-803a-e00b5f55bae5',
        ],
        price: 29,
        hrefLink: `/ostio`,
        categories: 'life'
    }, {
        name: 'Колготки Elaslim Нервущиеся капроновые ',
        subDescr: ' Колготки, которые никогда не порвутся!',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/elaslim2.jpg?alt=media&token=7e6b6a6f-02ee-400b-8a4d-b25074a744a2',
        description: `
        Колготки изготовлены из высокопрочного материала - Армированной нити. Это существенно отличает их от обычнох колготок. Производители добавили эластомерную нить, которую переплели нейлоновым тандемом в особом плетении. Именно это обеспечило колготках высокую прочность и увеличило срок их носки 
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/elaslim1.jpg?alt=media&token=03b2fb49-da1a-48ed-93e4-6122e2c6fe73',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/elaslim1.jpg?alt=media&token=03b2fb49-da1a-48ed-93e4-6122e2c6fe73',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/elaslim2.jpg?alt=media&token=7e6b6a6f-02ee-400b-8a4d-b25074a744a2',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/elaslim3.jpg?alt=media&token=7ed162df-d5a7-4134-802a-c4fe43a6aab7',
        ],
        price: 19,
        hrefLink: `/ostio`,
        categories: 'life'
    },
    {
        name: 'Футболка с ярким принтом белорусской символики! ',
        subDescr: ' Колготки, которые никогда не порвутся!',
        image: 'http://new-niebo.luuk.by/maiki/pogonya_v.png',
        description: `
        Белая футболка с ярким принтом из 100% хлопка с круглым вырезом и боковыми швами. Прямой крой мужских футболок и до талии у женских.
       100% хлопок,  
Круглый вырез,
Яркий несмываемый принт,
Стирка при температуре 30°C или ручная стирка,
Рисунок проглаживается через ткань 
или с обратной стороны
Все футболки имеют стандартный крой,
рукава не укорочены и лежат на середине плеча,
Футболки имеют белый цвет, чтобы
не перебивать собственным оттенком рисунок.
     `,
        galImage: [
            'http://new-niebo.luuk.by/maiki/aist.png',
            'http://new-niebo.luuk.by/maiki/aist.png',
            'http://new-niebo.luuk.by/maiki/pogonya_v.png',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bchb.png?alt=media&token=ccc80008-4b4d-41aa-b30e-2b982522fec4',
        ],
        price: 29,
        hrefLink: `/maiki-bhb`,
        categories: 'gifts'
    },
    {
        name: 'Smoothie Maker ',
        subDescr: ' ПОРТАТИВНЫЙ USB СМУЗИ БЛЕНДЕР-ШЕЙКЕР',
        image: 'http://smoothie-maker.luuk.by/index_files/wsp9q9bz.jpg',
        description: `
        Smoothie Maker – это устройство для приготовления смузи из фруктов, овощей, ягод и других ингредиентов. Теперь не надо иметь стационарный большой блендер или миксер. В любом месте, на работе, в спортивном зале, в машине, на отдыхе, на пикнике, во время прогулки у вас есть возможность приготовить здоровый и вкусный смузи и вкусный коктейль. Осталось заполнить ингредиентами стакан и нажать кнопку. Буквально в течении одной минуты вкуснейший напиток готов.

        Высококачественное лезвие из нержавеющей стали позволит приготовить любимый напиток за 40 секунд и взять его с собой, а мытье шейкера не доставит трудностей из-за небольшого количества деталей
     `,
        galImage: [
            'http://smoothie-maker.luuk.by/index_files/d8_rys00.gif',
            'http://smoothie-maker.luuk.by/index_files/stx_2-76.jpg',
            'http://smoothie-maker.luuk.by/index_files/wsp9q9bz.jpg',
            'http://smoothie-maker.luuk.by/index_files/d8_rys00.gif',
        ],
        price: 29,
        hrefLink: `/smoothie-maker`,
        categories: 'home'
    },
    {
        name: 'Портативный тренажер для отжиманий ',
        subDescr: ' Портативный. Удобно брать с собой и заниматься, где угодно',
        image: 'https://muscle-builder.luuk.by/img/gym1.png',
        description: `
        При отжиманиях даже небольшое изменение положения руки вызывает совершенно другую нагрузку на целевую мышцу. Отныне вы можете использовать эти техники для тренировок, не думая об этом!

Просто поместите ручки в нужное положение и получите руки, грудь, плечи и спину, о которых вы всегда мечтали.
     `,
        galImage: [
            'https://muscle-builder.luuk.by/img/gym1.png',
            'https://muscle-builder.luuk.by/img/gym1.png',
            'https://muscle-builder.luuk.by/img/gym2.png',
            'https://muscle-builder.luuk.by/img/gym4.png',
        ],
        price: 39,
        hrefLink: `/portativ-trenajer`,
        categories: 'sport'
    },
    {
        name: 'Терапевтический массажный пистолет ',
        subDescr: 'С помощью массажера улучшается состояние не только кожи, но и мышц, а также мягких тканей;',
        image: 'http://massager.luuk.by/h-7a-ud-.jpg',
        description: `
        Ручные массажеры, они же так называемые пистолеты, представляют собой уникальный девайс, 
        которым пользуются не только спортсмены, но и те, кто активно следит за здоровьем и хочет развивать свои мышцы.
         Так, подобный ручной массажер оказывает точечное воздействие на проблемные зоны, устраняет боль в мышцах,
          что особенно актуально после силовых тренировок, а также для людей, которые предпочитают кроссфит и воркаут.
           Воздействие массажера на мышечные фасции сопоставимо с действием устройства ударно-волновой терапии.
            Снимает боль и усталость в мышцах после работы, тренировки или проведенного за компьютером времени.
     `,
        galImage: [
            'http://massager.luuk.by/h-7a-ud-.jpg',
            'http://massager.luuk.by/9hzee0d7.gif',
            'http://massager.luuk.by/h-7a-ud-.jpg',
            'http://massager.luuk.by/cj0lozo9.gif',
        ],
        price: 119,
        hrefLink: `/terapevticheski-masajer`,
        categories: 'life'
    },
    {
        name: 'GARDEN TRIMMER ',
        subDescr: 'Компактный триммер для сада',
        image: 'http://garden.luuk.by/img/garden3.png',
        description: `
        Garden Trimmer - это компактная ручная газонокосилка,
         которую можно использовать в качестве ручного или телескопического триммера. 
         Его преимущество в том, что он даст вам возможность скашивать растительность в неудобных и
          труднодоступных местах, таких как: забор, бордюр, область вокруг деревьев и т. д. С триммером для травы 
          Garden Trimmer Вы легко сделаете свой участок более презентабельным и красивым! .
     `,
        galImage: [
            'http://garden.luuk.by/img/garden1.jpg',
            'http://garden.luuk.by/img/garden1.jpg',
            'http://garden.luuk.by/img/garden5.jpg',
            'http://garden.luuk.by/img/garden4.jpg',
        ],
        price: 39,
        hrefLink: `/garden-trimmer`,
        categories: 'home'
    },
    {
        name: 'Спиральная плойка  + подарки!',
        subDescr: '+ 6 помад,   тушь, карандаш в подарок',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/72600633_images_11374100946.jpg?alt=media&token=e9e50f1d-40d2-4885-b114-4314a16bc315',
        description: `
        Garden Trimmer - это компактная ручная газонокосилка,
         которую можно использовать в качестве ручного или телескопического триммера. 
         Его преимущество в том, что он даст вам возможность скашивать растительность в неудобных и
          труднодоступных местах, таких как: забор, бордюр, область вокруг деревьев и т. д. С триммером для травы 
          Garden Trimmer Вы легко сделаете свой участок более презентабельным и красивым! .
     `,
        galImage: [
            'https://spiral-curling-iron.luuk.by/index_files/15800654_719.jpg',
            'https://spiral-curling-iron.luuk.by/index_files/15800654_719.jpg',
            'https://spiral-curling-iron.luuk.by/index_files/15783424_741.jpg',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/72600633_images_11374100946.jpg?alt=media&token=e9e50f1d-40d2-4885-b114-4314a16bc315',
        ],
        price: 39,
        hrefLink: `/spiral-ploika`,
        categories: 'life'
    },
    {
        name: ' Рюкзак антивор + подарок!',
        subDescr: 'ПРИ ЗАКАЗЕ POWER BANK НА 30.000 MAH В ПОДАРОК',
        image: 'http://bobby.luuk.by/80.jpg',
        description: `
        Рюкзак подойдет для посещения учебы или работы. Выполнен из прочных тканей, поэтому его сложней порвать или порезать. Эргономичная форма рюкзака позволяет равномерно распределять нагрузку на позвоночник и поясницу, а также обеспечивает отличную циркуляцию воздуха - спина не будет болеть и всегда будет сухой даже в жару. Регулируемые плечевые ремни дополнительным уплотнением позволяют не перетягивать плечи даже при долгом ношении рюкзака. Верхний карман с резинками для ручек или ключей. Скрытый карман на спинке.
        Скрытые боковые карманы.
     `,
        galImage: [
            'http://bobby.luuk.by/104.jpg',
            'http://bobby.luuk.by/banka.jpg',
            'http://bobby.luuk.by/106.jpg',
            'http://bobby.luuk.by/102.jpg',
        ],
        price: 59,
        hrefLink: `/rukzar-anti`,
        categories: 'acsses'
    },
    {
        name: ' Система хранения для одежды',
        subDescr: 'НAВЕДИ ПOРЯДOК !',
        image: 'https://t-shirt.luuk.by/1tkf09vy.jpg',
        description: `
        Системa хрaнения oдежды T-SHIRT ORGANIZING SYSTEM незaменимa для пoддержaния идеaльнoгo пoрядкa в шкaфу или гaрдерoбнoй. Вaши вещи сoхрaнят презентaбельный вид и не пoмнутся. Тaкже T-SHIRT ORGANIZING SYSTEM пригoдится в дaльних пoездкaх и кoмaндирoвкaх, тaк кaк экoнoмит дoстaтoчнo бoльшoе прoстрaнствo. Системa хрaнения изгoтoвленa из прoчнoгo плaстикa, имеет уникaльный дизaйн. Вaм неoбхoдимo aккурaтнo слoжить вещи и прoлoжить кaждую друг нa другa между листaми oргaнaйзерa, в результaте пoлучится aккурaтнaя стoпкa. Оргaнaйзер пoдхoдит для любoй oдежды из сaмoгo рaзнooбрaзнoгo мaтериaлa.
     `,
        galImage: [
            'https://t-shirt.luuk.by/8vyz2je2.jpg',
            'https://t-shirt.luuk.by/j2zrch9o.jpg',
            'https://t-shirt.luuk.by/1tkf09vy.jpg',
            'https://t-shirt.luuk.by/506qy8i3.jpg',
        ],
        price: 29,
        hrefLink: `/organaizer-for`,
        categories: 'life'
    },
    {
        name: 'Набор для детского творчества + подарок',
        subDescr: ' + Подарок "Рисуй светом"',
        image: 'http://artists-set.minskstore.of.by/-z0q99t9.jpg',
        description: `
        Набор для детского творчества изготовлен в виде чемоданчика и компактно складывается для хранения и транспортировки.

        Ребенок сможет рисовать все, что только пожелает, разнообразие цветов позволит ему создавать любые картины. В набор входят: карандаши, фломастеры, краски, восковые мелки и многое другое.
     `,
        galImage: [
            'http://artists-set.minskstore.of.by/files/s2_img2.jpg',
            'http://artists-set.minskstore.of.by/-z0q99t9.jpg',
            'http://artists-set.minskstore.of.by/files/s4_img.png',
            'http://artists-set.minskstore.of.by/pod.jpg',
        ],
        price: 59,
        hrefLink: `/child-tvorchestvo`,
        categories: 'child'
    },
    {
        name: 'Маска для волос Princess Hair',
        subDescr: 'МАСКА PRINCESS HAIR УСКОРЯЕТ РОСТ ВОЛОС, ДЕЛАЕТ ГУЩЕ И ПРЕДОТВРАЩАЕТ ИХ ВЫПАДЕНИЕ',
        image: 'http://onlinebel.of.by/dis3/img/product2.png',
        description: `
        Особая формула маски с натуральными природными ингредиентами стимулирует рост волос, укрепляет волосы от корней до кончиков и предотвращает появление седины!

        Входящие в состав витамины и минералы блокируют избыток гормона дигидротестостерон, влияющий на потерю волос. Препятствует выпадению и способствует росту волос,  Пробуждает «спящие» волосяные луковицы, устраняет сухость и ломкость, Предотвращает поседение волос, укрепляет структуру волос, Восстанавливает повреждённую структуру волос, смягчает и увлажняет волосы, Улучшает циркуляцию крови, что препятствует выпадению волос.
     `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/maska1.jpg?alt=media&token=c2cd8567-7bcd-4e7f-9a87-be314f2e5ffe',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/maska1.jpg?alt=media&token=c2cd8567-7bcd-4e7f-9a87-be314f2e5ffe',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/maska2voloc.jpg?alt=media&token=037944f8-8111-44f6-bd15-4556f187e749',
            'http://onlinebel.of.by/dis3/img/product2.png',
        ],
        price: 29,
        hrefLink: `/maska-dlya-volos`,
        categories: 'life'
    },
    {
        name: 'Автоматический тонометр на запястье',
        subDescr: 'Компактный размер позволяет носить его с собой и использовать в любом месте',
        image: 'http://tonometr.storeonline.of.by/newfon.png',
        description: `
        Удобная эргономичная манжета обеспечивает правильное, удобное расположение прибора и комфорт при измерении. Простое управление одной кнопкой. Диапазон измерения давления, 0 - 280 мм рт. Ст.,  Диапазон измерения сердечного ритма, 40 - 199 ударов / мин., Точность: давление ± 3 мм рт.ст., сердечный ритм ± 5%,Image
        Размер окружности запястья между 135 до 195 мм, Работает от 2 * AAA-батареек
     `,
        galImage: [
            'http://tonometr.storeonline.of.by/gal_od/5.png',
            'http://tonometr.storeonline.of.by/gal_od/3.jpg',
            'http://tonometr.storeonline.of.by/gal_od/1.jpg',
            'http://tonometr.storeonline.of.by/newfon.png',
        ],
        price: 59,
        hrefLink: `/tonometr-na-zapyaste`,
        categories: 'life'
    },
    {
        name: 'Гоночная машинка-перевертыш',
        subDescr: 'Управляется с помощью жестов рук',
        image: 'https://shifter-car.luuk.by/images/s2_img.jpg',
        description: `
        Дрифтующая машинка-перевертыш - это настоящий монстр, способный двигаться во все стороны и трансформироваться на ходу. Машинка подходит для игры, как на улице, так и дома. На улице у нее больше вариантов показывать преодоление препятствий любой сложности и совершать эффектные трюки. Прочная и быстрая - эта машинка не боится переворотов - перевернувшись, спокойно поедет дальше. Управляется движениями руки
        Два вида управления машинкой: классический пульт-джойстик и инновационный браслет на руку. Такой способ управления вызывает большую заинтересованность не только у детей, но и у взрослых.
     `,
        galImage: [
            'https://shifter-car.luuk.by/images/s2_img.jpg',
            'https://shifter-car.luuk.by/images/gif_header.gif',
            'https://shifter-car.luuk.by/images/img_set.jpg',
            'https://shifter-car.luuk.by/images/s2_img.jpg',
        ],
        price: 99,
        hrefLink: `/mashinka-perevertish`,
        categories: 'child'
    },
    {
        name: 'Furby - интерактивный питомец',
        subDescr: 'НЕОБЫКНОВЕННАЯ ИГРУШКА, КОТОРАЯ УМЕЕТ ТАНЦЕВАТЬ, ПЕТЬ И РАЗГОВАРИВАТЬ!',
        image: 'https://furby.luuk.by/images/catalog__series1__product1_image.jpg',
        description: `
        По популярности в мире Ферби просто нет равных. Впервые игрушка была представлена в Америке, на Рождество в далеком 1998 году и уже в первый сезон стала самой популярной и продаваемой игрушкой. В течении первых лет производства, было продано более 40 миллионов штук в 57-ми странах мира.

        Каждый Ферби обладает своим индивидуальным характером, у него меняется настроение и выглядит это очень естественно. Ферби любит танцевать, петь и даже шутить, а 6 датчиков – на макушке, на животе, во рту, на спине, в хвосте и шестой это датчик уровня наклона, позволяют Ферби реагировать на действия. Благодаря LED-дисплеям, Ферби Бум обладает красивой анимацией глаз. Ферби совсем как живой и к тому же совершенно неназойлив. Если вам в данный момент не до него, он самостоятельно заснет и будет ждать, когда обратят на него внимание и захотят с ним поиграть.
     `,
        galImage: [
            'https://furby.luuk.by/images/catalog__series1__product2_image.jpg',
            'https://furby.luuk.by/images/catalog__series1__product3_image.jpg',
            'https://furby.luuk.by/images/catalog__series1__product4_image.jpg',
            'https://furby.luuk.by/images/catalog__series1__product5_image.jpg',
        ],
        price: 99,
        hrefLink: `/furby`,
        categories: 'child'
    },

    {
        name: 'BAELLERRY BUSINESS + подарок',
        subDescr: 'аксессуар  успешного мужчины + часы в подарок',
        image: 'https://storeminsk.of.by/hhgdyk9sw0mtex6hcb3w.jpg ',
        description: `
        23 банковских или дисконтных карт,  Все карти всегда на своем месте. Более 100 купюр различного номинала и размера. В портмоне с легкостью поместиться телефон, С легкостью помещаются плоские ключи.
     `,
        galImage: [
            'https://storeminsk.of.by/hhgdyk9sw0mtex6hcb3w.jpg',
            'https://storeminsk.of.by/hhgdyk9sw0mtex6hcb3w.jpg',
            'https://storeminsk.of.by/pic/1.jpg',
            'https://storeminsk.of.by/pic/3.jpg',
        ],
        price: 39,
        hrefLink: `/ballery-bissnes`,
        categories: 'acsses'
    },
    {
        name: 'ЗАМШЕВОЕ ПОРТМОНЕ BAELLERY',
        subDescr: 'Baellery Forever имеет 4 отделения, разделенных на разные категории',
        image: 'https://suede-clutch.luuk.by/img/3.jpg ',
        description: `
        Главная особенность - невероятные возможности организации, которые можно достичь с помощью этого портмоне, идеально подходящего для успешных бизнесменов, которым всегда нужно носить с собой различные предметы при этом  получая максимальный порядок. Это полезно для хранения таких объектов, как мобильные телефоны, ключи, ручки, USB-ключи, пластиковые карты, наличные и визитки. Кошелек изготовлен из замши очень высокого качества и эстетически очень красив.
     `,
        galImage: [
            'https://suede-clutch.luuk.by/img/3.jpg',
            'https://suede-clutch.luuk.by/img/3.jpg',
            'https://suede-clutch.luuk.by/img/tov-27.jpg',
            'https://suede-clutch.luuk.by/img/tov-28.jpg',
        ],
        price: 29,
        hrefLink: `/ballery-girl`,
        categories: 'acsses'
    },
    , {
        name: 'Сушилка для посуды',
        subDescr: 'И ПОДВЕСНАЯ СУМКА ДЛЯ ХРАНЕНИЯ ВЕЩЕЙ',
        image: 'http://dryer.shoponline.of.by/site/sushilkaplate/offer3__image5bede.jpg ',
        description: `
        Сушилка вмещает большой объем посуды, позволяет быстро высушить большое количество тарелок, не занимая много места. Конструкция сушилки очень функциональная, обеспечивает легкость и простоту в чистке, удобство в использовании.
        Конструктивно предусмотрена возможность установить любые столовые принадлежности. В сушилке есть места для тарелок, чашек, бокалов, вилок и других предметов. Вода стекает в пластиковый поддон, который очень легко вынуть, чтобы слить воду.
        Отделение для салатников, чашек, ножей, и другой посуды находится на нижнем ярусе. Также сушилки оборудованы держателями для стаканов и кружек с одной стороны, и отсеком для столовых приборов с другой.
     `,
        galImage: [
            'http://dryer.shoponline.of.by/site/sushilkaplate/description__image7029c.jpg',
            'http://dryer.shoponline.of.by/site/sushilkaplate/description__image7029c3.jpg',
            'http://dryer.shoponline.of.by/site/sushilkaplate/description__image7029c.jpg',
            'http://dryer.shoponline.of.by/site/sushilkaplate/grill-photo-12342.jpg',
        ],
        price: 59,
        hrefLink: `/ballery-girl1`,
        categories: 'home'
    },
    {
        name: 'ПРОЕКЦИОННЫЙ 3D НОЧНИК',
        subDescr: 'ЗАКАЖИ СЕЙЧАС И ПОЛУЧИ УДОВОЛЬСТВИЕ ОТ СНА',
        image: 'https://shop-online.of.by/fon.png',
        description: `
        3d светильник проекционный (ночник) будет прекрасным украшением комнаты. На плоской вставке расположены светодиоды, при включении они подсвечивают акриловую пластину и меняют ее цвет. На вставку нанесено изображение. Светодиоды стыкуются с рисунком таким образом, чтобы при включении подсветки создавать эффект трехмерного изображения. 
        Его конструкция восхитительно проста и функциональна.
     `,
        galImage: [
            'https://shop-online.of.by/gal_od/3.gif.png',
            'https://shop-online.of.by/gal_od/5.png',
            'https://shop-online.of.by/gal_od/3.gif.png',
            'https://shop-online.of.by/gal_od/4.jpg.png',
        ],
        price: 29,
        hrefLink: `/three-d-svetilnik`,
        categories: 'gifts'
    },
    {
        name: 'SMART IP-KAMEPA',
        subDescr: 'Для квартиры, для дачи, для бизнеса',
        image: 'https://ip-camera.luuk.by/images/camera.png',
        description: `
        Камера имеет высокочувствительный датчик движения, что обеспечивает ей возможность выполнять охранные функции реагируя на движения обьектов,  Камера сама отправит вам push - сообщение на телефон если зафиксирует какой-либо звук или движение в кадре. Мощная инфракрасная LED подсветка обеспечит отличное качество изображения в радиусе до 10 метров даже при полном отсутствии света. Камера легко управляется простыми касаниями дисплея вашего телефона. Все возможности камеры в удобном приложении `,
        galImage: [
            'https://ip-camera.luuk.by/images/camera.png',
            'https://ip-camera.luuk.by/images/size.png',
            'https://ip-camera.luuk.by/images/HTB1f7N1opzqK1RjSZSgq6ApAVXaT.jpg',
            'https://ip-camera.luuk.by/images/qwe.jpg',
        ],
        price: 89,
        hrefLink: `/apikameraelectric`,
        categories: 'electric'
    },
    {
        name: 'VCLEANSPOT - чистящее средство',
        subDescr: 'ОЧИСТИТ ЛЮБУЮ ПОВЕРХНОСТЬ',
        image: 'https://clean-spot.luuk.by/img/tov-1.png',
        description: `
        Больше не нужно закупать большое количество моющих средств для разных целей – 1 таблетка на всё. Глубоко проникает во все трещинки и эффективно очищает без повреждения поверхности. Органический состав не вредит коже. VCleanSpot – идеальный помощник в доме и настоящая палочка-выручалочка для каждой хозяйки.

        Уникальное средство очистит любые поверхности от въевшейся грязи, подарит красивый блеск, обработанные изделия будут выглядеть после обработки как новые!`,
        galImage: [
            'https://clean-spot.luuk.by/img/tov-1.png',
            'https://clean-spot.luuk.by/img/tov-1.png',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/vlcean.jpeg?alt=media&token=5f8f0a2d-e327-4025-b472-1e3e155a7bff',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/vlcean.png?alt=media&token=d987a006-cd4d-4114-a016-068c00d0d13a',
        ],
        price: 25,
        hrefLink: `/api-kamera`,
        categories: 'electric'
    },
    {
        name: 'Портативный нагреватель Handy Heater',
        subDescr: 'НЕВЕРОЯТНО МОЩНЫЙ,  ЭКОНОМИЧНЫЙ, НАДЕЖНЫЙ',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/heardet1.jpg?alt=media&token=02ac7b1b-6859-47df-913b-28c5aa81f98b',
        description: `
        Портативный обогреватель Handy Heater - это комнатный прибор, который подключается прямо к стенной розетке, не занимая свободного места. Несмотря на компактный размер, обогреватель отличается огромной мощностью и способен превратить холодную комнату в теплую и уютную. Пользоваться им очень просто: достаточно просто воткнуть в розетку и отрегулировать термостат до нужной температуры. Всего несколько минут - и холода как не бывало!`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/heardet1.jpg?alt=media&token=02ac7b1b-6859-47df-913b-28c5aa81f98b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/heardet1.jpg?alt=media&token=02ac7b1b-6859-47df-913b-28c5aa81f98b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/heardet2.jpg?alt=media&token=370cd854-a7af-41c7-81bc-ea6893c84482',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/heardet3.jpg?alt=media&token=f3a3dd9e-20be-4a47-8c48-b0ae7ef89e83',
        ],
        price: 59,
        hrefLink: `/handy-heater`,
        categories: 'home'
    },
    {
        name: 'Портативный нагреватель Dancing  Flame',
        subDescr: 'С ЛЕГКОСТЬЮ РЕШИТ ВАШИ  ПРОБЛЕМЫ С ХОЛОДОМ!',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dansingflame3.jpg?alt=media&token=0b7f089c-48fb-4522-bb26-093f922afdf1',
        description: `
        Портативный обогреватель Dancing Flame - это комнатный прибор, который подключается прямо к стенной розетке, не занимая свободного места. Несмотря на компактный размер, обогреватель отличается огромной мощностью и способен превратить холодную комнату в теплую и уютную. Пользоваться им очень просто: достаточно просто воткнуть в розетку и отрегулировать термостат до нужной температуры. Всего несколько минут - и холода как не бывало! Устройство воспроизводит эффект горения костра!`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dansingflame1.jpg?alt=media&token=b7995ac3-54cd-4f04-a3ae-989cc0de09d7',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dansingflame1.jpg?alt=media&token=b7995ac3-54cd-4f04-a3ae-989cc0de09d7',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dansingflame3.jpg?alt=media&token=0b7f089c-48fb-4522-bb26-093f922afdf1',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/dansingflame.jpg?alt=media&token=44ee6c30-aadf-494c-8f06-e2b285e083bb',
        ],
        price: 59,
        hrefLink: `/dancing-flame`,
        categories: 'home'
    },
    {
        name: 'Универсальные авточехлы для авто',
        subDescr: 'ЗАКАЖИ СЕЙЧАС И ПОЛУЧИ УДОВОЛЬСТВИЕ ОТ ВОЖДЕНИЯ!',
        image: 'http://car-cover.storeonline.of.by/gal_od/2.gif',
        description: `
        Высококачественный чехол для автокресла, упругий, предлагать универсальную пригодность. Эластичная боковая ткань и регулируемые ремни.Защита и украшение. Обновите свои состаренные сиденья. Совместимость со всеми типами сидений.`,
        galImage: [
            'http://car-cover.storeonline.of.by/fon.png',
            'http://car-cover.storeonline.of.by/gal_od/3.gif',
            'http://car-cover.storeonline.of.by/gal_od/5.png',
            'http://car-cover.storeonline.of.by/gal_od/2.gif',
        ],
        price: 99,
        hrefLink: `/auto-chehli`,
        categories: 'auto'
    },
    {
        name: 'Набор кастрюль unique + подарок',
        subDescr: 'В подарок набор ножей',
        image: 'https://shopbel.of.by/3.png',
        description: `
        Нержавеющая сталь премиум-класса - подходит для использования на газовых /электрических /стеклокерамических и индукционных плитах.
        Быстрая и качественная мойка - набор предназначен для мытья в посудомоечной машине.
        Прочное дно - кастрюли имеют утолщенное двойное дно.
        Быстрый нагрев - быстрй нагрев и равномерное распределение тепла.
        `,
        galImage: [
            'https://shopbel.of.by/img/pict.png',
            'https://shopbel.of.by/img/pict.png',
            'https://shopbel.of.by/3.png',
            'https://shopbel.of.by/img/knifes_images/gal2_3.jpg',
        ],
        price: 89,
        hrefLink: `/nabor-kastrul`,
        categories: 'home'
    },
    {
        name: 'ЗЕРКАЛО С КАМЕРОЙ ЗАДНЕГО ВИДА',
        subDescr: 'ПОМОЩНИК ПРИ ПАРКОВКЕ ЗАДНИМ ХОДОМ',
        image: 'https://thumb.tildacdn.com/tild6530-3033-4338-a435-366662336366/-/resize/540x/-/format/webp/0444-aceeee7c5183931.png',
        description: `
        Зеркало видеорегистратор с камерой заднего вида.
        Видеорегистратор представляет собой зеркало заднего вида, легко монтируемое специальными креплениями на штатное зеркало любого автомобиля. К нему подключается видеокамера заднего вида (входит в комплект), обе камеры могут работать одновременно.
        Видеозапись с видеорегистратора дает возможность оценить всю обстановку на дороге вокруг автомобиля, различить номерные знаки ближайших автомобилей. Признается доказательством в суде и других госорганах.
        `,
        galImage: [
            'https://static.tildacdn.com/tild6436-3934-4966-a138-643538613561/b48a110c666da0ec0e12.png',
            'https://static.tildacdn.com/tild6436-3934-4966-a138-643538613561/b48a110c666da0ec0e12.png',
            'https://static.tildacdn.com/tild3431-3433-4732-b265-643132363765/Cat_463983_2154-min.png',
            'https://static.tildacdn.com/tild6565-6662-4338-b432-306131363061/scale_1200-min.png',
        ],
        price: 69,
        hrefLink: `/zerkalo-zadnego-vida`,
        categories: 'auto'
    },
    {
        name: 'NEW MAGIC BRA',
        subDescr: 'КОМФОРТ, УДОБСТВО И КOPPЕКЦИЯ ФИГУPЫ!',
        image: 'http://magic-bra.shop-online.of.by/bra/img/pic-sl-5.jpg',
        description: `
        Воздухопроницаемая и впитывающая влагу ткань. При этом уменьшает потливость. Легко носить и снимать, сохраняя комфорт при выполнении упражнений высокой интенсивности. Регулируемый кружевной ремешок с перекрещенными полосками для устойчивости и пуш-ап эффекта.
        `,
        galImage: [
            'http://magic-bra.shop-online.of.by/bra/img/benefits__image2.jpg',
            'http://magic-bra.shop-online.of.by/bra/img/benefits__image2.jpg',
            'http://magic-bra.shop-online.of.by/bra/img/pic-sl-5.jpg',
            'http://magic-bra.shop-online.of.by/bra/img/benefits__image1.jpg',
        ],
        price: 25,
        hrefLink: `/new-bra-magic`,
        categories: 'life'
    },
    {
        name: 'ЭЛЕКТРО-КОФЕВАРКА SOKANY',
        subDescr: 'Можете брать кофеварку с собой в поездки и путешествия, дома и на работе!!',
        image: 'https://coffee-maker.luuk.by/coffee.jpg',
        description: `
        Истинный ценитель кофе разбирается в его сортах, чувствуете разницу в ароматах и насыщенности вкуса. Перед вами современный аналог классической турки, работающей от электрической сети. Вкус и аромат такой же, как и у кофе приготовленного на плите!

        Чтобы сварить ароматный напиток, вам достаточно насыпать молотого кофе, залить его водой и включить электрическую турку в сеть.
        `,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/electrocofevarka.jpg?alt=media&token=fd8c28ec-61a0-4aba-b236-8e2d5fd89d54',
            'https://coffee-maker.luuk.by/coffee.jpg',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/electrocofevarka.jpg?alt=media&token=f0f2e07e-86c5-4be9-b74a-b298b2ea42ac',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/electrocofevarka1.jpg?alt=media&token=bcea4d28-e68a-4213-a719-1685634e97d8',
        ],
        price: 59,
        hrefLink: `/cofewarka`,
        categories: 'gifts'
    },
    {
        name: 'УСОВЕРШЕНСТВОВАННАЯ РЫБОЛОВНАЯ ВЕРША-ПАУК',
        subDescr: 'ПОЙМАЙТЕ В 3-4 РАЗА БОЛЬШЕ РЫБЫ!',
        image: 'http://versa-spider.onlineshop.of.by/assets_page/df7c9943565ab413996d68d5058689292175faa3/images/offer_top__info_bg.jpg',
        description: `
        Привыкли ловить рыбу на удочку? Попробуйте не менее эффективный способ ловли на самоловку-вершу. В отличие от устаревших приспособлений из металлических прутьев или ивовых веток, современная верша изготавливается из современной многожильной нити, что позволяет ее удобно перевозить и хранить.

        Кроме того, усовершенствованная рыболовная верша имеет множество входов для рыбы, что намного повышает эффективность ловли.
        
        Преимуществом данного способа является то, что рыба ловится сама – вам достаточно лишь опустить вершу под воду и раз в несколько часов вынимать из ловушки рыбу!
        `,
        galImage: [
            'http://versa-spider.onlineshop.of.by/assets_page/df7c9943565ab413996d68d5058689292175faa3/images/media/1/1.jpg',
            'http://versa-spider.onlineshop.of.by/assets_page/df7c9943565ab413996d68d5058689292175faa3/images/media/1/2.jpg',
            'http://versa-spider.onlineshop.of.by/assets_page/df7c9943565ab413996d68d5058689292175faa3/images/media/1/3.jpg',
            'http://versa-spider.onlineshop.of.by/assets_page/df7c9943565ab413996d68d5058689292175faa3/images/media/1/1.jpg',
        ],
        price: 39,
        hrefLink: `/forfish`,
        categories: 'gifts'
    },
    {
        name: 'ROBOKIT 11 В 1',
        subDescr: 'КОНСТРУКТОР НА СОЛНЕЧНЫХ БАТАРЕЯХ',
        image: 'https://solar.luuk.by/images/types__image5.jpg',
        description: `
        RoboKit 11 в 1 – необыкновеннный конструктор, из которого ребенок сможет собрать 11 разных роботов.

        Роботы будут ходить, ползать, тащить сами себя за счет двигателя, работающего от солнечных панелей, и дополнительного гидравлического насоса.
        
        Чтобы собрать все 11 возможных моделей роботов, ребенок может с пользой и интересом потратить несколько месяцев!
        `,
        galImage: [
            'https://solar.luuk.by/images/types__image5.jpg',
            'https://solar.luuk.by/images/types__image5.jpg',
            'https://solar.luuk.by/images/types__image10.jpg',
            'https://solar.luuk.by/images/types__image11.jpg',
        ],
        price: 39,
        hrefLink: `/constructor-battery-sun`,
        categories: 'child'
    },
    {
        name: 'Smart Life Thermos',
        subDescr: 'ВАКУУМНЫЙ ТЕРМОС',
        image: 'https://smart-thermos.luuk.by/fon.jpg',
        description: `
        Вакуумный термос life идеально подходит для напитков из-за своего материала — пищевой нержавеющей стали, которая совершенно безопасна для человека. Для большего удобства использования корпус термоса покрывается противоскользящим покрытием. Благодаря этому риск обжечься при наливании напитка сводится к минимуму.
        `,
        galImage: [
            'https://smart-thermos.luuk.by/foto.jpg',
            'https://smart-thermos.luuk.by/slider1.jpg',
            'https://smart-thermos.luuk.by/fon.jpg',
            'https://smart-thermos.luuk.by/foto1.jpg',
        ],
        price: 39,
        hrefLink: `/life-thermos`,
        categories: 'gifts'
    },
    {
        name: 'МАГНИТНЫЙ КОРРЕКТОР ОСАНКИ',
        subDescr: 'Стабилизирует нагрузку на позвоночник',
        image: 'https://spine.luuk.by/images/offer__image.jpg?v=2',
        description: `
        Забудьте, что такое боли в спине! Благодаря фиксации осанки строго в здоровом положении, а также воздействию активных магнитов. Усталость - следствие остеохондроза. Благодаря Spine, уже через неделю можно почувствовать существенное повышение вашей продуктивности на протяжении дня. Изделие равномерно распределяет нагрузку на все мышцы позвоночника, что исключает возможность искривления при лишних килограммах.
        `,
        galImage: [
            'https://spine.luuk.by/images/offer__image.jpg?v=2',
            'https://spine.luuk.by/images/offer__image.jpg?v=2',
            'https://spine.luuk.by/images/description__image.jpg',
            'https://spine.luuk.by/images/rev2.jpg',
        ],
        price: 29,
        hrefLink: `/magnitni-corrector`,
        categories: 'life'
    },
    {
        name: 'Универсальные чехлы из экокожи',
        subDescr: 'Универсальные, Высокое качество, Удобные',
        image: 'http://auto-chehol.storeonline.of.by/assets/imgFromDesigner/gl2.png',
        description: `
        Красивый внешний вид - боковые части сделаны из гладкой экокожи, центральная часть в виде ромба. Прочный, легкий, экологический материал. Универсальные - полходят под любой вид автомобиля
        `,
        galImage: [
            'http://auto-chehol.storeonline.of.by/gal_od/5.png',
            'http://auto-chehol.storeonline.of.by/gal_od/5.png',
            'http://auto-chehol.storeonline.of.by/gal_od/3.jpg',
            'http://auto-chehol.storeonline.of.by/gal_od/2.jpg',
        ],
        price: 199,
        hrefLink: `/auto-chehli-ekokoja`,
        categories: 'auto'
    },
    {
        name: 'MAGNETFIX - НОВЕЙШАЯ МАГНИТНАЯ ВАЛЬГУСНАЯ ШИНА',
        subDescr: 'Универсальные, Высокое качество, Удобные',
        image: 'https://magnet-fix.luuk.by/img/b1.jpg',
        description: `
        MagnetFix является разработкой института Фраунгофера в Германии. Созданная совместными усилиями ученых и ведущих немецких врачей ортопедов, магнитная шина MagnetFix учитывает все аспекты биомеханики стопы. лавное отличие этой шины в том, что коррекция направлена не только на выпрямление большого пальца, но и на борьбу с поперечным плоскостопием. Таким образом, MagnetFix борется не только с "косточкой", но и с причиной, вызывающей её появление.
        `,
        galImage: [
            'https://magnet-fix.luuk.by/img/photo.jpg',
            'https://magnet-fix.luuk.by/img/photo.jpg',
            'https://magnet-fix.luuk.by/img/b1.jpg',
            'https://magnet-fix.luuk.by/img/gif.gif',
        ],
        price: 25,
        hrefLink: `/magnetfix`,
        categories: 'life'
    },
    {
        name: 'СИЛИКОНОВАЯ ЩЕТКА БАННАЯ',
        subDescr: 'Для душа и мытья тела!',
        image: 'https://bath-brush.luuk.by/images/siliconovaya-shetka-bannaya-1.jpg',
        description: `
        Хорошо очищает поры, удаляет грязь, излишки кожного сала и омертвевшей кожи, делает кожу более гладкой. Ручка, имеет хорошую прочность на растяжение и может быть за неё подвешена, экономя пространство. Изготовлена из пищевого силикона, полезного для здоровья, не содержит вредных веществ. Высокая термостойкость, безопасность и долговечность.          `,
        galImage: [
            'https://bath-brush.luuk.by/images/siliconovaya-shetka-bannaya-2.jpg',
            'https://bath-brush.luuk.by/images/siliconovaya-shetka-bannaya-2.jpg',
            'https://bath-brush.luuk.by/images/siliconovaya-shetka-bannaya-4.jpg',
            'https://bath-brush.luuk.by/images/siliconovaya-shetka-bannaya-3.jpg',
        ],
        price: 25,
        hrefLink: `/siliconavya-chetka`,
        categories: 'life'
    }, {
        name: 'Ортопедическая подушка для разгрузки позвоночника',
        subDescr: 'Для душа и мытья тела!',
        image: 'https://egg-sitter.luuk.by/lul-p_u9.jpg',
        description: `
        Использование такого приспособления позволяет избежать искривления осанки и нарушения кровообращения в области спины и таза. Для водителей, длительное время проводящих за рулем, подушка снижает вибрационное воздействие на позвоночник.Моющаяся и нескользящая поверхность.никальная гиперэластичная гелеобразная полимерная конструкция обеспечивает равномерное распределение давления. Подойдет для офисного кресла, автомобиля, скамейки или местечка самолета и, конечно, для табуретки или стула.`,
        galImage: [
            'https://egg-sitter.luuk.by/bdh2roew.jpg',
            'https://egg-sitter.luuk.by/bdh2roew.jpg',
            'https://egg-sitter.luuk.by/f9lzv1av.jpg',
            'https://egg-sitter.luuk.by/z4g-fxqg.gif',
        ],
        price: 49,
        hrefLink: `/egg-siter`,
        categories: 'life'
    },
    {
        name: 'LED ЛЕНТА',
        subDescr: 'НАБОР ОСВЕЩЕНИЯ 2020 ГОДА',
        image: 'https://diode-tape.luuk.by/images/description__image.jpg',
        description: `
        LED ЛЕНТА - это лента включающая в себя 12 ярких и сочных цветов светодиодов типа “COB”. Это современное решение и замена софитам.

        Равномерное освещение по всей квартире/дому со сменой цветового режима и режима изображения. Легкая установка и еще множество плюсов включает в себя LED ЛЕНТА! LED ЛЕНТА подойдет для декорирования вашего дома. Благодаря легкости в установке с этим справится даже ребенок! `,
        galImage: [
            'https://diode-tape.luuk.by/images/description__image.jpg',
            'https://diode-tape.luuk.by/images/description__image.jpg',
            'https://diode-tape.luuk.by/images/1.jpg',
            'https://diode-tape.luuk.by/images/description2__image1.jpg',
        ],
        price: 29,
        hrefLink: `/led-lenta`,
        categories: 'gifts'
    },
    {
        name: 'РУЧНОЙ ЗАПАЙЩИК ПАКЕТОВ',
        subDescr: 'Посмотрите как это удобно!',
        image: 'https://bag-sealer.luuk.by/fon.jpg',
        description:
            `
        Забудьте о временах, когда пересыпали крупу в обычный пакет. Теперь можете без труда запаять любую смесь. Храниться она будет очень долго. А если после ухода гостей на праздничном столе осталось много блюд, то не стоит судорожно съедать их или выбрасывать. Используйте ручной запайщик пакетов для дома, чтобы сохранить свежесть и сочность любых блюд. Они не пропитаются запахами из холодильника и смогут простоять несколько дней! А если отправляетесь на несколько дней на природу, то просто обязаны положить в рюкзак запайщик, ведь он поможет не только не отравиться продуктами, которые хранятся не в прохладном месте, но и никогда не оставит голодными!  
        `,

        galImage: [
            'https://bag-sealer.luuk.by/img/large.gif',
            'https://bag-sealer.luuk.by/img/large.gif',
            'https://bag-sealer.luuk.by/img/rerere.jpg',
            'https://bag-sealer.luuk.by/img/erwew.jpg',
        ],
        price: 25,
        hrefLink: `/zapaichik-paketov`,
        categories: 'gifts'
    },
    {
        name: 'ТАКТИЧЕСКИЙ ФОНАРЬ АТОМНЫЙ ЛУЧ',
        subDescr: 'АРМЕЙСКИЕ ЧАСЫ В ПОДАРОК!',
        image: 'http://tactical-flashlight.onlineshop.of.by/_6ab6vp4.png',
        description:
            `
        Мега-яркий тактический фонарь "Атомный луч" в любых условиях осветит путь. За счет мощного светодиода его считают одним из мощнейших фонарей! Можете сами регулировать уровень освещения за счет 5 режимов свечения: мощный, средний, экономичный, стробоскоп и SOS. Усиленная конструкция сделала фонарь противоударным, а за счет алюминиевого корпуса, он имеет небольшой вес!
        `,

        galImage: [
            'http://tactical-flashlight.onlineshop.of.by/_6ab6vp4.png',
            'http://tactical-flashlight.onlineshop.of.by/_6ab6vp4.png',
            'http://tactical-flashlight.onlineshop.of.by/gdodvsk2.jpg',
            'http://tactical-flashlight.onlineshop.of.by/k9ga-4h1.jpg',
        ],
        price: 35,
        hrefLink: `/tactical-fonar-lush`,
        categories: 'gifts'
    },
    {
        name: 'РУЧНОЙ ОТПАРИВАТЕЛЬ',
        subDescr: 'Незаменимая вещь в доме',
        image: 'https://steamer.luuk.by/img/d4if5myh.jpg',
        description:
            `
Ручной отпариватель Аврора А7 подходит для любых видов тканей, даже для тех, которые нельзя гладить обычным утюгом.
Верхнюю одежду, одеяла, подушки, шторы Аврора А7 отчистит без малейших проблем. Идеальная чистка ткани от ворсинок, ниток, шерсти домашних животных и пыли.
Его также используют в качестве дезинфектора одежды, помещения, мебели, мягких игрушек!
Ручной отпариватель Аврора А7 устранит неприятные запахи, погдалит вещи и убьет вирусы в Вашем доме!
Кроме того,отпариватель быстро обновит помятый костюм, брюки, пальто, аккуратно приведет в идеальное состояние одежду из деликатных тканей; из шелка, тонкого кружева, батиста.        `,

        galImage: [
            'https://steamer.luuk.by/img/d4if5myh.jpg',
            'https://steamer.luuk.by/img/d4if5myh.jpg',
            'https://steamer.luuk.by/img/-n6sic_3.jpg',
            'https://steamer.luuk.by/img/9oen_j7i.jpg',
        ],
        price: 49,
        hrefLink: `/otparivatel`,
        categories: 'gifts'
    },
    {
        name: 'ВОДОСБЕРЕГАЮЩАЯ НАСАДКА НА КРАН',
        subDescr: 'ARBITRARY ADJUSTMENT 360',
        image: 'http://arbitrary-adjustment.storeonline.of.by/files/types__image4-719-arb.jpg',
        description:
            `
        Гибкий шланг аэратор Arbitrary Adjustment 360˚ может в считанные секунды преобразовать кран в сильный распылитель с большими возможностями. С ним более удобно ополаскивать фрукты и овощи, наполнять высокие бутылки и вазы, мыть посуду. Эта эластичная насадка завоевала доверие у многих потребителей чем вызвала такую высокую популярность.     `,

        galImage: [
            'http://arbitrary-adjustment.storeonline.of.by/files/types__image4-719-arb.jpg',
            'http://arbitrary-adjustment.storeonline.of.by/files/types__image4-719-arb.jpg',
            'http://arbitrary-adjustment.storeonline.of.by/files/offer__image-714-arb.jpg',
            'http://arbitrary-adjustment.storeonline.of.by/files/kit-278-arb.jpg',
        ],
        price: 25,
        hrefLink: `/nasadka-na-kran`,
        categories: 'home'
    },
    {
        name: 'Отбеливатель зубов WHITE LIGHT',
        subDescr: 'БЕЛОСНЕЖНАЯ УЛЫБКА',
        image: 'http://white-light.shoponline.of.by/img/1.jpg',
        description:
            `
        WhiteLight — это система отбеливания зубов в домашних условиях.

        Благодаря эффективности формулы отбеливающего геля, в сочетании с излучающей лампой, получаете улыбку при минимальных усилиях.
        
        Больше не нужно тратить огромные деньги и время на посещение стоматологических клиник только для того, чтобы отбелить зубы! Появилась простая технология недорогого и качественного, а главное ­ безопасного отбеливания зубов.
        `,
        galImage: [
            'http://white-light.shoponline.of.by/img/1.jpg',
            'http://white-light.shoponline.of.by/img/1.jpg',
            'http://white-light.shoponline.of.by/img/top-block-pic.jpg',
            'http://white-light.shoponline.of.by/img/use-block-v1_2.jpg',
        ],
        price: 29,
        hrefLink: `/otbelivatel-subov`,
        categories: 'life'
    },
    {
        name: 'Контейнер HOT BOX с подогревом',
        subDescr: 'ПРАВИЛЬНОЕ ПИТАНИЕ ВМЕСТЕ С HOT BOX',
        image: 'http://hot-box.storeonline.of.by/images/about__image.jpg',
        description:
            `
        Представляем контейнер для еды с подогревом, благодаря которому всегда с собой будет горячий обед или ужин, где бы не были.

        Достаточно просто подключить контейнер к сети с помощью кабеля, который идёт в комплекте, и уже через несколько минут пища равномерно нагреется и будет готова к трапезе.
        
        Контейнер Hot Box состоит из 2 отсеков: большого несъемного (600 мл) и маленького съемного (450 мл). Это позволит взять с собой несколько разных блюд, которых хватит на большой обед или пару перекусов.
        `,
        galImage: [
            'http://hot-box.storeonline.of.by/images/about__image.jpg',
            'http://hot-box.storeonline.of.by/images/about__image.jpg',
            'http://hot-box.storeonline.of.by/images/benefits__benefit1_image.jpg',
            'http://hot-box.storeonline.of.by/images/benefits__benefit2_image.gif',
        ],
        price: 29,
        hrefLink: `/hot-box`,
        categories: 'gifts'
    },
    {
        name: 'Светодиодный будильник',
        subDescr: 'В наличии 2 цвета: синий и зеленый',
        image: 'https://led-alarm-clock.luuk.by/img/4.jpg',
        description:
            `
        Оригинальный и в то же время простой дизайн. Пластиковая доска с подсветкой для планирования дел. Сделан из прочного пластика.
        `,
        galImage: [
            ' https://led-alarm-clock.luuk.by/img/4.jpg',
            'https://led-alarm-clock.luuk.by/img/4.jpg',
            'https://led-alarm-clock.luuk.by/img/blue.jpg',
            'https://led-alarm-clock.luuk.by/img/fon.jpg',
        ],
        price: 39,
        hrefLink: `/svetodiondni-budilnik`,
        categories: 'gifts'
    },
    {
        name: 'Умная система освещения',
        subDescr: 'с пультом управления',
        image: 'http://light-set.shopminsk.of.by/img/2.jpg',
        description:
            `
        
Подходит для любого места в доме. Простота установки. Дистанционное управление яркости.
        `,
        galImage: [
            ' http://light-set.shopminsk.of.by/img/2.jpg',
            'http://light-set.shopminsk.of.by/img/2.jpg',
            'http://light-set.shopminsk.of.by/img/fon.jpg',
            'http://light-set.shopminsk.of.by/img/3.jpg',
        ],
        price: 39,
        hrefLink: `/svetodiondni-budilnik`,
        categories: 'gifts'
    },
    {
        name: 'БЧБ-флаг',
        subDescr: 'Размер 140 см x 70 cм',
        image: 'https://flag.luuk.by/flag.png',
        description:
            `
        
        Флаги сделаны белорусами и по белорусски. Они дышат Беларусью, народным колоритом и здоровым патриотизмом.Очень хорошо сшит из легкой ткани.Крой идеально ровный - подкладочная ткань.
        `,
        galImage: [
            ' https://flag.luuk.by/flag.png',
            'https://flag.luuk.by/flag.png',
            'https://flag.luuk.by/fon2.png',
            'https://flag.luuk.by/icon.png',
        ],
        price: 29,
        hrefLink: `/bhb-flags`,
        categories: 'gifts'
    },
    {
        name: 'Разделочная доска - трансформер + подарок',
        subDescr: 'ТЕРКА-ОВОЩЕРЕЗКА В ПОДАРОК',
        image: 'http://board-transformer.onlinestore.of.by/images/veg-cutter.jpg',
        description:
            `    
        Заменит множество различных кухонных устройств и сэкономит время!
        Большой выбор насадок из нержавеющей стали. Можно нарезать овощи и фрукты разных форм и толщин.
        Выполнена из качественного пластика, имеется контейнер-дуршлаг. Можно мыть овощи и готовить салат прямо в контейнере!
        Проста в использовании, легко промывается в проточной воде.        `,
        galImage: [
            ' http://board-transformer.onlinestore.of.by/images/veg-cutter.jpg',
            'http://board-transformer.onlinestore.of.by/images/veg-cutter.jpg',
            'http://board-transformer.onlinestore.of.by/images/col2.jpg',
            'http://board-transformer.onlinestore.of.by/images/eat_bag11.jpg',
        ],
        price: 49,
        hrefLink: `/razdelochnaya-doska`,
        categories: 'home'
    },
    {
        name: 'КОЖАНЫЕ ОБЛОЖКИ ДЛЯ АВТОДОКУМЕНТОВ',
        subDescr: 'С ВАШИМ ЛОГОТИПОМ И ГОСНОМЕРОМ',
        image: 'http://passport-cover.onlinestore.of.by/wp-content/uploads/2020/09/oblozhka-na-fon-1.png',
        description:
            `    
        Заменит множество различных кухонных устройств и сэкономит время!
        Большой выбор насадок из нержавеющей стали. Можно нарезать овощи и фрукты разных форм и толщин.
        Выполнена из качественного пластика, имеется контейнер-дуршлаг. Можно мыть овощи и готовить салат прямо в контейнере!
        Проста в использовании, легко промывается в проточной воде.        `,
        galImage: [
            'http://passport-cover.onlinestore.of.by/wp-content/uploads/2020/09/oblozhka-na-fon-1.png',
            'http://passport-cover.onlinestore.of.by/wp-content/uploads/2020/09/oblozhka-na-fon-1.png',
            'http://passport-cover.onlinestore.of.by/wp-content/uploads/2020/09/chernaya-glyanczevaya-s-chernoj-nitkoj-1024x1024.jpg',
            'http://passport-cover.onlinestore.of.by/wp-content/uploads/2020/09/160068027528307-1024x1024.jpg',
        ],
        price: 49,
        hrefLink: `/auto-oblojka`,
        categories: 'auto'
    },
    {
        name: 'Vacuum Cleaner - робот пылесос',
        subDescr: 'С ВАШИМ ЛОГОТИПОМ И ГОСНОМЕРОМ',
        image: 'https://robot-vacuum-cleaner.luuk.by/1.JPG',
        description:
            `    
            Робот пылесос Vacuum Cleaner 3 in 1 может использоваться для всех видов напольных покрытий. Отличительная особенность пылесоса – компактность. Миниатюрный помощник без труда может убраться в труднодоступных местах, которые останутся недоступными для более громоздких моделей. Уборка с его помощью значительно упроститься и ускориться, ведь это устройство предназначено для полного цикла чистки пола, от сухой уборки до влажной.     `,
        galImage: [
            'https://robot-vacuum-cleaner.luuk.by/1.JPG',
            'https://robot-vacuum-cleaner.luuk.by/1.JPG',
            'https://robot-vacuum-cleaner.luuk.by/raz.JPG',
            'https://robot-vacuum-cleaner.luuk.by/fon.jpg',
        ],
        price: 69,
        hrefLink: `/auto-oblojka`,
        categories: 'auto',
    },
    {
        name: 'КАПСУЛЬНЫЙ ЗОНТИК',
        subDescr: '4 цвета на выбор: Бордовый, Синий, Желтый, Розовый',
        image: 'https://capsule-umbrella.luuk.by/images/about2.jpg',
        description:
            `    
            Мини-зонт в капсуле – это полноценный двухцветный женский зонт, который легко складывается в компактный аксессуар, помещающийся в любой дамской сумке или кармане джинсов. Его можно назвать карманным, так как в сложенном виде он имеет размеры с ладошку, для хранения к зонту прилагается футляр в виде капсулы.

            Зонтик обладает складной механической конструкцией с прочным металлически каркасом, а его купол изготовлен из полиэстера и является непроницаемым для воды. Кроме того, с его помощью можно защититься также от солнца и ветра. Ручка выполнена из каучука и удобно держится в руке, не выскальзывает и не утяжеляет зонт.`,
        galImage: [
            'https://capsule-umbrella.luuk.by/images/about2.jpg',
            'https://capsule-umbrella.luuk.by/images/about2.jpg',
            'https://capsule-umbrella.luuk.by/images/review1_photo.jpg',
            'https://capsule-umbrella.luuk.by/images/offer_top.jpg',
        ],
        price: 39,
        hrefLink: `/capsulni-zontik`,
        categories: 'gifts',
    },
    {
        name: 'ФИРМЕННЫЙ МУЖСКОЙ КЛАТЧ',
        subDescr: 'ДВА ЦВЕТА: КОРИЧНЕВЫЙ И СЕРЫЙ',
        image: 'http://new-clutch.luuk.by/new.png',
        description:
            `    
            16 слотов для кредитных карт, карман на молнии для монет, плоский карман для банкнот или авиабилетов, 2 больших отделения для увеличения вместительности для банкнот, документов и паспортов. Высококачественная кожа.
            Металлические замки серебристого и золотого цвета.
            Множество отделений для карточек, денег и телефона`,
        galImage: [
            'http://new-clutch.luuk.by/new.png',
            'http://new-clutch.luuk.by/new.png',
            'http://new-clutch.luuk.by/1.jpg',
            'http://new-clutch.luuk.by/2.jpg',
        ],
        price: 49,
        hrefLink: `/mujskoi-klatch`,
        categories: 'acsses',
    },
    {
        name: 'ПРОЗРАЧНАЯ СКАТЕРТЬ "МЯГКОЕ СТЕКЛО 3В1"',
        subDescr: 'ПОЛНАЯ БЕЗОПАСНОСТЬ ПОВЕРХНОСТИ СТОЛА!',
        image: 'http://steklo.luuk.by/img/result-image.jpg',
        description:
            `    
            Мягкое стекло (Soft Glass) – специальное, похожее на силикон покрытие-пленка для Вашего стола.

            Является полимерным материалом, пришедшим из других областей применения из-за особых свойств и характеристик, порой так необходимых в быту.`,
        galImage: [
            'http://steklo.luuk.by/img/result-image.jpg',
            'http://steklo.luuk.by/img/result-image.jpg',
            'http://steklo.luuk.by/img/1.gif',
            'http://steklo.luuk.by/img/tov-1.jpg',
        ],
        price: 69,
        hrefLink: `/steclo`,
        categories: 'home',
    },
]

export default shopObj
