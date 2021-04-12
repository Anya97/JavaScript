console.log('Добро пожаловать в игру "Кто хочет стать миллионером!"');
let name = prompt("Cегодня у нас в гостях: ");
console.log(`Очень рады видеть вас, ${name}`);
let helpForPlayer = {
    'Помощь звителей': true,
    'Звонок другу': true,
    '50/50': true
}
console.log(`${name}, Правила очень просты, если вы ответили правильно, то игра продолжается, ответили неправильно - проиграли.

У вас также есть возможность использовать три вида подсказок:

1. ${Object.keys(helpForPlayer)[0]}
2. ${Object.keys(helpForPlayer)[1]}
3. ${Object.keys(helpForPlayer)[2]}
`);

firstQuestion = console.log(`Первый вопрос стоимостью 1 000 000 рублей:
В каком году Нил Армстронг совершил полёт на Луну:

1. 2001 года
2. 1969 года
3. 1985 года
4. 1835 года
5. Воспользоваться подсказкой
`);

let answerToQuestionNumberOne = prompt("Итак, ваш ответ: ");
if (answerToQuestionNumberOne == 2) {
    console.log("Молодец! Ваш ответ правильный и вы выиграли 1 000 000!!!")
} else if (answerToQuestionNumberOne == 5) {
    console.log(`Выбирайте подсказку: 
    1. ${Object.keys(helpForPlayer)[0]}
    2. ${Object.keys(helpForPlayer)[1]}
    3. ${Object.keys(helpForPlayer)[2]}`);

    let hintToTheFirstQuestion = prompt();
    if (hintToTheFirstQuestion == 1) {
        console.log("Вы выбрали помощь зала, зал говорит, что правильный ответ номер 2");
        delete helpForPlayer['Помощь звителей'];
    } else if (hintToTheFirstQuestion == 2) {
        console.log("Вы выбрали звонок другу...");
        console.log("Я думаю, что правильный ответ номер 2");
        delete helpForPlayer['Звонок другу'];
        console.log(helpForPlayer)
    } else if (hintToTheFirstQuestion == 3) {
        console.log("Вы выбрали 50/50...");
        console.log("1. 2001 года; 2. 1969 года");
        delete helpForPlayer['50/50'];
    }
    answerToQuestionNumberOne = prompt("Итак, ваш ответ: ");
    if (answerToQuestionNumberOne == 2) {
        console.log("Молодец! Ваш ответ правильный и вы выиграли 1 000 000!!!")
    } else {
        console.log("К сожалению, вы проиграли, игра окончена!")
    }

} else {
    console.log("К сожалению, вы проиграли, игра окончена!")
}