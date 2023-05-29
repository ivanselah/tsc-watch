// 다차원 배열 타입 정의
const dubleArray = [[1, 2, 3]];
// 튜플 (길이와 타입이 고정된 배열), JS 에는 ❌, TS 에는 ⭕️
const tuple = [1, 2]; // [] 에서의 길이는 알지 못하여 조심해서 사용 필요, ex. push, pop
/* 튜플 언제 사용? 사용 예시 */
const users = [
    ['', 1],
    ['', 2],
    // [1, 'error'] 오류
];
// 객체 리터럴 타입
const user = {
    id: 1,
    name: 'ivanselah',
};
// Object.freeze => TS : readonly
const config = {
    apiKey: 'apiKey only',
};
// 타입은 컴파일시 다 사라지기 때문에 내부 스코프에 저장해도 됨
const testTypeFunc = () => {
    const my = {
        id: 0,
        name: 'hi',
    };
    console.log(my);
};
const myCode = {
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const user1 = {
    name: 'user1',
    role: Role.ADMIN,
};
const user2 = {
    name: 'user2',
    role: Role.USER,
};
export {};
