var a = 10; //constant pool에 올라가고 리터럴 10이 올라간다.
//stack에 a라는 alias가 생성되고, 10이라는 값이 복제되어 대입된다.'abc'가 constant pool에 올라가고, a에 대응되는 값이 'abc'로 교체된다. contant pool의 두 값은 변경 없이 있으므로 이런것을 불변형이라고 한다.
console.log(a);

//var을 통한 선언은 변수선언이 아니다. (scope때 설명)
//java에서는 이렇게 하면 문제가 발생해요.
//a가 override 되어 문자열로 바뀐다.
//js는 변수명도 override 된다.
//JavaScript는 Type추론을 한다.타입이 값이 대입된 후에 정해진다.
// var a = 'abc';
a = 'abc';
console.log(a);

console.log(10 + 20); //10이 이미 상수풀에 있어서 안올림. 20은 메모리에 올라감. constant pool의 값을 복제해서 stack의 변수에 대응(?)
console.log(console);
// var console = '가나다라';
// console.log(console);
//js는 시스템 변수고 뭐고 아묻따 override 해준다.
//팀프로젝트 시 같은 변수명을 사용하면 충돌이 일어난다!
//네이밍 규칙을 정하고 프로젝트를 시작하는것이 좋다. (특정 문자열로 시작한다거나..) 이걸 해결하기 위한 Module 개념이 있다. 뒤에서 설명.

console.log('-------------------');

//숫자형
console.log(typeof 10); //number
console.log(typeof 10.1); //number
console.log(typeof '12345'); //string
console.log(typeof true); //boolean

console.log(typeof function () {}); //function
console.log(typeof {}); //object
console.log(typeof []); //object

console.log(typeof aaaa); //undefined

console.log(1 + '2'); //12 (3이 아닌)
console.log('1' + 2); //12
//js는 타입이 달라도 연산을 해주는게 문제..! 타입 캐스팅(변환)필수!

//+,-는 문자열 연산이 되는데 /,* 는 숫자 연산이 된다
//문자를 기준으로 먼저 연산이 처리된다. 문자 연산자 중에서도 +,-이 있기 때문에 문자열 연산이 되고 /,*는 숫자 연산자이기 때문에 숫자로 연산된다.
console.log('1' / 2); //0.5
console.log('1' * 2); //2

//형변환 처리
console.log('1' * 1 + 2); //3 //실수로 하려면 1이 아닌 1.0을 곱한다.

//템플릿 문자열
console.log(`1+2=${1 + 2}`);
var today = new Date().getFullYear(); //new 키워드로 생성
console.log(`올해는 ${today}년 입니다.`);
console.log('--------------------');

//논리 비교 연산자
console.log('273' == 273); //true - 타입 고려 안함
console.log('273' === 273); // false - 정확히 타입까지 고려하는 === 연산자를 습관화 합시다

//단축평가
true || console.log('실행1'); //OR 연산자 => 뒷 항을 확인하지 않아도 앞이 true기 때문에 결과가 true로 결정된다 => 뒤의 console.log를 실행하지 않는다.
false || console.log('실행2'); //뒷 항을 실행한다.

true && console.log('실행1'); //AND 연산자 => 둘 다 참이어야 하므로 뒷 항이 실행된다.
false && console.log('실행2'); //이미 앞 항이 false 이므로 결과가 false => 뒷 항을 실행하지 않는다.
console.log('----------------');

//형 변환
console.log(Number('1') + 2); //실수로 하려면 1이 아닌 1.0을 곱한다.
console.log(Number(true) + 2);
console.log(Number('abcd') + 2); //NaN : Not a Number
// NaN 처리할 땐 이런식으로 : if (Number(a) != NaN)
console.log(Number('123abcd') + 2); //NaN
console.log(isNaN(Number('123abcd'))); //true

//구조 분해 할당(Destructing) = 튜플
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

//값을 적게 주면
var [a, b, c] = [1, 2];
console.log(a, b, c); // 1 2 undefined (초기화 안해서 생기는 undefined 오류 발생)

//초기값을 준다
var [a = 0, b = 0, c = 0] = [1, 2]; //앞에서부터 할당
console.log(a, b, c); //1 2 0

var { pro1, pro2, pro3 } = {
    pro1: 1,
    pro2: 'str',
    pro3: true,
};
console.log(pro1, pro2, pro3); //1 str true

var { pro1 = 0, pro2 = 'str', pro3 = true } = {}; //빈 객체를 만들고 초기화해서 사용
console.log(pro1, pro2, pro3); //0 str true

var b = [1, 2, 3];
var [a, b, c] = b; //비구조할당?을 통해 출력? for문 없어진다
console.log(a, b, c); //1 2 3
//많이 쓰이니까 튜플 구조에 관심을 갖고 사용합시다!
//json을 받아와서
//비구조할당으로 변수에 받아서 한꺼번에 처리 가능하다.
// 리스트로 받아서 비구조 할당으로 각각의 변수명에 할당해서 사용 가능하다. 함수를 유연하게 핸들링할 수 있다.
//함수 매개변수로 배열이 넘어가면 받는쪽에서 비구조할당으로 받는지, 매개변수로 받는지 확인해줘야 한다.
