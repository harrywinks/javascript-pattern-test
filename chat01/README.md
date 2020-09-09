# 좋은 소프트웨어 만들기


### SOLID 객체 지향 원칙

- Single Responsibility Principle
- Open / Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle


> Single Responsibility Principle (단일 책임 원칙)

    클래스, 함수는 하나의 책임만을 가진다.
    복수의 책임을 하나의 함수가 담당하게 된다면 오류에 대한 디버깅과 유지보수또한 어렵게 된다.
    좋은 프로그래밍을 위해 내가 만든 함수들의 책임 범위를 좁게 하는 습관을 들이자.
    
> Open / Closed Principle (개방/페쇄 원칙)

    확장 가능성은 열어두되, 수정 가능성은 닫아야 한다.
    변경점이 일어났을때 코드 변경보다는 (상속과 같은 방법으로) 재사용및 확장을 위한 추상화 코드를 작성한다.

> Liskov Substitution Principle (리스코프 치환 원칙)

    어떤 타입에서 파생된 타입의 객체가 있다면 이 타입을 사용하는 코드는 변경하지 말아야 한다.
    
> Interface Segregation Principle (인터페이스 분리 원칙)

    인터페이스란 클래스에서 어떤 기능을 '구현'하지 않고 (명칭, 파라미터, 반환 타입을) '서술'만 한 코드 조각이다
    자바스크립트는 인터페이스가 없지만 이와 같이 함수에 들어오는 인자에 대한 타입을 구체화 하며 강제하는 정규 방안을 제시할수 있다.
    
> Dependency Inversion Principle (의존선 역전 원칙)

      
### 그밖에

> KISS (Keep It Simple Stupid)
```
 - 단순하고 간결하게 코드를 짜라.
```

> YAGNI - (You Aint't Gonna need it)

```
- 정말 필요할 때까지 그 기능을 만들지 말라.
```

> DRY (Don't Repeat YourSelf)

```
- 중복을 피하라.
```
