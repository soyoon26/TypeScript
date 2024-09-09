// 타입 단언

type Person = {
  name: string;
  age: number;
};
let person = {} as Person; // 이 타입으로 간주하라고 알려줌
person.name = "소금";
person.age = 3;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "황구",
  color: "brown",
  breed: "진도",
} as Dog;

// 값 as 단언
//A가 B의 슈퍼타입이거나 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown; // unknown은 전체 집합, 슈퍼타입
// let num3 = 10 as string; 충돌됨
let num3 = 10 as unknown as string; // 충돌은 사라짐, 좋은 방법은 아님

//const 단언
let num4 = 10; //number로 추론됨
let num5 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 수정할 수 없는 readonly

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "하하",
};

const len: number = post.author!.length; // 있다! null이거나 indefined가 아님
