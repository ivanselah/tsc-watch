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
func(1, 2, 3);
func(1); // 구현부의 파라미터를 따르는게 아니라 선언부를 확인함

/**
 * * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};
// 서로소 유니언타입을 사용할 수 없다고 가정한다
// 타입스크립트에게 반환값으로 알수 있도록 명시해준다.
function isDog(animal: Animal): animal is Dog {
  // <- animal Dog 타입이라면(true)
  return (animal as Dog).isBark !== undefined;
}

type Animal = Dog | Cat;
function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark); // isBark 접근 가능
  } else {
    console.log(animal.isScratch);
  }
}
