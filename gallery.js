const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let current = 0;
const srcs = Array.from(items).map(i => i.dataset.src);

function open(idx) {
  current = idx;
  lbImg.src = srcs[current];
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function close() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function prev() { current = (current - 1 + srcs.length) % srcs.length; lbImg.src = srcs[current]; }
function next() { current = (current + 1) % srcs.length; lbImg.src = srcs[current]; }

items.forEach((item, idx) => item.addEventListener('click', () => open(idx)));
lbClose.addEventListener('click', close);
lbPrev.addEventListener('click', prev);
lbNext.addEventListener('click', next);
lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
});
