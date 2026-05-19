// Set current year
const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

// Sticky nav shadow on scroll
const navWrap = document.querySelector('.nav-wrap');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>20) navWrap.classList.add('scrolled'); else navWrap.classList.remove('scrolled');
});

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if(hamburger && menu){
  hamburger.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    if(open){ menu.style.display='flex'; menu.style.flexDirection='column'; menu.style.position='absolute'; menu.style.right='18px'; menu.style.top='72px'; menu.style.background='linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.3))'; menu.style.padding='12px'; menu.style.borderRadius='10px'; }
    else { menu.style.display='none'; }
  });
}
// Close mobile menu when a menu link is clicked
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click', ()=>{
    if(menu && menu.classList.contains('open')){ menu.classList.remove('open'); menu.style.display='none'; hamburger.setAttribute('aria-expanded','false'); }
  });
});

// Simple particle background using canvas (soft floating particles)
(function(){
  const container = document.getElementById('particles');
  if(!container) return;
  container.style.position='fixed'; container.style.inset='0'; container.style.zIndex='0';
  const canvas = document.createElement('canvas'); canvas.style.width='100%'; canvas.style.height='100%'; container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let w,h,particles=[];
  const colors = ['rgba(212,175,55,0.12)','rgba(229,57,53,0.08)'];

  function resize(){
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }

  function init(){
    particles = [];
    const count = Math.max(Math.floor(window.innerWidth/18), 30);
    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*window.innerWidth,
        y: Math.random()*window.innerHeight,
        r: Math.random()*3 + 0.4,
        vx: (Math.random()-0.5)*0.4,
        vy: (Math.random()-0.5)*0.4,
        c: colors[Math.floor(Math.random()*colors.length)]
      });
    }
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(const p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x<0) p.x=window.innerWidth; if(p.x>window.innerWidth) p.x=0;
      if(p.y<0) p.y=window.innerHeight; if(p.y>window.innerHeight) p.y=0;
      ctx.beginPath();
      const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*8);
      g.addColorStop(0,p.c);
      g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', ()=>{resize(); init();});
  resize(); init(); draw();
})();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const tgt = a.getAttribute('href');
    if(tgt.length>1){
      e.preventDefault(); const el = document.querySelector(tgt); if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// CTA and card subtle entrance animations
function revealOnScroll(){
  document.querySelectorAll('.live-card, .feature, .cta').forEach((el,i)=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){ el.style.opacity=1; el.style.transform='translateY(0)'; }
    else { el.style.opacity=0; el.style.transform='translateY(8px)'; }
  });
}
window.addEventListener('scroll', revealOnScroll); window.addEventListener('resize', revealOnScroll); revealOnScroll();

// Hover micro animation for CTAs
document.querySelectorAll('.cta, .btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>{ btn.style.transition='transform .18s, box-shadow .18s'; btn.style.transform='translateY(-6px)'; });
  btn.addEventListener('mouseleave', ()=>{ btn.style.transform='translateY(0)'; });
});

// Telegram button glow pulse on hover (for both nav and hero)
document.querySelectorAll('.telegram-btn').forEach(b=>{
  b.addEventListener('mouseenter', ()=>{ b.classList.add('tg-glow'); });
  b.addEventListener('mouseleave', ()=>{ b.classList.remove('tg-glow'); });
});

