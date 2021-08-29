interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}

var dev: Developer;
var per: Person;

// dev = per;
per = dev;

//객체지향의 다형성과 비슷한 원리 같다.

var add = function (a: number) {
  //...
};

var sum = function (a: number, b: number) {
  //...
};

//sum이라는 함수가 add라는 함수를 포함한다는 의미를 가진다.

// add = sum;
sum = add;

interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var noEmpty1: NotEmpty<string>;
var noEmpty2: NotEmpty<number>;
// noEmpty1 = noEmpty2;
// noEmpty2 = noEmpty1;
// 둘 다 오류 발생한다.
