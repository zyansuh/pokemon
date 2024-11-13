```markdown
# My Pokemon Dex

나만의 포켓몬 도감 프로젝트입니다. 이 애플리케이션은 React, Vite를 사용하여 제작되었으며, 포켓몬 목록을 조회하고, 포켓몬을 선택하여 나만의 도감을 만들 수 있습니다. 프로젝트에서는 `props-drilling`과 `Context API`를 활용한 상태 관리 방법을 학습할 수 있습니다.

## 목차
- [프로젝트 설명](#프로젝트-설명)
- [기능](#기능)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [브랜치 구조](#브랜치-구조)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)

## 프로젝트 설명

이 프로젝트는 포켓몬 도감을 만드는 간단한 웹 애플리케이션으로, React의 상태 관리와 이벤트 핸들링을 익히기 위해 만들어졌습니다. 포켓몬을 목록에서 선택하여 도감에 추가하거나, 상세 정보를 확인하고, 도감에서 삭제할 수 있습니다.

## 기능

- 포켓몬 목록 조회
- 포켓몬을 도감에 추가 및 삭제
- 포켓몬 상세 정보 확인
- `props-drilling`과 `Context API`를 통한 상태 관리 학습

## 설치 및 실행 방법

### 사전 요구 사항
- Node.js 설치 필요

### 설치

1. 저장소를 클론합니다.

   ```bash
   git clone https://github.com/zyansuh/pokemon.git
   cd pokemon
   ```

2. 패키지를 설치합니다.

   ```bash
   npm install
   ```

### 실행

```bash
npm run dev
```

```브라우저에서 `http://localhost:5173`으로 접속하여 애플리케이션을 확인할 수 있습니다.
https://pokemon-4unm.vercel.app/ vercel이용하여 배포도 완료.```

### 빌드

```bash
npm run build
```

## 브랜치 구조

- `main`: 기본 브랜치로, 최종적으로 완성된 코드를 포함합니다.
- `props-drilling`: `props-drilling` 방식을 사용하여 상태 관리를 구현한 브랜치입니다.
- `context`: `Context API`를 사용하여 상태 관리를 구현한 브랜치입니다.

각 브랜치의 코드를 확인하여 상태 관리 방식의 차이를 학습할 수 있습니다.

## 기술 스택

- **Frontend**: React, Vite
- **Styling**: Styled-components
- **Routing**: React Router
- **Deployment**: Vercel

## 폴더 구조

```plaintext
├── public                # 정적 파일
├── src
│   ├── Components        # 재사용 가능한 컴포넌트
│   ├── Pages             # 페이지 컴포넌트
│   ├── context           # Context API 관련 파일
│   ├── Data              # 포켓몬 목록과 같은 데이터 파일
│   ├── App.jsx           # 메인 앱 컴포넌트
│   └── main.jsx          # React DOM 렌더링
└── package.json          # 종속성과 스크립트 정보
```

## 배포

이 프로젝트는 Vercel을 사용하여 배포되었습니다. 배포된 웹사이트에서 프로젝트를 확인할 수 있습니다.

---

## 참고 자료

- [React 공식 문서](https://reactjs.org/docs/getting-started.html)
- [Vite 공식 문서](https://vitejs.dev/guide/)
- [Styled-components](https://styled-components.com/docs)
- [Vercel](https://vercel.com/docs)

```

설명
- 개요: 나만의 포켓몬 도감을 만들어보기.
- 설치 및 실행 방법: npm run dev. 또는 yarn dev 로 실행
- 브랜치 구조: 각 브랜치의 용도와 목적을 설명하여 학습에 도움이 되도록 합니다.
- 기술 스택과 폴더 구조 : 사용된 기술과 프로젝트 폴더 구조를 간략히 설명합니다.

