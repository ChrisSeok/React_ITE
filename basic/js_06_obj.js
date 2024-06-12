let calc = {
    a: 1,
    b: 2,
    add: function () {
        return this.a + this.b; //this는 객체가 된다.
    },
};

console.log(calc.add()); //3

let calc2 = {}; //빈 객체
calc2.a = 1;
calc2.b = 2;
calc2.add = function () {
    return this.a + this.b;
};
console.log(calc2.add()); //3

//자바는 prototype을 기반으로 상속을 지원. 자바스크립트는 클래스 선언을 안한다. 최상위 객체 object가 복제

/* 생성자 */
function calc3(a, b) {
    this.a = a;
    thisb = b;
}
calc3.prototype.add = function () {
    return this.a + this.b;
};
let obj3 = new calc3(1, 2);
console.log(obj3.add());

//클래스로 객체 생성

//최상위는 object객체, 복제해서 만드는 Prototype
//1) literal
//2) 생성자
//3) class

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    //set area (param)
    get area() {
        return this.height * this.width;
    }

    print() {
        console.log('면적:' + this.area);
    }
}

let poly = new Polygon(10, 20);
console.log(poly, area);
poly.print();

class Square extends Polygon {
    constructor(length) {
        super(length, length);
    }
}

let squ = new Square(10);
console.log(squ.area);
squ.print();
