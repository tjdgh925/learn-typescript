// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

//using Interface
var jang: Person = {
  name: "jang",
  age: 25,
};

type MyString = string;
var str: MyString = "hello";

//type은 확장이 불가능하기 때문에, interface 사용을 권장합니다!
