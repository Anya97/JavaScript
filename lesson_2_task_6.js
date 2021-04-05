function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return arg1 + arg2;
        case 'substraction':
            return arg1 - arg2;
        case 'multiplication':
            return (arg1 * arg2);
        case 'devision':
            if (arg2 != 0) {
                return arg1 / arg2;
            } else
                alert("на ноль делить нельзя");
    }
}
mathOperation(1, 6, 'devision');