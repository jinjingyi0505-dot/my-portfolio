const figma='https://www.figma.com/design/ZghYA81YsmL8zyyjIXzy15/Untitled?node-id=0-1';
const projects=[
 {id:'01',title:'A little zest',kind:'Brand identity',category:'branding',image:'zest.svg',description:'以明亮色彩和自由的字形探索品牌的个性表达。'},
 {id:'02',title:'Between the lines',kind:'Editorial design',category:'editorial',image:'lines.svg',description:'关于文字、留白与阅读节奏的一次编排练习。'},
 {id:'03',title:'Objects of everyday',kind:'Art direction · Editorial',category:'editorial',image:'objects.svg',description:'重新观察日常物件，在熟悉的形状中发现新的视角。'},
 {id:'04',title:'Soft signal',kind:'Digital experience',category:'digital',image:'signal.svg',description:'用柔和的色彩、清晰的结构探索数字界面的体验。'},
 {id:'05',title:'Outside the box',kind:'Visual experiment',category:'experimental',image:'outside.svg',description:'跳出既定框架，让几何、颜色和直觉产生新的联系。'},
 {id:'06',title:'Slow days',kind:'Brand identity',category:'branding',image:'slow.svg',description:'从自然的节奏中汲取灵感，探索安静而有温度的品牌语言。'}
];
const grid=document.querySelector('#project-grid');
for(const p of projects){const article=document.createElement('article');article.className='project';article.dataset.category=p.category;article.innerHTML=`<button aria-label="查看 ${p.title} 示意项目"><div class="project-art"><img src="assets/${p.image}" alt="${p.title} 概念示意封面" ${p.id>'02'?'loading="lazy"':''}><span class="project-arrow" aria-hidden="true">↗</span></div><div class="project-caption"><span class="project-name"><span class="project-number">${p.id}</span>${p.title}</span><span class="project-kind">${p.kind}</span></div></button>`;article.querySelector('button').addEventListener('click',()=>openProject(p));grid.append(article);}
for(const button of document.querySelectorAll('[data-filter]')){button.addEventListener('click',()=>{for(const b of document.querySelectorAll('[data-filter]')){const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));}for(const card of grid.children)card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});}
const dialog=document.querySelector('#project-dialog');
function openProject(p){document.querySelector('#dialog-body').innerHTML=`<img class="dialog-art" src="assets/${p.image}" alt="${p.title} 示意封面"><div class="dialog-copy"><span class="dialog-index">${p.id} / ${p.kind.toUpperCase()}</span><h2>${p.title}</h2><p>${p.description}</p><p>这是网站布局的概念示意，并非你的实际作品。Figma 内容尚未导入，正式项目图片、名称与介绍待替换。</p><a href="${figma}" target="_blank" rel="noopener noreferrer">查看原始 Figma 作品集 ↗</a></div>`;dialog.showModal();document.body.classList.add('modal-open');}
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));document.querySelector('#year').textContent=new Date().getFullYear();
