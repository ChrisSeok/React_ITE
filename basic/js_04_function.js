function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

function add(a, b = 0) {
    return a + b;
}

console.log(add(1));

//arguments 객체
function add2() {
    let c = 0;
    for (i = 0, cnt = arguments.length; i < cnt; i++) {
        c += Number(arguments[i]);
    }
    return c;
}
console.log(add2(1, 2));
console.log(add2(1, 2, 3, 4, 5));

function add3(...a) {
    let c = 0;
    for (i = 0, cnt = a.length; i < cnt; i++) {
        c += Number(a[i]);
    }
    c = 0;
    for (let i in a) {
        //index, value
        c += a[i];
    }

    c = 0;
    for (let v of a) {
        //value only
        c += v;
    }

    c = 0;
    a.forEach((v) => c + v); //콜백함수 : (v) => c + v
    //forEach 메서드는 배열의 각 요소에 대해 특정 작업을 수행하기 위해 콜백 함수를 호출한다.

    return c;
}
console.log(add3(1, 2));
console.log(add3(1, 2, 3, 4, 5));

function add4(a, b, ...f) {
    let c = 0;
    f.forEach((fn) => (c += fn(a, b))); // 3+(-1) = 2
    return c;
}

console.log(
    add4(
        1,
        2,
        (a, b) => a + b,
        (a, b) => a - b,
    ),
);

console.log('------------------');

//Spread Operator(전개 구문)
let arr = [1, 2, 3, 4, 5];
console.log(...arr);

let str = 'hello';
console.log(...str);

var obj = { name: '홍길동', addr: '서울' };
console.log(obj);

let obj2 = { ...obj, age: 20 }; //...obj -> property(name, addr)별로 분리돼서 복제된다.
//깊은 Copy. 원본 obj는 변경이 없는 불변형 프로그래밍이다.
console.log(obj2);

function circle(a, r) {
    console.log(a.x, a.y, r);
}

circle({ x: 10, y: 20 }, 100);

/* 비구조화 할당 (Destructuring Assignment) */
function circle1({ a = { x: 0, y: 0 }, r = 0 } = {}) {
    console.log(a.x, a.y, r);
}
circle1();

//즉시실행 함수
(function add(a, b) {
    console.log(a + b);
})(1, 2);
