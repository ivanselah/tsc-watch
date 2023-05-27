/**
 * JavaScript
 * Primitive : number, string, boolean, bigint, symbol, null, undefined
 * Object: function, array, ....
 */

// number
const num: number = 1;
// string
const str: string = 'hello';
// boolean
const bool: boolean = false;
// undefined
let age: number | undefined;
// null
let person: string | null;

// 리터럴 타입 (리터럴 뜻 : 값)
// (값으로 타입을 정의)
let numA: 10 = 10;
numA = 10;

// unknown 무슨타입인지 모르겠다 아직 결정되지 않았다. ❌ 안쓰는게 좋음
let notSure: unknown = 0;
notSure = 'world';
notSure = true;

// any 난 어떤 것이든 다 담을 수 있다. ❌ 안쓰는게 좋음
let anything: any = 0;
anything = 'hello';

// void 아무것도 리턴하지 않을 때, 생략할 수 있음
function print(): void {
  console.log('hello world');
}

// never 절대 절대 리턴할 것이 없다.
function throwError(message: string): never {
  throw new Error(message);
  /* 
            while(true) { }
        */
}

// object 원시타입을 제외한 모든 것들. ❌ 안쓰는게 좋음
let obj: object;
function someObject(obj: object) {}
