// Theme toggle with localStorage + prefers-color-scheme fallback
(function(){
  const root = document.documentElement;
  const toggleButtons = document.querySelectorAll('#theme-toggle');

  function getInitialTheme(){
    const stored = localStorage.getItem('theme');
    if(stored) return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme){
    if(theme === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
  }

  function toggleTheme(){
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  }

  // init
  applyTheme(getInitialTheme());

  // attach buttons
  document.querySelectorAll('#theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
})();
