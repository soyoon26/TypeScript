// 타입 추론

let a = 10;
let b = "hello";
// 초기값 기준으로 추론함

let c = {
  id: 1,
  name: "소금",
  urls: ["https://"],
};
let { id, name } = c;

function func(message = "hello") {
  return "hello";
}

let d; // any
d = 10; // 이후 number로 추론됨
d.toFixed();

d = "hi"; // 이후 string으로 진화
d.toUpperCase();

const num = 10;
const str = "hi"; // 리터럴로 추론됨

let arr = [1, "hi"];
