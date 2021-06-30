//ES6의 최신 문법이다.
function Persion(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person("jang", 200);

//Java와 익숙한 사용자들이 사용하기 익숙하도록 문법을 추가한 것이다.
class Person {
  //클래스 로직이 들어간다.
  //인스턴스를 만들어주는 역할을 수행한다.
  constructor(name, age) {
    console.log("생성 완료");
    this.age = age;
    this.name = name;
  }
}

var jang = new Person("jang", 25);
console.log(jang);
