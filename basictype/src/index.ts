// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  location: string;
};

// func안에서는 또 정의 가능
let user: User = {
  id: 1,
  name: "소윤",
  nickname: "isang",
  location: "부산",
};

// 인덱스 시그니처
// 위반하지만 않으면 허용, 아무것도 없어도 됨
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 꼭 가져야 함, 인덱스와 일치하거나 호환되어야 함
};
let countyNumberCodes: CountryNumberCodes = {
  Korea: 1,
  US: 840,
  UK: 826,
};
