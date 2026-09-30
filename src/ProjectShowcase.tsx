import { useRef, useState } from 'react';
import type { Project } from './projects';

type ScreenDetail = { detail: string; evidence: string };

export function ProjectShowcase({ project, screens }: { project: Project; screens: ScreenDetail[] }) {
  const [selected, setSelected] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'none' | 'next' | 'previous'>('none');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const image = project.images[selected];
  const previousIndex = (selected - 1 + project.images.length) % project.images.length;
  const nextIndex = (selected + 1) % project.images.length;
  const showImage = (index: number, direction: 'next' | 'previous') => {
    if (index === selected) return;
    setSlideDirection(direction);
    setSelected(index);
  };

  return <section className={`detail-section project-showcase ${project.id}`} aria-label={`${project.name} 작업 내용`}>
    <div className="detail-section-heading"><span className="label">PROJECT UI</span><h2>핵심 화면</h2></div>
    <div className="gallery">
      <div className={`screen-stage ${project.id === 'dodam' ? 'mobile-stage' : 'web-stage'}`}>
        <button className="gallery-arrow gallery-arrow-prev" aria-label={`${project.name} 이전 이미지`} onClick={() => showImage(previousIndex, 'previous')}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
        <button className="adjacent-screen previous-screen" onClick={() => showImage(previousIndex, 'previous')} aria-label={`${project.images[previousIndex].label} 화면 선택`}><img src={project.images[previousIndex].src} alt="" loading="lazy"/><span>{project.images[previousIndex].label}</span></button>
        <button className="image-open" onClick={() => dialogRef.current?.showModal()} aria-label={`${project.name} ${image.label} 이미지 크게 보기`}>
          <img key={image.src} className={`main-screen screen-slide-${slideDirection}`} src={image.src} alt={image.alt} loading={selected === 0 ? 'eager' : 'lazy'} />
          <span className="zoom-label" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg></span>
        </button>
        <button className="adjacent-screen next-screen" onClick={() => showImage(nextIndex, 'next')} aria-label={`${project.images[nextIndex].label} 화면 선택`}><img src={project.images[nextIndex].src} alt="" loading="lazy"/><span>{project.images[nextIndex].label}</span></button>
        <button className="gallery-arrow gallery-arrow-next" aria-label={`${project.name} 다음 이미지`} onClick={() => showImage(nextIndex, 'next')}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
      </div>
      <div className="gallery-controls"><div className="image-options" aria-label={`${project.name} 이미지 선택`}>{project.images.map((item, index) => <button key={item.src} aria-pressed={selected === index} onClick={() => showImage(index, index < selected ? 'previous' : 'next')}>{item.label}</button>)}</div><span className="counter">0{selected + 1} / 0{project.images.length}</span></div>
      <div className="showcase-image-description" aria-live="polite"><p className="image-note"><strong>{image.contributed === false ? '프로젝트 화면' : '내 기여'}</strong> {image.note}</p><p>{screens[selected].detail}</p></div>
    </div>
    <dialog ref={dialogRef} aria-label={`${project.name} 이미지 확대`} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}><div className="dialog-top"><strong>{project.name} / {image.label}</strong><button autoFocus onClick={() => dialogRef.current?.close()}>닫기</button></div><div className="enlarged-scroll"><img src={image.src} alt={image.alt}/></div><p>{image.note}</p></dialog>
  </section>;
}
