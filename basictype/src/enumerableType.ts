// enum, 열거형 타입
// ts만 제공, 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0, // 10이라고 쓰면 11,12가 됨 / 안 써도 0
  USER, // 10이라고 하면 0,10,11
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "소금",
  role: Role.ADMIN, // 0은 관리자
  language: Language.korean,
};
const user2 = {
  name: "소금",
  role: Role.USER, // 1은 일반 관리자
};
const user3 = {
  name: "소금",
  role: Role.GUEST, // 2는 게스트
};

console.log(user1, user2);
// enum은 컴파일해도 사라지지 않음
