const myModule = (function () {
  let privateNumber = 1;
  const privateMethod = () => ++privateNumber;

  return {
    publicNumber: privateNumber,
    publicMethod: () => privateMethod()
  }
})();

console.log(myModule.publicMethod());
console.log(myModule.publicMethod());
console.log(myModule.publicMethod());

// 모듈 패턴의 기본 구조

const myApp = myApp || {} // namespace 패턴

/**
 * 공개 범위와 비공개 범위를 나누어 캡슐화 한다.
 * 공개 범위: 반환되는 객체 인터페이스
 * 비공개 범위: 익명 함수의 내부 선언 변수 및 함수
 */
myApp.myModule = (function () {
  // 비공개 범위

  return {
    // 공개 범위
  }
})();
