// 객체타입간의 호환성
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "소금",
  color: "white",
  breed: "말티즈",
};
//animal이 슈퍼타입 dog(더 많이 가짐)이 서브타입
animal = dog;
// 조건타입이 더 적은 게 슈퍼타입

type Book = {
  name: string;
  price: number;
};

type StoryBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let storyBook: StoryBook = {
  name: "체인소맨",
  price: 10000,
  skill: "kill",
};
book = storyBook;

// 초과 프로퍼티 검사
let book2: Book = { name: "뭐니", price: 200 };
//스킬은 안 됨
let book3: Book = storyBook; //은 가능
