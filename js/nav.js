// Shared data store (localStorage for cross-page state)
const GT = {
  save(key, val) { try { localStorage.setItem('gt_' + key, JSON.stringify(val)); } catch(e){} },
  load(key) { try { const v = localStorage.getItem('gt_' + key); return v ? JSON.parse(v) : null; } catch(e){ return null; } }
};

// Highlight active nav link
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
    else a.classList.remove('active');
  });
})();
