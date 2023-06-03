/**
 * * 함수 오버로딩
 * * 여러가지 버전으로 만들 수 있음
 * * 대다수의 타입스크립트 라이브러리들이 오버로딩을 활용하고 있어서 알아두면 분석할때 좋음
 */

// 선언부 -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
    return;
  }
  console.log(a * 20);
}
console.log(func(1, 2, 3));
console.log(func(1)); // 구현부의 파라미터를 따르는게 아니라 선언부를 확인함
