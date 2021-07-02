var a = 10;
var b = "abc";

function getA(a = "text") {
  return a;
}
function getB(b = 10) {
  var c = "ji";
  return b + c;
}
interface DropDown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends DropDown<K> {
  description: string;
  tag: K;
}

var shoppingItem: DropDown<string> = {
  value: "abv",
  title: "test",
};

var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "a",
};
