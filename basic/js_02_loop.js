//let은 scope 내에서만 유효하다.
let ary = [100, 200, 300, 400, 500];
for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}
//forEach 메서드는 배열의 각 요소에 대해, 제공된 콜백 함수를 한 번씩 실행
ary.forEach(function (item) {
    //callback함수
    console.log(item);
});

//arrow function, 람다 표기법
ary.forEach((item) => {
    console.log(item);
});

//literal하게 배열 객체를 생성
[100, 200, 300, 400, 500].forEach((item) => {
    //callback함수
    console.log(item);
});

//불변형 프로그래밍(원본은 변경되지 않는다)
let ary1 = [1, 2, 3, 4, 5];
ary1.filter((x) => x % 2 == 0).forEach((item) => console.log(item));
ary1.map((x) => x * 2).forEach((item) => console.log(item));
let sum = ary1.reduce((tot, x) => tot + x);
console.log(sum);
//c출력은 css로.
// 값의 계산은 filter, map, reduce로.

//짝수의 합을 출력하세요
let total = ary1.filter((x) => x % 2 == 0).reduce((tot, x) => tot + x);
console.log(total);

//some
let result = ary1.some((x) => x < 3); // 배열의 하나 이상의 요소가 주어진 조건을 만족하면 true를 반환하고, 모든 요소가 조건을 만족하지 않으면 false를 반환.
console.log(result);

//every
result = ary1.every((x) => x < 3); //배열의 모든 요소가 주어진 조건을 만족하면 true
console.log(result);

console.log('------------------');

//유사배열
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
};

for (var idx in obj) {
    console.log(obj[idx]);
}

obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
Array.from(obj).forEach((value, idx) => console.log(value));
