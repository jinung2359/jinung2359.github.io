export type ProjectImage = { src: string; label: string; alt: string; note: string; contributed?: boolean };
export type Project = { id: string; name: string; category: string; date: string; thumbnail: string; tagline: string; description: string; tags: string[]; images: ProjectImage[]; contributions: string[]; caseStudies: { title: string; problem: string; implementation: string }[] };
export const projects: Project[] = [
  {
    id: 'ait', name: 'Ait', category: 'WEB APPLICATION', date: '2026.07 – 2026.08', thumbnail: 'images/ait-thumbnail.png',
    tagline: '면접 연습을 함께하는 공간',
    description: 'AI 모의 면접과 실시간 화상 스터디를 연결한 개발자 면접 준비 플랫폼.',
    tags: ['React', 'TypeScript', 'LiveKit', 'Tailwind CSS'],
    images: [
      { src: 'images/ait-dashboard-screen.png', label: '대시보드', alt: 'Ait 대시보드의 면접 레벨, 최근 면접 기록, 점수 추이 화면', note: '나의 면접력 패널·최근 기록 캐러셀 구현 및 점수 추이 표시 개선' },
      { src: 'images/ait-mock-interview-screen.png', label: 'AI 모의면접', alt: 'Ait AI 모의면접의 영상 질문, 타이머, 답변 중인 사용자 화면', note: '질문·타이머·영상 응답을 한 화면에서 확인하는 모의면접 진행 UI', contributed: false },
      { src: 'images/ait-report-screen.png', label: '면접 리포트', alt: 'Ait 면접 리포트의 종합 점수, 역량 차트와 질문별 피드백', note: '리포트 모달의 집계·차트·진행시간 표시 개선' },
      { src: 'images/ait-lounge-screen.png', label: '스터디 라운지', alt: 'Ait 스터디 상세의 세션 시작, 구성원과 그룹톡 화면', note: '스터디 세션 진입·그룹톡 연동 및 상세 화면 개선' },
      { src: 'images/ait-mypage-screen.png', label: '마이페이지', alt: 'Ait 마이페이지의 프로필, 등록한 레포지토리와 서류함 화면. 개인 정보는 예시 정보로 대체됨', note: '프로필·레포지토리·서류함을 함께 보여주는 마이페이지 UI', contributed: false },
    ],
    contributions: ['면접 설문부터 진행 화면까지 사용자 흐름 구현', '화상방·장치 설정·채팅·상호평가 연동', '로그인·프로필·GitHub 연결 및 대시보드 개선'],
    caseStudies: [
      { title: '이미지 로딩 오류와 인증 만료 처리 분리', problem: '이미지 요청의 401 오류가 전체 로그아웃으로 전파', implementation: '이미지 오류를 개별 요청 실패로 분리\n일반 API의 세션 만료 처리는 유지' },
      { title: '채팅 연결 오류 감지 및 재연결 안내', problem: '연결 종료 이벤트 없이 채팅 전송만 실패하는 상황 발생', implementation: '채팅 연결 오류 감지 후 재연결 안내\n전송 실패 메시지를 입력창에 복원' },
      { title: '서버 기반 스터디 검색·페이지네이션 전환', problem: '최대 100개 선조회 후 검색 → 조회 범위 밖의 결과 누락 가능', implementation: '서버 검색·필터·정렬과 6개 단위 페이지 조회\n300ms 디바운스 및 조건 변경 시 첫 페이지 재조회' },
    ],
  },
  {
    id: 'dodam', name: 'Dodam', category: 'MOBILE APPLICATION', date: '2026.08 – 2026.09', thumbnail: 'images/dodam-thumbnail.png',
    tagline: '오늘의 금융 행동이 목표일을 바꿉니다',
    description: '자산과 소비를 살펴보고, 금융 진단에서 AI 상담으로 이어지는 청년 금융 코치 앱.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Expo Router'],
    images: [
      { src: 'images/dodam-home-screen.png', label: '홈', alt: '도담 홈의 목표 카드, 월 지출과 데일리 브리핑 진입 화면', note: '홈 UI 구현과 목표·브리핑·소비 데이터 연동' },
      { src: 'images/dodam-discovery-screen.png', label: '발견', alt: '도담 발견의 금융 진단 요약과 우선 확인 목록', note: '발견 요약·목록 UI 구현과 진단·추천 API 연동' },
      { src: 'images/dodam-report-screen.png', label: '리포트', alt: '도담 월간 리포트의 금융 효율 점수와 또래 비교 차트', note: '리포트 UI·실데이터 연동 및 점수·비율·또래 위치 표현 개선' },
      { src: 'images/dodam-ledger-screen.png', label: '가계부', alt: '도담 가계부의 월 지출, 소비 항목과 거래 내역', note: '가계부 화면 UI·날짜 탐색 구현과 카테고리 아이콘 표시' },
      { src: 'images/dodam-briefing-screen.png', label: '브리핑', alt: '도담 데일리 브리핑의 소비 요약과 목표 달성 예상일', note: '브리핑 UI 구현 및 소비·목표·현금흐름 데이터 연동' },
      { src: 'images/dodam-subscriptions-screen.png', label: '구독 목록', alt: '도담에서 이용 중인 구독 서비스와 월 요금을 보여주는 화면', note: '구독 목록 화면 추가 및 서버 iconKey 기반 아이콘 연결' },
    ],
    contributions: ['공통 라우팅·온보딩과 홈·가계부·리포트 화면 구현', '공통 API 클라이언트와 인증 세션 처리 보강', '금융 진단 연동 및 AI 상담에 진단 맥락 전달'],
    caseStudies: [
      { title: '홈 지출 금액과 목표 예산의 기준월이 다름', problem: '홈의 지출은 지난달, 목표 예산은 이번 달 기준으로 표시', implementation: '지출·소비 TOP 3를 이번 달 기준으로 조회\n비교 대상은 지난달로 조정' },
      { title: '세이프박스 금액 입력 시 키보드가 버튼을 가림', problem: '금액 입력 모달이 키보드 위로 올라오지 않아 진행 버튼이 가려짐', implementation: '모달에 키보드 대응 레이아웃 적용\n입력 중에도 금액과 버튼을 볼 수 있게 조정' },
      { title: '리포트 수치가 화면마다 다르게 보임', problem: '관리 점수·기간 평균 비율·또래 위치가 비슷한 표현으로 표시', implementation: '지표별 이름과 기준 기간을 명시\n점수·실제 비율·상대 위치를 화면에서 구분' },
    ],
  },
  {
    id: 'geomate', name: 'Geomate', category: 'TABLET & WEB APPLICATION', date: '2026.10 – 2026.11', thumbnail: 'images/geomate-student-class.png',
    tagline: '도형을 직접 만지며 이해하는 기하 학습',
    description: '학생이 태블릿에서 도형을 돌리고 펼치며 탐구하고, 선생님과 함께 학습을 이어가는 기하 학습 서비스.',
    tags: ['TypeScript', 'React Native', 'Expo', 'TanStack Query', 'Zustand', 'React · Vite'],
    images: [
      { src: 'images/geomate-role-choice.png', label: '시작 화면', alt: '학생과 선생님 중 시작 역할을 고르는 화면', note: '학생·선생님으로 이어지는 서비스의 시작 화면', contributed: false },
      { src: 'images/geomate-experience-rotate.gif', label: '도형 체험', alt: '입체도형을 돌려 숨은 별을 찾는 가입 체험', note: '가입 체험의 도형 상호작용·계산과 강조 효과 구현. 전체 화면 흐름은 팀원과 공동 작업' },
      { src: 'images/geomate-experience-fold.gif', label: '전개도 접기', alt: '전개도를 접어 입체도형을 완성하는 가입 체험', note: '전개도 접기 단계의 상호작용과 도형 계산 구현. 가입 흐름은 팀원과 공동 작업' },
      { src: 'images/geomate-experience-section.gif', label: '단면 맞히기', alt: '입체도형을 자를 때 생기는 단면을 고르는 가입 체험', note: '단면을 예상하는 가입 체험의 상호작용·도형 계산 구현. 전체 흐름은 팀원과 공동 작업' },
      { src: 'images/geomate-student-class.png', label: '학생 클래스', alt: '캐릭터와 칠판이 보이는 학생 클래스 참여 화면. 선생님 이름은 가려진 공개용 캡처', note: '클래스 참여·반 전환 화면 구현. 선생님 이름은 공개용 이미지에서 가림' },
      { src: 'images/geomate-concept-net.gif', label: '개념학습', alt: '전개도를 접으면 만나는 점을 영상과 도형으로 설명하는 개념학습 화면', note: '전개도와 입체의 관계를 영상으로 살펴보는 팀 서비스 화면. 개념학습 콘텐츠와 렌더러는 팀원 작업', contributed: false },
      { src: 'images/geomate-solve-rotate.gif', label: '도형 조작', alt: '문제 풀이 중 직육면체를 돌려 보는 학습 공간', note: '3D 도형 조작과 문제 풀이 공간을 보여주는 팀 서비스 화면. 도형 렌더러와 풀이 기능은 팀원 작업', contributed: false },
      { src: 'images/geomate-teacher-quest.png', label: '퀘스트 만들기', alt: '선생님이 문제를 선택하고 퀘스트 제목과 마감일을 지정하는 화면', note: '문제·학생 선택, 마감 설정과 퀘스트 배포 흐름 및 API 연동' },
      { src: 'images/geomate-admin-reports.png', label: '신고 관리', alt: '관리자 웹에서 문제 해석 오류 신고를 검색하고 상태별로 살펴보는 화면', note: '관리자 웹의 신고 목록·검색·상태별 조회와 처리 흐름 구현' },
      { src: 'images/geomate-admin-coin.png', label: '코인 지급', alt: '관리자 웹에서 지급 코인과 사유를 입력하는 창', note: '계정 조회와 코인 지급 입력·검증·결과 안내 구현' },
    ],
    contributions: ['관리자 웹의 대시보드·신고·계정 관리와 공통 인증·조회 흐름 구현', '선생님 앱의 반 관리·퀘스트 배포·질문함 화면 및 API 연동', '학생 클래스·학습 기록과 가입 체험의 도형 상호작용 구현'],
    caseStudies: [
      { title: '태블릿에서 조작 기록 답변이 전송되지 않음', problem: '웹에서 되던 Blob 첨부가 Android의 FormData에서 거절됨', implementation: '조작 기록을 임시 파일로 저장해 uri로 첨부\n전송 뒤 파일을 정리하고 기기·테스트로 확인' },
      { title: '서버 재시작 중 화면마다 다른 오류가 나타남', problem: '게이트웨이 오류 하나만으로 점검 상태를 판단하면 오탐 가능', implementation: '서버 상태를 재확인해 점검 화면을 표시\n복구 뒤 실패한 조회만 다시 요청' },
      { title: '태블릿 키보드가 입력칸을 가림', problem: '화면 끝까지 그리는 Android 환경에서 키보드가 떠도 앱 영역이 줄지 않음', implementation: '키보드가 가리는 높이를 재는 공통 훅 구현\n입력 영역에 여백을 주어 기기에서 표시 확인' },
    ],
  },
];
