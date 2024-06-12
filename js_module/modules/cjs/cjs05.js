//cjs: common js, nodejs가 지원하는 방식이다.

const m_a = 'm_A';

//모듈에 함수 선언
function m_fnA() {
    console.log('m_fnA()입니다');
}

let a = { m_a, m_fnA, m_a2: m_a }; //m_a2라는 다른 이름으로 주기

module.exports = a;
//export를 계속 쓰면 중앙관리가 어려워진다. -> 구조화.
