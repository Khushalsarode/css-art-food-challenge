/**
 * Nukkad Chat Corner — a11y sprinkle only (DEV CSS Art: Comfort Food)
 * Plate modals, poha mound, welcome, scroll, FX: CSS/HTML.
 * JS keeps reduced-motion class + keyboard close/open for radios.
 */
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-reduced');
  }

  function closePlate() {
    var none = document.getElementById('plate-none');
    if (none) none.checked = true;
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePlate();
      return;
    }
    if (event.key !== 'Enter' && event.key !== ' ') return;

    if (event.target.closest && event.target.closest('.dish-modal__close')) {
      event.preventDefault();
      closePlate();
      return;
    }

    var card = event.target.closest && event.target.closest('.order-card[data-dish]');
    if (!card) return;
    event.preventDefault();
    var radio = document.getElementById('plate-' + card.getAttribute('data-dish'));
    if (radio) radio.checked = true;
  });
})();
