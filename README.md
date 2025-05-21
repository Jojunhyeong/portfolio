# 🧑‍💻 Josh's Portfolio

안녕하세요! 프론트엔드 개발자 조준형의 포트폴리오 웹사이트입니다.  
실제 이력서 제출과 개발 활동 소개를 목적으로 제작하였습니다.

<br />

## 🚀 데모

👉 [joshportfolio.com](https://joshportfolio.com)

<br />

## 🛠️ 사용 기술

- **Vite + React + TypeScript**
- **Tailwind CSS** - 빠르고 유연한 스타일링
- **zustand** - 전역 상태 관리 (영상 모달 등)
- **React Icons** - 소셜 아이콘 및 UI 요소
- **Framer Motion** - 커리어 타임라인 애니메이션
- **Vercel** - 정적 사이트 배포

<br />

## 📁 주요 기능

- **섹션별 구성**: 소개, 기술 스택, 프로젝트, 블로그, 커리어, 연락처
- **프로젝트 카드**
  - Hover 시 영상 미리보기 (자동재생)
  - 클릭 시 전체 영상 모달 재생 (zustand 관리)
- **블로그 카드**
  - Velog 게시글 3개 선택 노출
  - "더 많은 글 보러가기" 링크
- **커리어 타임라인**
  - Intersection Observer로 애니메이션 등장
  - 양쪽 정렬로 가독성 강화
- **네비게이션 라우팅**
  - 스크롤 시 현재 섹션 강조
  - 부드러운 이동 지원
- **연락처 섹션**
  - 이메일 링크, 소셜 미디어, 이력서 다운로드 제공

<br />

## 🧩 배포 환경에서 겪은 이슈

- `src/assets` 경로에서 이미지를 불러올 경우 Vercel 배포 시 이미지가 깨지는 문제가 발생  
→ `public/assets`로 옮기고 절대 경로(`/assets/...`)로 변경해 해결

자세한 내용은 [Velog 글](https://velog.io/@jojh0323/Vercel로-포트폴리오-배포하며-겪은-이미지-깨짐-이슈-해결기) 참고

<br />

## ✍️ 프로젝트 목적

이 포트폴리오 웹사이트는 다음을 목표로 제작되었습니다:

- **개발자 이력서** 제출 시 참고 자료로 사용
- 나의 개발 경험과 기술 스택, 프로젝트 성과를 한눈에 정리
- 꾸준한 블로그 작성과 기술 콘텐츠 공유 유도

<br />

## 📬 연락하기

- 이메일: jojh0323@gmail.com  
- GitHub: [github.com/Jojunhyeong](https://github.com/Jojunhyeong)  
- Velog: [velog.io/@jojh0323](https://velog.io/@jojh0323)

