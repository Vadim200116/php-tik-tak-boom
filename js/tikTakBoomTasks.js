// const tasks = `
//     [
//         {
//             "question": "2 * 2 = ",
//             "answer1": { "result": true, "value": "4" },
//             "answer2": { "result": false, "value": "3" }
//         },
//         {
//             "question": "Как зовут крокодила, лучшего друга Чебурашки?",
//             "answer1": { "result": false, "value": "Данди" },
//             "answer2": { "result": true, "value": "Гена" }
//         },
//         {
//             "question": "5 + 5",
//             "answer1": { "result": false, "value": "1" },
//             "answer2": { "result": true, "value": "10" }
//         },
//         {
//             "question": "Столица Италии?",
//             "answer1": { "result": false, "value": "Ватикан" },
//             "answer2": { "result": true, "value": "Рим" }
//         }
//     ]
// `;

const tasks = `
[
    {
        "question": "Шахматы - вид спорта?",
            "answer1": { "result": true, "value": "Да" },
            "answer2": { "result": false, "value": "Нет" }
    },
    {
        "question": "Инструмент для игры в гольф.",
            "answer1": { "result": true, "value": "Клюшка" },
            "answer2": { "result": false, "value": "Бита" }
    },
    {
        "question": "Родина хоккея с шайбой.",
        "answer1": { "result": true, "value": "Канада" },
        "answer2": { "result": false, "value": "Швеция" }
    },
    {
        "question": "Марафонский забег - длина дистанции?",
        "answer1": { "result": true, "value": "42195 м" },
        "answer2": { "result": false, "value": "50500 м" }
    },
    {
        "question": "Удар в боксе.",
        "answer1": { "result": true, "value": "Апперкот" },
        "answer2": { "result": false, "value": "Антрекот" }
    },
    {
        "question": "Пеле.",
        "answer1": { "result": true, "value": "Знаменитый футболист" },
        "answer2": { "result": false, "value": "Знаменитый пловец" }
    },
    {
        "question": "Тайм в футболе.",
        "answer1": { "result": false, "value": "90 мин" },
        "answer2": { "result": true, "value": "45 мин" }
    },
    {
        "question": "Штрафной удар в футболе.",
        "answer1": { "result": false, "value": "Буллит" },
        "answer2": { "result": true, "value": "Пенальти" }
    },
    {
        "question": "В какой спортивной дисциплине используется шест?",
        "answer1": { "result": false, "value": "Прыжки в воду" },
        "answer2": { "result": true, "value": "Прыжки в высоту" }
    },
    
    {
        "question": "Высшая оценка в фигургом катании.",
        "answer1": { "result": false, "value": "5+" },
        "answer2": { "result": true, "value": "6.0" }
    },
    {
        "question": "Тройной тулуп.",
        "answer1": { "result": false, "value": "Костюм судьи в лыжных гонках" },
        "answer2": { "result": true, "value": "Элемент в фигурном катании" }
    },
    {
        "question": "Оружие биатлониста.",
        "answer1": { "result": false, "value": "Арбалет" },
        "answer2": { "result": true, "value": "Ружьё" }
    },
    {
        "question": "Олимпийский девиз : \\" Быстрее, выше, ... \\" ",
        "answer1": { "result": false, "value": "Круче" },
        "answer2": { "result": true, "value": "Сильнее" }
    },
    {
        "question": "Что просят лыжники?",
        "answer1": { "result": false, "value": "Воды!" },
        "answer2": { "result": true, "value": "Лыжню!" }
    },
    {
        "question": "Боксерская площадка.",
        "answer1": { "result": true, "value": "Ринг" },
        "answer2": { "result": false, "value": "Татами" }
    },
    {
        "question": "Профессиональный стиль плавания.",
        "answer1": { "result": false, "value": "Баттерфляй" },
        "answer2": { "result": true, "value": "По-собачьи" }
    },
    {
        "question": "Куда надо забросить мяч в баскетболе?.",
        "answer1": { "result": false, "value": "Ведро" },
        "answer2": { "result": true, "value": "Корзина" }
    },
    {
        "question": "Русский бейсбол.",
        "answer1": { "result": true, "value": "Лапта" },
        "answer2": { "result": false, "value": "Городки" }
    },
    {
        "question": "Крылатая фраза: \\"Главное не победа, а ...\\".",
        "answer1": { "result": false, "value": "Присутствие" },
        "answer2": { "result": true, "value": "Участие" }
    },
    {
        "question": "На чем играют в кёрлинг?",
        "answer1": { "result": true, "value": "Лёд" },
        "answer2": { "result": false, "value": "Трава" }
    },
    {
        "question": "Игровое время в хоккее.",
        "answer1": { "result": false, "value": "Тайм" },
        "answer2": { "result": true, "value": "Период" }
    },
    {
        "question": "Что показывает футбольный судья, удаляемому с поля за нарушение игроку?",
        "answer1": { "result": false, "value": "Чёрная метка" },
        "answer2": { "result": true, "value": "Красная карточка" }
    },
    {
        "question": "Закончи строчку из песни: \\"В хоккей играют ...\\".",
        "answer1": { "result": true, "value": "Настоящие мужчины" },
        "answer2": { "result": false, "value": "Реальные пацаны" }
    },
    {
        "question": "Голеадор.",
        "answer1": { "result": false, "value": "Хороший вратарь" },
        "answer2": { "result": true, "value": "Хороший нападающий" }
    },
    {
        "question": "Предмет мебели в хоккейном штрафном боксе.",
        "answer1": { "result": true, "value": "Скамейка щтрафников" },
        "answer2": { "result": false, "value": "Скамья подсудимых" }
    },
    {
        "question": "Спортивный снаряд для метания.",
        "answer1": { "result": false, "value": "Наковальня" },
        "answer2": { "result": true, "value": "Молот" }
    },
    {
        "question": "Одно из нарушений в баскетболе.",
        "answer1": { "result": true, "value": "Пробежка" },
        "answer2": { "result": false, "value": "Прогулка" }
    },
    {
        "question": "Вид борьбы.",
        "answer1": { "result": false, "value": "Афроамериканская" },
        "answer2": { "result": true, "value": "Греко римская" }
    },
    {
        "question": "Одежда каратиста.",
        "answer1": { "result": true, "value": "Кимоно" },
        "answer2": { "result": false, "value": "Трико" }
    },
    {
        "question": "Какого спортивного снаряда не существует.",
        "answer1": { "result": true, "value": "Баран" },
        "answer2": { "result": false, "value": "Козел" }
    }
]
`;