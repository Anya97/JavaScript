let i = 2
while (i <= 100) {
    let j = i - 1;
    while (j > 1) {
        if (i % j == 0) {
            break;
        }
        j--;
    }
    if (j == 1) {
        console.log(i);
    }
    i++;
}