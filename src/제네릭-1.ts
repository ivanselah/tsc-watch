function func<T>(value: T) {
  return value;
}

// 튜플 타입
func<[number, number, string]>([1, 2, '']);

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

returnFirstValue([1, 'hello', 2]);

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength([1, 2, 3]);
getLength('hello');
// getLength(10) error number에는 length 가 존재하지 않음

/**
 * map 메서드
 */

function map<T, U>(arr: T[], callback: (item: T) => U) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const arr = [1, 2, 3];
console.log(map(arr, (item) => item * 2));
console.log(map(['hi', 'hello'], (item) => parseInt(item)));

/**
 * forEach 메서드
 */

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (item) => {
  console.log(item);
});
