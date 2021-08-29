// 타입 단언
var a;
a = 20;
a = "a";
var b = a as string;
//a 의 타입이 any 이기 때문에, b 의 타입도 any

//타입스크립트보다 개발자가 똑똑하니까 개발자가 정한다!

//DOM API 조작할 때 많이 이용한다.
//HTML의 태그에 접근할 수 있는 API를 의미한다.

// ex) <div id="app">hi</div>

let div = document.querySelector("div") as HTMLDivElement;

//하지만, div가 있는지 보장할 수 없기 때문에 오류가 생긴다.
//이러한 경우에 타입 단언을 사용한다.
