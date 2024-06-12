//default
const a1 = require('#labs/cjs/cjs01.js');
console.log(a1);

const a2 = require('#labs/cjs/cjs02.js');
a2();

// const a3 = require('#labs/cjs/cjs03.js');
// console.log(a3.a);
// a3.fnA();

console.log('----------------');

//named
const na1 = require('#labs/cjs/cjs04.js');
console.log(na1.a);
na1.fnA();

//구조분해 할당
const { a, fnA } = require('#labs/cjs/cjs04.js');
console.log(a);
fnA();

console.log('----------------');
const { m_a, m_fnA } = require('#labs/cjs/cjs05.js');
console.log(m_a);
fnA(m_fnA);
// //확장자를 생략해서 사용하려면 풀 경로를 써주면 된다.
// //MODULE_NOT_FOUND',
// const { m_a2 } = require('.modules/cjs/cjs05');
// console.log(m_a);
// // fnA(m_fnA);

//require의 장점 다른 사람이 만든 모듈에서 필요한 결과만 가져와서 사용할 수 있다.
// console.log('----------------');
// if (a1 > 0) {
//     const a2 = require('#labs/cjs/cjs01.js');
//     console.log(a2);
// }
