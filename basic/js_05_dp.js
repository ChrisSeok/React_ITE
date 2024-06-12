//Design Pattern

function cnt1() {
    var count = 0;
    return ++count;
}

console.log(cnt1());
console.log(cnt1()); //0으로 초기화돼서 1이 출력된다.

let count = 0;

function cnt2() {
    return ++count;
}
console.log(cnt2());
console.log(cnt2()); //2

//프로그램 실행시 먼저 call stack 생성된다. heap 내의 공간.
// stack에 global context 생긴다. global context 안에는 vo, scope, tihs 생성된다.
// 함수 호출하면 함수 context 생성됨.
//count라는 변수가 함수 context의 vo안에 생성되고 heap의 0이라는 값에 대응된다.
//cnt1이 실행될 때마다 새로운 함수 context가 생성되고 제거된다 -> 상태가 유지되지 않는다. -> 전역변수로 선언하자

function cnt3() {
    let count = 0;
    return function () {
        return ++count;
    };
}

//함수 표현식
let cnt4 = cnt3();
console.log(cnt4());
console.log(cnt4());
//global scope와 함수scope밖에 없다. 참조되고 있는것은 garbage collector가 제거하지 않는다.
//Closer 디자인 패턴?
//자바에서는 private/static으로 해결되지만, js에선 그게 안돼서 디자인패턴으로 해결한다.

/* 메모이제이션(memoization) 패턴 */

let cnt = 0;

function fib(n) {
    cnt++;
    if (n < 2) return n;
    return fib(n - 1) + fib(n);
}

let r = fib(5);
console.log(cnt, r);

let result = [];
cnt = 0;

function fib2(n) {
    cnt++;
    if (n < 2) result[n] = n;

    if (resutl[n] == undefined) result[n] = fib(n - 1) + fib(n - 2);
    return result[n];
}

r = fib2(5);
console.log(cnt, r, result);
