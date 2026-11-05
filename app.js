const projects = [
  { id: '01', title: '菌伞拾光', english: 'Glowshroom', kind: 'Product · CMF · Interaction', category: 'product', slug: 'glowshroom', pages: [8,9,10,11,12,13,14,15], description: '以“菌伞”为核心互动载体，将拟态交互、光运动训练与奥尔夫音乐结合。儿童拍打菌伞的动作触发音乐与灯光反馈，在“拾光采菌”的游戏中探索动作、色彩与节奏。' },
  { id: '02', title: '移动生活空间', english: 'Mobile Living Space', kind: 'Automotive · CMF · Concept', category: 'product', slug: 'mobile-living', pages: [16,17,18,19,20,21,22,23], description: '面向品质家庭的家居化座舱概念，将客厅的松弛感与灵活布局带入车内。以可滑移模块化座椅和多功能集成中岛，回应休憩、社交与空间复用的多场景需求。' },
  { id: '03', title: '再现立方', english: 'Cube Chair', kind: 'Furniture · Structure · Prototype', category: 'furniture', slug: 'cube-chair', pages: [26,27,28,29], description: '从彭罗斯三角与不可能图形出发，以立方体为框架，将直线切割、色块与木材结构结合。通过视觉认知与物理现实之间的微妙偏差，探索座椅与空间叙事的关系。' },
  { id: '04', title: '未结椅', english: 'Unresolved Knot', kind: 'Furniture · Form Exploration', category: 'furniture', slug: 'knot-chair', pages: [30,31,32,33], description: '以缠绕绳结为形，将“悬而未决的等待”具象化。将心结、绳结与缠绕转化为坐具的形态语言，使家具成为承载心绪的情感容器。AI 用于辅助探索形态变体，最终方案根据结构、尺度与视觉完整性筛选调整。' },
  { id: '05', title: '云栖木', english: 'Cloud Perch', kind: 'Living Object · Material Exploration', category: 'furniture', slug: 'cloud-perch', pages: [34,35], description: '以野口勇的雕塑语言为灵感，保留木材原生的纹理、分叉与不规则轮廓，以简洁的不锈钢圆盘介入，在自然形态与几何秩序之间建立平衡。茶盘既可独立使用，也可组合陈设。' },
  { id: '06', title: '半间 HEMI', english: 'Where Form Meets Void', kind: 'Brand Identity · Visual System', category: 'branding', slug: 'hemi', pages: [38,39,40,41,42,43], description: '以木作、金属、软包为核心材料的原创家居品牌。从产品延伸至品牌命名、标志、字体、色彩与传播规范，建立统一的视觉识别。隙间有栖，物自成序：关注家具、人与空间之间未被填满的部分。' },
  { id: '07', title: '雾岸', english: 'The Veiled Shore', kind: 'Photography · Editorial Design', category: 'photography', slug: 'veiled-shore', pages: [46,47,48,49], description: '摄于福建沿海，2025。镜头沿海岸、村落与人工景观移动，记录潮湿空气、低饱和色彩与日常痕迹的关系。通过克制的留白与跨页对照，将单张照片编排为关于自然与人为痕迹的连续视觉叙事。' }
];
const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
for (const p of projects) {
  const article = document.createElement('article');
  article.className = 'project';
  article.dataset.category = p.category;
  article.innerHTML = `<button aria-label="查看${p.title}作品详情"><div class="project-art"><img src="assets/portfolio/${p.slug}-cover.jpg" alt="${p.title} — ${p.english}" width="1200" ${p.id > '02' ? 'loading="lazy"' : ''}><span class="project-arrow" aria-hidden="true">↗</span></div><div class="project-caption"><span class="project-name"><span class="project-number">${p.id}</span>${p.title}<span class="project-english">${p.english}</span></span><span class="project-kind">${p.kind}</span></div></button>`;
  article.querySelector('button').addEventListener('click', () => openProject(p));
  grid.append(article);
}
for (const button of document.querySelectorAll('[data-filter]')) {
  button.addEventListener('click', () => {
    for (const b of document.querySelectorAll('[data-filter]')) {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    }
    let count = 0;
    for (const card of grid.children) {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) {
        count++;
        if (!reducedMotion()) card.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}], {duration:320,easing:'ease-out'});
      }
    }
    document.querySelector('#filter-status').textContent = `显示 ${count} 个项目`;
  });
}
function openProject(p) {
  document.querySelector('#dialog-body').innerHTML = `<div class="dialog-copy"><span class="dialog-index">${p.id} / ${p.kind.toUpperCase()}</span><h2 id="project-title">${p.title}</h2><div class="dialog-english">${p.english}</div><p>${p.description}</p><span class="dialog-source">金晶怡 · 个人作品集 2023—2026 / ${p.pages.length} 页项目展示</span></div><div class="project-pages">${p.pages.map((n,i) => `<figure><img src="assets/portfolio/page-${String(n).padStart(2,'0')}.jpg" alt="${p.title}项目展示，第 ${i+1} 页，共 ${p.pages.length} 页" width="1600" height="900" ${i ? 'loading="lazy"' : ''}><figcaption>${String(i+1).padStart(2,'0')} / ${String(p.pages.length).padStart(2,'0')}</figcaption></figure>`).join('')}</div><div class="dialog-navigation"><button data-previous>← 上一个项目</button><span>${p.id} / 07</span><button data-next>下一个项目 →</button></div>`;
  const index = projects.indexOf(p);
  dialog.querySelector('[data-previous]').addEventListener('click', () => openProject(projects[(index + projects.length - 1) % projects.length]));
  dialog.querySelector('[data-next]').addEventListener('click', () => openProject(projects[(index + 1) % projects.length]));
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.querySelector('.close-dialog').focus({preventScroll:true});
  document.body.classList.add('modal-open');
}
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.querySelector('#year').textContent = new Date().getFullYear();
