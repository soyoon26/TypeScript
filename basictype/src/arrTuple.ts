// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["안녕", "뭐해"];
let boolArr: Array<boolean> = [true, false];

// 배열 요소가 다양할 경우

let multiArr: (number | string)[] = [1, "hi"];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 타입 - ts에서만 제공, 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true]; //순서 바꿔도 안됨

const users: [string, number][] = [
  ["소윤", 1],
  ["소윤", 1],
  ["소윤", 1],
];
