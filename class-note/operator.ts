//Union Type |
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.charAt(1);
  }
  throw new TypeError("error");
}
logMessage("hello");
logMessage(100);
//number와 string만 가능하다.
// logMessage(true);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
  //공통된 속성만 사용 가능하다.
}

//Intersection Type &

var jang2: string | number | boolean;
var jang3: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}
