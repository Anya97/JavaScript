function charInObject(number) {
    if (number <= 999) {
        var charObject = {
            'единицы': (number - (~~(number / 100)) * 100) - (~~((number - 100 * (~~(number / 100))) / 10)) * 10,
            'десятки': ~~((number - 100 * (~~(number / 100))) / 10),
            'сотни': ~~(number / 100)
        }
        return charObject;
    } else {
        console.log('Число превышает предельно допустимое значение');
        var charObject = {};
        return charObject;
    }
}

console.log(charInObject(856))
console.log(charInObject(56))
console.log(charInObject(6))