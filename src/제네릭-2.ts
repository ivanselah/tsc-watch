/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

const keyPair: KeyPair<string, number> = {
  key: '',
  value: 0,
};

/**
 * 인덱스 시그니쳐
 */

interface MyNumber<V> {
  [key: string]: V;
}

const myNumber: MyNumber<number> = {
  key: 0,
};

/**
 * 제네릭 클래스
 */

class SuperList<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new SuperList([1, 2, 3]);
const stringList = new SuperList(['1', '2', '3']);

/**
 * * 제네릭 프로미스
 */

// response 타입 선언 방법 1
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => console.log(response));

interface Post {
  id: number;
  title: string;
}

// response 타입 선언 방법 2 <추천> - 선언부만 보고 알수 있음
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '프로미스 제네릭 테스트',
      });
    }, 3000);
  });
}

const excuteFetchPost = fetchPost();
excuteFetchPost.then((post) => {
  console.log(post.title);
});
