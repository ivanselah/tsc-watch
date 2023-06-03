/**
 * * 타입 단언 <> 또는 as
 */

/*  
    타입스크립트에서 "타입을 단언한다"는 것은 
    개발자가 특정 값이나 표현식의 타입을 확실히 알고 있을 때 
    해당 타입으로 간주하도록 컴파일러에게 알려주는 것을 의미합니다. 
    이는 컴파일러에게 추가적인 타입 정보를 제공하여 정적 타입 검사를 우회하거나 개발자가 
    타입을 수동으로 지정할 필요가 있는 상황에서 사용될 수 있습니다
*/
const value: any = 'Hello';
console.log((<string>value).length);
console.log((value as string).length);

type Animal = {
  name: string;
  age: number;
};
const animalValue = {} as Animal;
// animalValue 객체를 초기화하려고 할 때 Animal 타입에는 name과 age 필드가 필수적으로 정의되어있어
// 빈 객체로 초기화할 수 없지만 타입 단언을 사용하여 컴파일러에게 해당 객체를 Animal 타입으로 간주하도록 알릴 수 있습니다.
// {} as Animal 구문을 사용하여 컴파일러에게 빈 객체를 Animal 타입으로 단언하고 있습니다.
// 이렇게 하면 컴파일러는 타입 검사를 통과하며, animalValue 변수는 Animal 타입으로 선언되었습니다
// ! 타입 단언을 사용하면 컴파일러가 해당 객체의 실제 타입 검사를 우회하게 되므로 해당 타입에 맞는 속성을 제공하는지 확인 필
