/**
 * T : 제네릭은 결국 unknown 타입이다.
 * ! 함수 내부에서 T 도 결국 알수 없으므로 조건부 타입을 알 수 없다.
 * * 함수 오버로딩을 사용하면 해결 가능
 * * 오버로딩 시그니쳐의 타입을 따라간다.
 */

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: T) {
  if (typeof text === 'string') {
    return text.replace(' ', '');
  } else {
    return undefined;
  }
}

const result = removeSpaces('Hello World');
console.log(result.toUpperCase());
