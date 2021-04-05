function addition(x, y) {
    return x + y;
}

function substraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function devision(x, y) {
    if (y != 0)
        return x / y;
    else
        alert("на ноль делить нельзя");
}

substraction(10, 0);
devision(10, 5)