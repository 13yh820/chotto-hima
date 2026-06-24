/* ===== ちょっとヒマ - 共通JS ===== */

// 現在のページをナビでアクティブに
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname;
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('../', ''))) {
      a.style.color = 'var(--primary)';
      a.style.fontWeight = '600';
    }
  });
});
