const shopObj = [
    {
        name: ' Компактный монокуляр BUSHNELL ',
        subDescr: '4 цвета на выбор',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/1.jpg?alt=media&token=1691c765-f8f5-48bf-bc2f-5f6ed226ae2f',
        description: `Принцип работы монокуляра заключается в особом напылении FullVision, которым оснащены стеклянные линзы устройства. Напыление мгновенно реагирует на уровень освещения и позволяет использовать монокуляр для обзора как в дневное, так и в ночное время. Сегодня эта научная разработка успешно применяется в военных подразделениях 15-ти стран мира, в том числе США, Германии и России.`,
        galImage: ['https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/2.jpg?alt=media&token=5a5c2281-903a-4e53-923d-a8be3a6ca10f',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/4.jpg?alt=media&token=a3834f4f-9c45-4d5e-88d6-44e07f011fc0',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/3.jpg?alt=media&token=c321feca-b97c-477a-ac23-2519bde2d58d',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/5.jpg?alt=media&token=3363efd0-5c91-4bc0-94ce-9ab1a1aa6c92',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/6.jpg?alt=media&token=e0bbbba4-2a15-483f-b16a-cf0ae2a5aec0'],
        price: 39,
        count: 0,
        categories: 'electric'
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
        categories: 'gifts'
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
        categories: 'life'
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
        categories: 'acses '
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
        hrefLink: '/klatch',
        categories: 'acses '
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
        categories: 'child'
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
        name: 'POWERBANK 40000 MAH',
        subDescr: '',
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
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch1.jpg?alt=media&token=de3e5caa-0223-4c0f-9bec-2dd1bd4c5884',
        description: `
        Фитнес-трекер, камера, телефон, смарт часы на твоей руке. Классические и одновременно спортивные. Показывают время по взмаху руки и могут звонить!
        Они предлагают вам важную информацию там, где она нужна. Тогда, когда она вам нужна. 
        И помогают в считанные секунды выполнять повседневные задачи.
        Позволяют моментально связаться с близкими людьми или проконтролировать важные для вас вещи. 
        И при этом показывают точное время. Да, это часы. Но совсем не такие, какими вы их всегда себе представляли.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch4.jpg?alt=media&token=fdd7f74d-620d-4a76-83f7-f7108d6e8611',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch3.jpg?alt=media&token=28f11484-1200-4e06-9d2e-8c78ee5c7189',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam4.jpg?alt=media&token=3adbb16f-6b8a-4525-acd0-430ddcceb64b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam5.jpg?alt=media&token=a3c4d3b4-814e-4cb9-959f-02b96978ebe0',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam6.jpg?alt=media&token=3fb2c53f-c7ae-4ff6-a6a3-4174ca18e0a8'],
        price: 59,
        hrefLink: `/smart-watch`,
        categories: 'electric'
    },
    {
        name: 'Женские сумки EveryDay ',
        subDescr: '+ КЛАТЧ И НАУШНИКИ В ПОДАРОК',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch1.jpg?alt=media&token=de3e5caa-0223-4c0f-9bec-2dd1bd4c5884',
        description: `
        Фитнес-трекер, камера, телефон, смарт часы на твоей руке. Классические и одновременно спортивные. Показывают время по взмаху руки и могут звонить!
        Они предлагают вам важную информацию там, где она нужна. Тогда, когда она вам нужна. 
        И помогают в считанные секунды выполнять повседневные задачи.
        Позволяют моментально связаться с близкими людьми или проконтролировать важные для вас вещи. 
        И при этом показывают точное время. Да, это часы. Но совсем не такие, какими вы их всегда себе представляли.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch4.jpg?alt=media&token=fdd7f74d-620d-4a76-83f7-f7108d6e8611',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch3.jpg?alt=media&token=28f11484-1200-4e06-9d2e-8c78ee5c7189',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch5.jpg?alt=media&token=62993d5a-10f4-49d6-ae19-53d47469c15b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch2.jpg?alt=media&token=172a0d5f-7e99-49df-85cd-bdbc62ab1241',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch2.jpg?alt=media&token=172a0d5f-7e99-49df-85cd-bdbc62ab1241'],
        price: 59,
        hrefLink: `/smart-watch`,
        categories: 'acses'
    },
    {
        name: 'SMАRT WATCH',
        subDescr: '+ КЛАТЧ И НАУШНИКИ В ПОДАРОК',
        image: 'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch1.jpg?alt=media&token=de3e5caa-0223-4c0f-9bec-2dd1bd4c5884',
        description: `
        Фитнес-трекер, камера, телефон, смарт часы на твоей руке. Классические и одновременно спортивные. Показывают время по взмаху руки и могут звонить!
        Они предлагают вам важную информацию там, где она нужна. Тогда, когда она вам нужна. 
        И помогают в считанные секунды выполнять повседневные задачи.
        Позволяют моментально связаться с близкими людьми или проконтролировать важные для вас вещи. 
        И при этом показывают точное время. Да, это часы. Но совсем не такие, какими вы их всегда себе представляли.`,
        galImage: [
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch4.jpg?alt=media&token=fdd7f74d-620d-4a76-83f7-f7108d6e8611',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/smart-watch3.jpg?alt=media&token=28f11484-1200-4e06-9d2e-8c78ee5c7189',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam4.jpg?alt=media&token=3adbb16f-6b8a-4525-acd0-430ddcceb64b',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam5.jpg?alt=media&token=a3c4d3b4-814e-4cb9-959f-02b96978ebe0',
            'https://firebasestorage.googleapis.com/v0/b/luukby.appspot.com/o/bam6.jpg?alt=media&token=3fb2c53f-c7ae-4ff6-a6a3-4174ca18e0a8'],
        price: 59,
        hrefLink: `/smart-watch`,
        categories: 'electric'
    },
]

export default shopObj
