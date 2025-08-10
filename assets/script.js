
// Utility to format a date
function fmt(d){return d.toLocaleDateString(undefined,{weekday:'short', month:'short', day:'numeric'})}

// Highlight active nav link
(function(){ 
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('nav a').forEach(a => {
    const href = new URL(a.href);
    const normalized = href.pathname.replace(/\/index\.html$/, '/');
    if (normalized === path) a.classList.add('active');
  });
})();
