exports.hello = function fn(name = '고객') {
    //hello로 접근하면 함수 fn이 호출된다.
    //기본값을 '고객'으로 준다
    console.log(`${name}님 안녕하세요!`);
};
