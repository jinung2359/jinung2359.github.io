import { useEffect } from 'react';
import type { Project } from './projects';
import { ProjectShowcase } from './ProjectShowcase';

type DetailContent = {
  overview: string;
  journey: { step: string; title: string; detail: string }[];
  background?: { title: string; detail: string }[];
  features?: { title: string; detail: string }[];
  roles?: { title: string; detail: string }[];
  screens: { detail: string; evidence: string }[];
  stories: { why: string; cause?: string; how: string; after: string }[];
};

const content: Record<string, DetailContent> = {
  ait: {
    overview: 'Ait는 개발자 면접 준비의 개인 연습과 팀 스터디를 연결한 웹 서비스입니다. 이력서·자기소개서·GitHub 저장소를 참고해 AI 면접 질문을 만들고, 음성 답변과 비언어 정보를 바탕으로 리포트를 제공합니다. 이후 화상 스터디에서 함께 연습하고 상호 평가하며, 대시보드에서 면접 기록과 점수 변화를 확인할 수 있습니다.',
    background: [
      { title: '흩어진 준비 과정', detail: '스터디 모집, 화상 연습, 자료 공유, 피드백을 여러 도구에서 따로 관리해야 하는 불편을 한 서비스의 흐름으로 연결했습니다.' },
      { title: '내 경험에 맞는 질문', detail: '일반적인 예상 질문을 반복하는 대신, 지원자의 서류와 GitHub 프로젝트를 참고하는 면접 연습을 목표로 했습니다.' },
      { title: '반복 가능한 피드백', detail: '혼자 연습한 결과를 리포트로 확인하고, 스터디원의 평가와 함께 다음 연습에 활용할 수 있도록 구성했습니다.' },
    ],
    features: [
      { title: '자료 기반 질문', detail: '이력서·자기소개서·GitHub 저장소를 참고해 기술·인성·CS 면접 질문 생성' },
      { title: 'AI 모의면접', detail: '면접관 스타일 선택, 음성 질문과 답변, 답변에 따른 꼬리 질문' },
      { title: '면접 리포트', detail: '답변 내용과 표정·시선 정보를 함께 정리한 평가와 역량 차트' },
      { title: '화상 스터디', detail: '실시간 화상 세션과 화면 공유를 통한 동료 면접 연습' },
      { title: '스터디 협업', detail: '그룹톡·자료실·스터디원 상호 평가로 연습 과정 공유' },
      { title: '성장 대시보드', detail: '최근 면접·스터디 기록과 회차별 점수 변화 확인' },
    ],
    roles: [
      { title: 'AI 면접 준비와 진행', detail: '면접 유형·지원 정보·면접관 스타일을 고르는 설문 흐름과 질문 생성 시점을 연결했습니다. 진행 화면의 사용자 흐름, 비언어 데이터 수집·전송 관련 작업에도 참여했습니다.' },
      { title: '화상 스터디 경험', detail: '입장 전 대기 화면과 회의방, 장치 설정, 그룹톡과 상호 평가의 화면 연동을 맡았습니다. 채팅 전송 실패를 재연결 안내로 이어 사용자에게 복구 경로를 보여줬습니다.' },
      { title: '인증·프로필·GitHub 연결', detail: '이메일 인증과 로그인 흐름, 프로필 수정, GitHub 저장소 연결 및 연결 상태에 따른 화면 갱신을 작업했습니다.' },
      { title: '기록과 탐색 화면', detail: '대시보드의 면접력 패널·최근 기록 캐러셀과 리포트 표시를 다듬었습니다. 스터디 검색은 서버 필터·정렬과 페이지 단위 조회로 전환했습니다.' },
      { title: '오류 영향 범위 조정', detail: '보호된 이미지 한 장의 요청 실패가 전체 로그아웃으로 이어지지 않게 인증 오류 처리를 분리했습니다. 실시간 연결 문제도 사용자에게 알리고 다음 행동을 이어갈 수 있게 했습니다.' },
    ],
    journey: [
      { step: '01', title: '면접 준비', detail: '면접 유형·지원 정보·스타일을 고르는 설문과 질문 생성 시점 연결' },
      { step: '02', title: '면접 및 스터디', detail: '면접 진행 화면, 화상방 입장, 장치 설정, 채팅과 상호평가 연동' },
      { step: '03', title: '기록 확인', detail: '최근 면접·스터디 기록, 면접력 패널과 리포트 화면 개선' },
    ],
    screens: [
      { detail: '최근 면접과 스터디 기록을 캐러셀로 모으고, 면접력 패널에 평가 정보를 반영했습니다. 점수 추이 그래프와 좁은 화면의 표시 문제도 수정했습니다.', evidence: '관련 작업: 0289bf6 · 6fc39f1 · 6248ebd · 5e6e49b' },
      { detail: 'AI 면접관의 질문을 보며 답변을 녹화하는 흐름입니다. 프로젝트의 핵심 경험을 보여주는 팀 화면으로 소개합니다.', evidence: '' },
      { detail: '면접 기록 리포트의 집계값과 차트 표시를 수정하고, 값이 있을 때 진행 시간을 노출하도록 보완했습니다.', evidence: '관련 작업: 7251ab8 · 1e99896' },
      { detail: '그룹톡을 서버와 연동하고 세션 입장 흐름, 스터디 상세 화면의 동작을 다뤘습니다. 화면 전체나 관리자 기능 모두를 단독 구현했다는 뜻은 아닙니다.', evidence: '관련 작업: 6c09b19 · 9015342 · 8d8517e' },
      { detail: '프로필과 등록한 레포지토리, 이력서·자기소개서를 한곳에서 관리하는 화면입니다. 화면에 보이던 개인 정보는 예시 정보로 대체했습니다.', evidence: '' },
    ],
    stories: [
      { why: '게시글 썸네일이나 그룹톡 이미지 한 장이 401로 실패했을 때, 화면 데이터는 정상이어도 사용자가 로그아웃되는 문제가 있었습니다.', cause: '이미지 요청 함수가 401 응답을 일반 API와 같은 전역 인증 만료 이벤트로 전달했습니다. 개별 파일의 로딩 실패와 실제 세션 만료를 구분하지 못한 상태였습니다.', how: '이미지 요청 경로에서는 전역 인증 만료 이벤트를 발생시키지 않고 해당 요청의 오류만 반환하도록 바꿨습니다. 화면 데이터를 가져오는 일반 API의 401 처리는 그대로 유지했습니다.', after: '이미지 한 장의 실패는 그 이미지에만 영향을 주고, 세션 만료는 화면 데이터 요청에서 별도로 판단합니다.' },
      { why: '화상방이 조용히 끊기면 연결 종료 이벤트가 오지 않아도 채팅 전송은 연결 상태 오류로 실패했습니다. 사용자는 전송 실패의 이유를 알기 어려웠습니다.', cause: '채팅 전송에서 LiveKit의 UnexpectedConnectionState가 발생했지만, 이를 화상방의 재연결 안내와 연결하지 않았습니다. 평가 진행률 전송이 카메라·마이크의 초기 연결 과정과 겹치는 상황도 확인했습니다.', how: '채팅 전송 오류를 상위 화상방에 전달해 기존 재연결 안내를 열고, 보내지 못한 메시지는 입력창에 복원했습니다. 평가 진행률은 1.5초 지연해 보내고 짧은 시간의 변경은 한 번으로 묶었습니다.', after: '연결 종료 이벤트를 놓쳐도 채팅 실패를 통해 재연결 안내로 진입할 수 있습니다. 초기 연결 중 데이터 전송이 겹치는 상황도 완화했습니다.' },
      { why: '스터디 목록을 최대 100개만 먼저 받아 화면에서 검색·정렬하면, 그 밖의 스터디는 결과에 나타날 수 없었습니다.', cause: '검색과 필터가 서버의 전체 목록이 아닌 브라우저에 이미 내려온 일부 데이터에만 적용됐습니다. 화면에 보이는 개수도 서버의 전체 건수와 달랐습니다.', how: '검색어·모집 상태·정렬을 서버 요청으로 옮기고 페이지당 6개씩 조회했습니다. 검색 입력에는 300ms 지연을 적용하고, 조건이 바뀌면 첫 페이지부터 다시 받아오도록 했습니다.', after: '더보기는 다음 페이지를 서버에서 가져옵니다. 전체 건수와 마지막 페이지 여부도 서버 응답을 기준으로 표시합니다.' },
    ],
  },
  dodam: {
    overview: '도담은 금융 목표를 기준으로 자산·소비·대출·예적금 데이터를 살펴보고, 목표 달성을 방해하는 요인과 개선 행동의 효과를 보여주는 개인 금융 코치 앱입니다. SSAFY 교육용 금융망 데이터를 바탕으로 현황 확인부터 진단, 시뮬레이션, AI 상담, 실행 이후의 변화 확인까지 한 흐름으로 연결합니다.',
    background: [
      { title: '목표와 떨어진 금융 현황', detail: '자산과 소비 내역을 보는 것만으로는 현재 상태가 내 목표 달성에 적절한지 판단하기 어려웠습니다. 목표 금액과 시점을 기준으로 현황을 해석하고자 했습니다.' },
      { title: '개선 행동의 우선순위', detail: '소비 증가, 높은 대출금리, 저축액 변경처럼 선택지가 여럿일 때 무엇이 목표 달성일을 얼마나 앞당기는지 비교할 방법이 필요했습니다.' },
      { title: '미리 보는 현금 부족', detail: '카드결제·대출상환·적금납입 등이 겹치는 날에는 월간 합계만으로 부족할 수 있습니다. 예정 입출금으로 위험 시점을 미리 확인하는 흐름을 마련했습니다.' },
    ],
    features: [
      { title: '목표와 세이프박스', detail: '모으기·줄이기 목표 설정, 목표별 금액 관리와 계좌 간 보내기·되가져오기' },
      { title: '발견과 진단', detail: '소비 증가·고금리 대출·목표 지연 등을 찾고 개선할 항목을 우선순위로 제시' },
      { title: '행동 시뮬레이션', detail: '소비·저축·대출 조건을 바꿨을 때 목표 달성 예상일과 절감 효과 비교' },
      { title: '금융 리포트', detail: '금융 효율 점수, 소비 유형·또래 비교, 예상 소비와 기준 기간 표시' },
      { title: '토리 AI 코치', detail: '선택한 진단과 추천 정보를 이어받아 금융 상황에 맞는 상담 제공' },
      { title: '현금흐름 예측', detail: '예정 입출금을 바탕으로 잔액이 부족해질 수 있는 시점 안내' },
      { title: '가계부와 자산', detail: '거래 내역·카테고리별 소비와 계좌·카드·대출·예적금 현황 조회' },
      { title: '브리핑과 알림', detail: '소비·목표·현금흐름을 홈에서 요약하고 필요한 금융 일정을 알림으로 연결' },
    ],
    roles: [
      { title: '공통 화면과 인증 흐름', detail: '공통 API 클라이언트와 화면 상태·오류 재시도를 구성하고, 로그인·금융망 연결을 API에 연동했습니다. 토큰 재발급과 세션 만료 처리도 보강했습니다.' },
      { title: '목표·계좌·시뮬레이션', detail: '목표 생성·조회·수정, 연결 계좌와 진행 현황을 화면에 연결했습니다. 세이프박스의 보내기·되가져오기 화면과 소비 감소·저축액 변경 시뮬레이션 결과 조회를 구현했습니다.' },
      { title: '홈·가계부·자산', detail: '홈의 목표·브리핑·소비 요약, 가계부의 날짜 탐색과 거래 카테고리, 자산 조회 화면을 구현하고 실데이터를 연동했습니다.' },
      { title: '발견과 AI 상담 연결', detail: '발견 목록·상세의 진단과 추천 API를 연결하고 카테고리별 분석을 화면에 정리했습니다. 발견에서 상담으로 이동할 때 선택한 진단 맥락과 첫 조언을 전달했습니다.' },
      { title: '리포트·브리핑·알림', detail: '월간 리포트와 데일리 브리핑을 실제 데이터에 연결했습니다. 점수·비율·또래 위치의 의미와 기준 기간을 구분하고, 알림 목록의 읽음 상태와 이동 경로를 다듬었습니다.' },
    ],
    journey: [
      { step: '01', title: '현황 확인', detail: '홈과 가계부에서 목표 진행률, 지출과 거래 흐름 표시' },
      { step: '02', title: '금융 발견', detail: '소비·대출 관련 진단과 추천을 카드·목록으로 정리' },
      { step: '03', title: '해석과 상담', detail: '리포트의 지표 의미를 명확히 표시하고 진단 맥락을 AI 상담에 전달' },
    ],
    screens: [
      { detail: '목표 카드·월 지출·브리핑 진입 UI를 만들고 목표·브리핑·소비 요약을 실제 API 응답과 연결했습니다.', evidence: '관련 작업: 7b00d3d · 83e6631' },
      { detail: '금융 진단 요약과 목록 화면을 구현하고 진단·추천 API를 연결했습니다. 결과를 선택한 카테고리 중심으로 보여주도록 화면 구조를 다듬었습니다.', evidence: '관련 작업: 2fab1ca · 1744727 · d4280f7 · 6682173' },
      { detail: '월간 리포트 UI와 실데이터를 연결했습니다. 관리 점수, 실제 비율, 또래 내 위치가 같은 수치로 읽히지 않도록 라벨과 기준 기간을 구분했습니다.', evidence: '관련 작업: a00f445 · a5c2c7a · 3d193c0' },
      { detail: '가계부의 월별 흐름과 날짜 탐색 UI를 구현하고 거래 카테고리별 아이콘을 표시했습니다.', evidence: '관련 작업: d5e4a60 · 7c15b3d · 6b999ca' },
      { detail: '소비·목표·현금흐름을 함께 보여주는 브리핑 UI를 만들고 화면 데이터를 API와 연결했습니다.', evidence: '관련 작업: ebdc893 · 56c3ded' },
      { detail: '구독 목록 화면을 추가하고 서비스 아이콘을 서버가 제공하는 iconKey와 연결했습니다.', evidence: '관련 작업: ed86e45 · 76d16c9' },
    ],
    stories: [
      { why: '홈에서 목표 카드는 이번 달 예산을 보여주는데, 월 지출과 소비 TOP 3는 지난달 금액을 보여줬습니다. 한 화면에서 기간이 섞여 이번 달 소비를 확인하기 어려웠습니다.', cause: '홈 소비 요약의 조회 기준이 직전 완료 월로 설정돼 있었고, 목표 카드의 이번 달 기준과 맞지 않았습니다.', how: '월 지출과 카테고리 TOP 3의 조회 기준을 이번 달로 바꾸고, 증감 비교 대상도 지난달로 맞췄습니다. 카드 제목의 월 표시도 같은 기준을 사용하게 했습니다.', after: '홈의 목표 예산과 소비 카드가 모두 이번 달을 가리킵니다. 홈과 가계부가 같은 소비 API를 조회하는 기준도 유지했습니다.' },
      { why: '세이프박스에서 목표에 담거나 꺼낼 금액을 입력하면 숫자 키보드가 올라와 모달의 하단 버튼을 가렸습니다.', cause: '입력 모달이 화면 아래에 고정돼 있었고, 키보드가 나타날 때 모달 높이와 위치가 함께 조정되지 않았습니다.', how: '모달 안에 키보드 대응 레이아웃을 넣고 운영체제에 맞게 높이 또는 여백을 조정했습니다. 금액 입력창과 실행 버튼을 같은 영역 안에 배치했습니다.', after: '키보드가 열린 상태에서도 입력 금액과 실행 버튼을 확인하고 다음 동작을 할 수 있게 했습니다.' },
      { why: '금융 효율 화면의 관리 점수, 소비 유형의 기간 평균 비율, 리포트의 또래 위치가 비슷한 숫자로 보여 값이 서로 맞지 않는 것처럼 읽혔습니다.', cause: '각 수치의 단위와 기준 기간이 다른데도 짧은 라벨을 공유했고, 점수와 실제 비율의 차이를 화면에서 설명하지 않았습니다.', how: '관리 점수에는 기준월과 0~100점 척도를, 소비 비율에는 분석 개월 수를 표시했습니다. 또래 비교 차트는 실제 비율이 아닌 상대 위치라고 명시하고 코드의 필드 이름도 의미에 맞게 분리했습니다.', after: '사용자가 각 숫자의 의미와 기간을 구분할 수 있습니다. 금융 계산식은 바꾸지 않고 표시만 바로잡았습니다.' },
    ],
  },
};

