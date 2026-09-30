# 이진웅 React 포트폴리오

React · TypeScript · Vite로 구성한 GitHub Pages용 포트폴리오입니다. 첫 화면에는 프로젝트 썸네일과 짧은 소개만 두었습니다. 썸네일을 누르면 Ait·Dodam의 별도 페이지에서 기존 이미지 넘기기, 담당 기능, 주요 개발 경험과 추가 설명을 볼 수 있습니다.

프로젝트 페이지는 `/#/ait`, `/#/dodam` 주소로 바로 열 수 있습니다. 새로고침해도 GitHub Pages에서 열리도록 해시 주소를 사용했습니다.

## 실행

Node.js 24 환경에서:

```sh
npm ci
npm run dev
```

검증 및 배포 파일 생성:

```sh
npm run build
```

## 기존 저장소에 적용

1. 클론한 `jinung2359.github.io` 폴더에 이 프로젝트의 파일을 복사합니다. 기존 파일은 변경 내용을 비교하고 교체하세요. `.git` 폴더는 유지합니다.
2. `.github/workflows/pages.yml`, `package-lock.json`, `src`, `public`도 포함하여 커밋합니다. `node_modules`와 `dist`는 올리지 않습니다.
3. GitHub 저장소 **Settings → Pages → Source**를 기존 `Deploy from a branch`에서 **GitHub Actions**로 변경합니다. React 소스는 그대로 웹페이지가 되지 않으므로 이 변경이 필요합니다.
4. `main`에 푸시하면 포함된 워크플로가 빌드 후 Pages에 배포합니다.
5. Actions의 배포 완료를 확인한 뒤 `https://jinung2359.github.io`로 접속합니다.

아직 실제 GitHub 저장소에 적용·푸시하지 않았습니다.

## 내용 수정

- `src/projects.ts`: 프로젝트 설명, 담당 기능, 썸네일·화면 이미지 경로, 구현 사례
- `src/main.tsx`: 첫 화면 및 페이지 이동
- `src/ProjectDetail.tsx`: 프로젝트별 상세 내용
- `src/ProjectShowcase.tsx`: 기존 이미지 갤러리·담당 기능·개발 경험
- `src/styles.css`: 디자인과 반응형 스타일
- `public/images`: 프로젝트 이미지

## 화면 캡처

사용자가 제공한 바탕화면 `Ait_image`의 모든 화면 이미지 5장과 썸네일, `Dodam_image`의 대표 화면 6장과 썸네일을 사용했습니다. Ait 마이페이지는 공개용 사본에서 이름·이메일·GitHub 계정과 프로필 사진을 예시 정보로 바꾸었습니다. 바탕화면 원본은 수정하지 않았습니다.

- Ait 5장: 대시보드, AI 모의면접, 면접 리포트, 스터디 라운지, 마이페이지
- Dodam 6장: 홈, 발견, 리포트, 가계부, 브리핑, 구독 목록

기여 근거가 확인된 화면은 ‘내 기여’로, 프로젝트 이해를 돕기 위해 추가한 Ait 화면은 ‘프로젝트 화면’으로 구분했습니다. 화면 전체를 단독 구현했다는 의미가 아닙니다. 리포트처럼 개선 작업이 확인되는 화면은 '표시 개선'으로 범위를 한정했습니다.

이미지는 `public/images`에 추가하고 `src/projects.ts`의 images 배열에서 src, label, alt, note를 변경하면 교체됩니다. 자세한 선정 근거는 `SCREEN_SELECTION.md`를 참고하세요.

기간은 본인 커밋 기록 기준이고, 팀 전체 기능을 본인이 단독 구현한 것으로 표현하지 않았습니다. 비공개 프로젝트 코드는 이 포트폴리오에 포함하지 않았습니다.

Ait의 개발 배경·주요 기능은 사용자가 제공한 팀원 포트폴리오 설명을 참고해 새로 썼습니다. ‘담당 역할’은 별도로 확인한 본인 Git 기록의 범위로 한정했습니다.
