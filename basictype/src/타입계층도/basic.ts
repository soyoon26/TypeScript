// unknown 타입

function unknwonExam() {
  let a: unknown = 1;
  let b: unknown = "hi";
  let c: unknown = null;
  let d: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknwonVar;
}

// nerver 공집합
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  // let never2: never = "string";
}

//void
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  anyVar = unknownVar;
  let neverVar: never;
  // neverVar = anyVar; 안됨
}
//치트키 타입
