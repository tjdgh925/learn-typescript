interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Jang", age: 25, skill: "React" };
}

//리턴값에는 skill 값을 주지만, Union 타입으로 리턴값을 주었기 때문에 공통적인 부분만 다룰 수 있다.
var tony = introduce();
// var skills = tony.skill;

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
}
//위와 같이 타입 단언을 사용해서 구현하면 가독성이 떨어지기 때문에, 타입 가드를 사용한다.

//타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill;
} else {
  tony.age;
}
