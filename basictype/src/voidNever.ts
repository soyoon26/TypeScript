// void 공허

function func1(): string {
  return "hi";
}

function func2(): void {
  console.log("hell");
}

let a: void;
a = undefined; // 만 넣을 수 있다. NullChecks를 끄면 null 가능

// Never 존재하지 않는, 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never; // undefined도 못 담음
