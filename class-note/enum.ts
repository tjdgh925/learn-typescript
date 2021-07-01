//별도의 지정을 하지 않으면 초기 값은 숫자형 enum
enum Shoes {
  Nike = "nike",
  Adidas = "adidas",
}

var myShoes = Shoes.Nike;

console.log(myShoes);

//예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);

//이렇게 enum을 활용해서 제한한다. good for error
