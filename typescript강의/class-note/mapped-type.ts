//기존에 존재하는 타입을 map 함수를 통해서 새로운 타입으로 바꿔준다.
// {[K in 원래 타입]: 바꿀 자료형}
type Heroes = "Hulk" | "Capt" | "Thor";
type HeroAge = { [K in Heroes]: number };
const ages: HeroAge = {
  Hulk: 33,
  Capt: 100,
  Thor: 200,
};
// for in 반복문
var arr = ["a", "b", "c"];
for (var key in arr) {
  console.log(arr[key]);
}
