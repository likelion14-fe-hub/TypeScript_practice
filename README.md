# TypeScript Version

이 프로젝트는 JavaScript 프로젝트를 TypeScript로 변환한 버전입니다.

## 실행 환경

- Node.js
- TypeScript

## 설치 방법

프로젝트를 클론한 후 필요한 패키지를 설치합니다.

```bash
npm install
```

## TypeScript 컴파일

TypeScript 파일을 JavaScript로 컴파일합니다.

```bash
npx tsc
```

컴파일가 완료되면 `script.ts`를 기반으로 `script.js`가 생성(또는 갱신)됩니다.

## 실행 방법

브라우저에서 `index.html`을 실행합니다.

VS Code를 사용하는 경우 **Live Server** 확장을 이용하는 것을 권장합니다.

1. `index.html` 우클릭
2. **Open with Live Server**

## 프로젝트 구조

```text
.
├── index.html
├── style.css
├── script.ts
├── script.js
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 사용한 TypeScript 기능

- Interface
- Union Type
- Generic
- Type Annotation
- Type Assertion
- 명시적 반환 타입
- Strict Type Checking

## 개발 명령어

패키지 설치

```bash
npm install
```

TypeScript 컴파일

```bash
npx tsc
```

## 참고사항

- `script.ts`는 TypeScript 원본 파일입니다.
- `script.js`는 TypeScript 컴파일 결과입니다.
- `node_modules` 폴더는 GitHub에 포함하지 않습니다.
- 저장소를 클론한 후에는 반드시 `npm install`을 먼저 실행해야 합니다.
