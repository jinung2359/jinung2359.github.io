import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { projects, type Project } from './projects';
import { ProjectDetail } from './ProjectDetail';
import './styles.css';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project project-summary ${project.id}`} id={project.id}>
    <div className="project-heading"><span className="index">0{index + 1}</span><h2>{project.name}</h2><span className="category">{project.category}</span><span className="date">{project.date}</span></div>
    <a className={`project-preview project-preview-${project.id}`} href={`#/${project.id}`} aria-label={`${project.name} 프로젝트 자세히 보기`}>
      <img src={project.thumbnail} alt={`${project.name} 프로젝트 썸네일`} />
      <span>프로젝트 자세히 보기 <span aria-hidden="true">↗</span></span>
    </a>
    <div className="project-summary-copy"><p>{project.description}</p><span>{project.tagline}</span></div>
  </article>;
}

function App() {
  const [hash, setHash] = useState(window.location.hash);
  const profileDialogRef = useRef<HTMLDialogElement>(null);
  const detailProject = projects.find(project => hash === `#/${project.id}`);

  useEffect(() => {
    document.documentElement.lang = 'ko';
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (detailProject) return;
    document.title = '이진웅 | 프론트엔드 포트폴리오';
    if (hash === '#work' || hash === '#about') {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
        if (hash === '#about' && profileDialogRef.current && !profileDialogRef.current.open) profileDialogRef.current.showModal();
      });
    } else if (hash === '#/' || hash === '#main') {
      window.scrollTo({ top: 0 });
    }
  }, [hash, detailProject]);

  return <>
    <a className="skip" href="#main">본문으로 건너뛰기</a>
    <header><nav className="container"><a className="brand" href={detailProject ? '#/' : '#main'}>JINUNG<span>이진웅</span></a><div className="nav-links"><a href="#work">프로젝트</a><a href="#about" onClick={() => { if (profileDialogRef.current && !profileDialogRef.current.open) profileDialogRef.current.showModal(); }}>소개</a><a href="https://github.com/jinung2359" target="_blank" rel="noreferrer">GitHub</a></div></nav></header>
    {detailProject ? <ProjectDetail project={detailProject} /> : <main id="main" className="container">
      <section className="hero">
        <div className="hero-kicker"><span>FRONTEND DEVELOPER</span><span>PORTFOLIO / 2026</span></div>
        <div className="hero-layout">
          <div className="hero-copy"><h1>아이디어를 화면으로.<br/><span>화면을 경험으로.</span></h1><p>사용자가 어떤 상황에서도 다음 행동을 알 수 있도록,<br className="desktop-break"/> 예외까지 살피며 화면의 흐름을 설계합니다.</p></div>
          <article className="profile-card" id="about">
            <button className="profile-card-main" type="button" aria-label="이진웅 프로필 자세히 보기" aria-haspopup="dialog" aria-controls="profile-dialog" onClick={() => profileDialogRef.current?.showModal()}>
              <span className="profile-card-eyebrow"><span>JINUNG · FRONTEND</span><span>2026</span></span>
              <span className="profile-card-core"><img src="images/profile-jinung.jpg" alt="이진웅 프로필 사진"/><span className="profile-card-copy"><small>FRONTEND DEVELOPER</small><strong>이진웅</strong><span>LEE JINUNG</span><span className="profile-card-birth">2000.03.27</span></span></span>
              <span className="profile-card-footer"><span>PROFILE / 01</span><span>자세히 보기 ↗</span></span>
            </button>
          </article>
        </div>
      </section>
      <dialog className="profile-dialog" id="profile-dialog" ref={profileDialogRef} aria-label="이진웅 소개" onClick={event => { if (event.target === event.currentTarget) profileDialogRef.current?.close(); }}>
        <div className="profile-dialog-header"><span>JINUNG · FRONTEND DEVELOPER</span><span>PROFILE / 01</span><button className="profile-dialog-close" type="button" autoFocus aria-label="소개 닫기" onClick={() => profileDialogRef.current?.close()}>×</button></div>
        <div className="profile-dialog-layout">
          <div className="profile-dialog-content">
            <span className="profile-dialog-kicker">ABOUT · LEE JINUNG</span>
            <h2>안녕하세요,<br/>이진웅입니다.</h2>
            <p className="profile-dialog-lead">사용자가 막히지 않도록, 다양한 상황의 흐름을 끝까지 살핍니다.</p>
            <dl className="profile-dialog-facts"><div><dt>생년월일</dt><dd>2000.03.27</dd></div><div><dt>학력</dt><dd>건국대학교 수학과</dd></div><div><dt>수상</dt><dd><span>삼성 청년 SW/AI 아카데미 1학기 성적우수상</span><span>삼성 청년 SW/AI 아카데미 2학기 특화 프로젝트 최우수상</span></dd></div></dl>
            <div className="profile-dialog-contact">
              <a href="https://github.com/jinung2359" target="_blank" rel="noreferrer">github.com/jinung2359</a>
              <a href="mailto:jinung2359@gmail.com">jinung2359@gmail.com</a>
            </div>
          </div>
          <div className="profile-dialog-visual"><img src="images/profile-jinung.jpg" alt="이진웅 프로필 사진"/><div className="profile-dialog-identity"><span>LEE JINUNG</span><span>FRONTEND DEVELOPER</span></div><div className="profile-dialog-stack"><strong>TECH STACK</strong><div className="profile-dialog-skills"><span>React</span><span>TypeScript</span><span>React Native</span><span>Expo</span><span>Python</span><span>Django</span><span>Vue</span></div></div></div>
        </div>
      </dialog>
      <section id="work" aria-label="프로젝트"><div className="section-title"><span>SELECTED PROJECTS</span><span>WEB & MOBILE</span></div>{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</section>
    </main>}
    <footer className="container"><span>© 2026 이진웅</span></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>);
