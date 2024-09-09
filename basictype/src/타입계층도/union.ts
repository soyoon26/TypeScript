// 대수타입 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 - union타입

let a: string | number | boolean; // 무한대로 추가 가능
a = 1;
a = "hello";

let arr: (number | string)[] = [1, "hi"];

type Dog = { name: string; color: string };
type Person = { name: string; language: string };

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};
// 합쳐도 오류나지 않음

// let union4: Union1 = {
// name:""
// }  name만 넣으면 허용되지않음

// 교집합 타입 - intersection

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
}; // 다 가지고 있는 것
