// 넓은 타입에서 좁은 타입으로
// value -> number : toFixed
// value => string : toUpperCase

// value => Date : getTime

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | Person) {
  value;
  // value.toUpperCase()
  if (typeof value === "number") {
    // 좁히기
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 뭐지`);
  }
}