export function ProjectDetail({ project }: { project: Project }) {
  const detail = content[project.id];
  const isAit = project.id === 'ait';
  useEffect(() => {
    document.title = `${project.name} | 이진웅 포트폴리오`;
    window.scrollTo({ top: 0 });
  }, [project.id, project.name]);

  return <main id="main" className="container detail-page">
    <nav className="detail-breadcrumb" aria-label="현재 위치"><a href="#work">프로젝트</a><span aria-hidden="true">/</span><span>{project.name}</span></nav>
    <section className={`detail-hero detail-hero-${project.id}`}>
      <div className="detail-hero-copy"><span className="label">{project.category} · {project.date}</span><h1>{project.name}</h1><p>{isAit ? '나만의 맞춤 면접 연습 공간' : project.tagline}</p></div>
    </section>
    <ProjectShowcase project={project} screens={detail.screens} />
    <section className="detail-overview detail-section"><div><span className="label">PROJECT OVERVIEW</span><h2>프로젝트 개요</h2><div className="tags overview-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="overview-body"><p>{detail.overview}</p></div></section>
    {detail.background && <section className="detail-section"><div className="detail-section-heading"><span className="label">WHY {project.name.toUpperCase()}</span><h2>개발 배경</h2></div><div className="context-grid">{detail.background.map((item, index) => <article className="context-item" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>}
    {detail.features && <section className="detail-section"><div className="detail-section-heading"><span className="label">SERVICE FEATURES</span><h2>주요 기능</h2></div><div className="feature-grid">{detail.features.map(item => <article className="feature-item" key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>}
    {detail.roles && <section className="detail-section"><div className="detail-section-heading"><span className="label">MY ROLE · FRONTEND</span><h2>담당 역할</h2></div><div className="role-list">{detail.roles.map((item, index) => <article className="role-item" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>}
    {!detail.features && <section className="detail-section"><div className="detail-section-heading"><span className="label">USER FLOW</span><h2>사용자 흐름과 담당 영역</h2></div><div className="journey-grid">{detail.journey.map(step => <div className="journey-step" key={step.step}><span>{step.step}</span><h3>{step.title}</h3><p>{step.detail}</p></div>)}</div></section>}
    <section className="detail-section troubleshooting" aria-label={`${project.name} 문제 해결`}><div className="detail-section-heading"><span className="label">PROBLEM SOLVING</span><h2>문제 해결 <span>{String(project.caseStudies.length).padStart(2, '0')}</span></h2></div>{project.caseStudies.map((caseStudy, index) => <details className="story" key={caseStudy.title} open={index === 0}><summary className="detail-toggle"><span className="story-title"><span className="story-number">0{index + 1}</span><strong>{caseStudy.title}</strong></span><span className="story-sign" aria-hidden="true"/></summary><div className="case-content"><div><span className="label">상황</span><p>{detail.stories[index].why}</p></div><div><span className="label">원인</span><p>{detail.stories[index].cause}</p></div><div><span className="label">수정</span><p>{detail.stories[index].how}</p></div><div><span className="label">달라진 동작</span><p>{detail.stories[index].after}</p></div></div></details>)}</section>
    <div className="detail-bottom"><a href="#work">프로젝트 목록으로</a><a href={`#/${project.id === 'ait' ? 'dodam' : 'ait'}`}>{project.id === 'ait' ? 'Dodam' : 'Ait'} 살펴보기</a></div>
  </main>;
}
