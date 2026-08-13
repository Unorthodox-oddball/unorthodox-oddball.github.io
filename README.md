# Unorthodox-oddball Portfolio & Blog

**Live:** https://unorthodox-oddball.github.io/

## 📋 프로젝트 개요

이것은 Unorthodox-oddball의 개인 포트폴리오 및 블로그 웹사이트입니다. 

### 핵심 특징

- **다크 테마 디자인**: 현대적이고 세련된 다크 배경 (RGB: #121212)
- **반응형 레이아웃**: 모바일 및 데스크톱 환경에 최적화된 Flexbox 기반 구조
- **인터랙티브 요소**: 호버 효과, 애니메이션, 모달 기능
- **멀티미디어 지원**: 이미지, GIF, 오디오 파일 통합
- **깔끔한 아키텍처**: 독립적인 페이지와 모듈식 스타일 시트

### 기술 스택

| 영역 | 기술 |
|------|------|
| **마크업** | HTML5 (한국어/영어 지원) |
| **스타일링** | CSS3 (커스텀 폰트, 애니메이션) |
| **인터랙션** | Vanilla JavaScript (DOM 조작, 이벤트 핸들링) |
| **폰트** | dovemayo.otf (커스텀 한글 폰트) |

---

## 📁 디렉토리 구조

```
unorthodox-oddball.github.io/
├── index.html               # 메인 홈페이지 (블로그 목록)
├── test.html                # 투표의 역설 상세 페이지
├── test2.html               # 오목(Gomoku) 게임
├── Stylesheet.css           # 글로벌 스타일시트
├── test.js                  # 공유 JavaScript 유틸리티
├── dovemayo.otf            # 커스텀 한글 폰트
├── README.md               # 이 파일
├── 리소스
│   ├── test.gif            # 메인 콘텐츠 이미지
│   ├── 00001-321918068.gif # 아티클 이미지
│   ├── zzzz.png            # README 배너 이미지
│   └── Hong Nan-pa...mp3   # 배경 음악
└── .github/                # GitHub Pages 설정
```

### 각 파일의 역할

- **index.html**: 블로그 홈페이지 - 3개의 아티클 카드를 그리드 레이아웃으로 표시
- **test.html**: 투표의 역설(Voting Paradox)에 대한 상세 콘텐츠 페이지 (모달 팝업 기능)
- **test2.html**: 오목 게임 (15×15 보드, 5개 연속 승리 조건)
- **Stylesheet.css**: 모든 페이지의 공통 스타일 (다크 테마, 애니메이션, 반응형)
- **test.js**: 공유 유틸리티 (폰트 로딩, 우클릭/F12 차단, 오디오 재생)

---

## 🎨 디자인 특징

### 색상 팔레트
- **배경**: `#121212` (다크)
- **카드 배경**: `#1f1f1f`
- **텍스트**: `#f5f5f5` (밝음), `#b3b3b3` (보조)
- **강조색**: `#FF69B4` (핫핑크)

### 애니메이션 & 인터랙션
- **아티클 카드**: 호버 시 회전 및 확대 (cubic-bezier 트랜지션)
- **스크롤바**: 커스텀 스타일 (핫핑크 색상)
- **페이드 인**: 페이지 로드 시 애니메이션
- **모달 팝업**: 클릭 시 상세 내용 표시

---

## 🚀 사용 방법

### 1. 로컬 프리뷰
```bash
# 저장소 클론
git clone https://github.com/Unorthodox-oddball/unorthodox-oddball.github.io.git

# 로컬 서버 실행 (Python 예시)
python -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000
```

### 2. GitHub Pages
- 저장소가 public이고 main 브랜치에 HTML/CSS/JS가 있으면 자동 배포
- https://unorthodox-oddball.github.io/ 에서 실시간 접속 가능

---

## 📝 페이지 안내

### 메인 페이지 (index.html)
- 3개의 블로그 아티클 카드 표시
- 각 카드: 이미지 + 제목 + 요약 + "Read more" 링크
- 반응형 그리드 (데스크톱 3열 → 모바일 1열)

### 투표의 역설 (test.html)
- Downs' Paradox에 대한 상세 분석
- 모달 기능으로 전체 내용 표시
- 배경 음악 자동 재생
- 인터랙티브 요소: 호버 효과, 애니메이션

### 오목 게임 (test2.html)
- 15×15 보드 게임
- 플레이어 X vs 플레이어 O
- 5개 연속 달성 시 승리
- 자동 리셋 기능

---

## ⚠️ 주요 개선 영역

### 현재 이슈
1. **테스트 파일명**: `test.html`, `test2.html`, `test.js` - 의도 불명확
2. **보안**: F12/우클릭/Ctrl 키 차단 - 사용자 경험 저해
3. **CSS 문법**: `Stylesheet.css` 122줄에 닫는 중괄호 중복
4. **하드코딩**: 파일 경로 절대 참조
5. **접근성**: 색상 대비, 키보드 네비게이션 미흡
6. **메타데이터**: SEO 최적화 부족

### 권장 개선사항
- 파일명을 명확하게 리팩토링 (voting-paradox.html, gomoku-game.html 등)
- 보안 차단 코드 제거 또는 선택적 적용
- CSS 구조 단순화 및 SASS/LESS 도입 검토
- 더 많은 콘텐츠와 카테고리 추가
- 시맨틱 HTML 마크업 강화
- 웹 표준 준수 (WCAG 접근성)

---

## 📞 연락처

- **GitHub**: [@Unorthodox-oddball](https://github.com/Unorthodox-oddball)
- **웹사이트**: https://unorthodox-oddball.github.io/

---

## 📄 라이선스

© 2023 - 2026 Unorthodox-oddball. All Rights Reserved.

---

**마지막 업데이트**: 2026년 8월 13일
