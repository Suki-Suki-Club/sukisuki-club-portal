// スクロール出現アニメーション(.rv)と、グループ内の時間差表示(data-stagger)
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.rv');

  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    group.querySelectorAll('.rv').forEach(function (el, i) {
      el.style.setProperty('--d', i * 0.09 + 's');
    });
  });

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('show'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { io.observe(el); });
})();
