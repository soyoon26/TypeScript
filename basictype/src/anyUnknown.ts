// any 특정 변수의 타입을 모를 때

let anyVar: any = 10;
anyVar = "hi";

// 메서드도 자유롭게 사용 가능
let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;

// num = unknownVar 는 불가능, 메서드나 연산도 안 됨
if (typeof unknownVar === "number") {
  num = unknownVar;
} // 타입정제시 가능
