// 다차원 배열 타입 정의
const dubleArray: number[][] = [[1, 2, 3]];

// 튜플 (길이와 타입이 고정된 배열), JS 에는 ❌, TS 에는 ⭕️
const tuple: [number, number] = [1, 2]; // [] 에서의 길이는 알지 못하여 조심해서 사용 필요, ex. push, pop
/* 튜플 언제 사용? 사용 예시 */
const users: [string, number][] = [
  ['', 1],
  ['', 2],
  // [1, 'error'] 오류
];

// 객체 리터럴 타입
const user: { id: number; name: string } = {
  id: 1,
  name: 'ivanselah',
};

// Object.freeze => TS : readonly
const config: {
  readonly apiKey: string;
} = {
  apiKey: 'apiKey only',
};

// 타입 별칭
type UserType = {
  id: number;
  name: string;
  nickname: string;
};

// 타입은 컴파일시 다 사라지기 때문에 내부 스코프에 저장해도 됨
const testTypeFunc = () => {
  interface MyType {
    id: number;
    name: string;
  }
  const my: MyType = {
    id: 0,
    name: 'hi',
  };
  console.log(my);
};

// 인덱스 시그니처 (key 와 value 의 규칙을 기준으로 객체의 타입을 정의)
type Codes = {
  [key: string]: string;
};
const myCode: Codes = {
  korea: 'ko',
  unitedState: 'us',
};
/**
 * * 주의, myCode = {} 해도 오류가 나지 않는다,
 * ! 이유 : type Code 의 규칙을 위반하지 않으면 모든 걸 허용, {} 규칙을 위반할 프로퍼티가 없으므로 오류가 나지 않음
 */

// Enum (Enumerable Type) 열거형 타입
/**
 * * 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입( JS 에는 ❌, TS 에는 ⭕️ )
 */
enum Role {
  ADMIN = 0, // 작성하지 않아도 자동 0 번째부터 할당됨
  USER = 1,
}
const user1 = {
  name: 'user1',
  role: Role.ADMIN,
};
const user2 = {
  name: 'user2',
  role: Role.USER,
};
