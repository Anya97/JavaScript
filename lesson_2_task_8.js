function power(val, pow) {
    if (pow == 0)
        return 1
    else if (pow > 0)
        return val*power(val, pow-1);
    else
        return 1 / power(val, -pow);
}
alert(power(5, 2))