if (!("a" in window)) {
    var a = 1;
}
alert(a); //undefind, так как а находится внутри тела условия

var b = function a(x) {
    x && a(--x);
};
alert(a); //undefind, так как a не является глобальной

function a(x) {
    return x * 2;
}
var a;
alert(a); // выведет функцию, так как переменная неопределена, определена только функция

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); // а присвоит 10, выведет 10

function a() {
    alert(this);
}
a.call(null); // выведет объект, который вызвал функцию