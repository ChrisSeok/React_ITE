const m_a = 'm_A';

function m_fnA() {
    console.log('m_fnA');
}

//넘기기
export { m_a, m_fnA, m_a as m_a2 };
