//함수의 타입으로 변수를 받는다?

function logText(text: any): void {
  console.log(text);
}

logText(10);
logText("hello");
logText(true);

function logText2<T>(text: T): T {
  console.log(text);
  return text;
}
//제네릭 활용
logText2<string>("hello");

function logText3(text: string) {
  //String과 관련된 내장 API 사용 가능
  console.log(text);
  text.split("").reverse().join("");
  return text;
}
logText3("hi");
function logNumber(num: number) {
  //넘버와 관련된 내장 API 사용 가능
  console.log(num);
  num.toLocaleString();
  return num;
}
logNumber(10);
//이렇게 타입별로 함수를 지정한다면, 유지보수에도 좋지 않고 지저분하다.

function logTextUnion(text: string | number) {
  //함수 안에서 여러가지 타입으로 받을 수 있다
  console.log(text);
  return text;
}

const a = logTextUnion("text");
a.toLocaleString();
//하지만, a가 string이 아니라 string인지 number인지 정확하게 추론이 불가능 하다.
//반환값에 대한 해결책을 제시해주지 못한다.
logTextUnion(10);

function logTextGenerics<T>(text: T): T {
  console.log(text);
  return text;
}

const b = logTextGenerics<string>("realGenerics");
b.charAt(2);
//함수에 인자를 넣으면서 타입을 지정할 수 있다.
const c = logTextGenerics<boolean>(true);
c.valueOf();
//boolean으로 함수에 넣고 boolean 타입으로 반환 받는다.

//Interface에 제네릭을 적용하는 방법
interface DropDown {
  value: string;
  selected: boolean;
}

interface DropDownInterface<T> {
  value: T;
  selected: boolean;
}

//제네릭에 타입 제한하는 방법
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength(["hi", "abc"]);

//이미 정의되어 있는 타입 활용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2("hello");

//keyof 사용해서 제네릭 제한하기
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
//아래 함수에는 ShoppItem에 들어가 있는 인자만 들어갈 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>("itemB");

getShoppingItemOption("name");
