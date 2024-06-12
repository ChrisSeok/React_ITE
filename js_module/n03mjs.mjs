//1. default
import a1 from '#labs/esm/esm01.mjs';
console.log(a1);

import fnA1 from '#labs/esm/esm02.mjs';
fnA1();

//default지만 한꺼번에 주기
import obj1 from '#labs/esm/esm03.mjs';
console.log(obj1.a);
obj1.fnA();

console.log('------------');

//2. named
//*로 named 된걸 모두 받겠다
import * as mA from '#labs/esm/esm04.mjs';
console.log(mA.a);
mA.fnA();

//3. 구조분해
import { a, fnA } from '#labs/esm/esm04.mjs';
console.log(a);
fnA();

//side effect가 우려됨 > 별칭을 붙여요!
import { a as a2, fnA as fnA2 } from '#labs/esm/esm04.mjs';
console.log(a2);
fnA2();

console.log('------------');

import { m_a, m_fnA, m_a2 } from '#labs/esm/esm05.mjs';
console.log(m_a);
m_fnA();

import * as mB from '#labs/esm/esm05.mjs';
console.log(mB.m_a);
mB.m_fnA();
