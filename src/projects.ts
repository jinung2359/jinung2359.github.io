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
];
