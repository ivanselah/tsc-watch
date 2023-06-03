// 오버로딩 시그니쳐를 사용하려면 함수 타입 말고 호출 시그니쳐를 사용해야 합니다.
interface Person {
  name: string;
  sayHi(): void; // <- 호출 시그니쳐 // sayHi : () => void; <- 함수 타입
  sayHi(a: number): void;
}

const person: Person = {
  name: 'ivanselah',
  sayHi(a?: number) {
    console.log('hi', a);
  },
};

person.sayHi();
person.sayHi(7);

interface Dog {
  isBark: boolean;
}
interface Cat {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  isBark: true,
  isFly: true,
};

/**
 * * 선언 합침
 * * 보통 사용 하지 않지만 라이브러리에서 커스텀하게 타입을 보강할 때 사용 할 수 있습니다.
 */
// interface 의 경우 동일한 이름을 선언해도 문제가 되지 않음 => 즉 합쳐 짐

interface MyPerson {
  name: string;
}
interface MyPerson {
  age: number;
}

const myPerson: MyPerson = {
  name: '',
  age: 25,
};
