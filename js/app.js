/**
 * Tapri Central — single minimal JS (DEV CSS Art: Comfort Food)
 * Counter: clock, bokeh, string lights, modal, Lenis scroll, static poha canvas.
 * Welcome: clock, bokeh, stall string lights.
 * CSS is the star; no frameworks, no build step.
 */
(function () {
  'use strict';

  var isWelcome = document.body.classList.contains('welcome-page');

  var DISHES = {
    'vada-pav': {
      id: 'vada-pav',
      script: 'वड़ा पाव',
      name: 'Vada Pav',
      price: '₹20',
      origin: 'Mumbai, Maharashtra',
      famous: 'Mumbai\u2019s \u201cBombay burger\u201d \u2014 the city\u2019s most iconic street bite since the 1960s.',
      techniques: ['@keyframes steam', 'radial-gradient pav', 'layered transforms', 'pseudo-elements'],
      history:
        'Born around Dadar and Shivaji Park, vada pav was the affordable fuel of mill workers and commuters. A spiced potato fritter tucked in a soft pav with chutneys \u2014 quick, filling, and unmistakably Mumbai.',
      ingredients: [
        'Pav (soft bread roll)',
        'Spiced potato vada (besan batter)',
        'Green chutney (coriander\u2013mint)',
        'Sweet tamarind chutney',
        'Garlic\u2013red chili chutney (lasun)',
        'Fried green chili (optional)',
      ],
      howToEat:
        'Hold the pav firmly, take a big bite from the side so you get vada, chutney, and bread together. Squeeze a little lime if offered. Eat fast while the vada is still crisp \u2014 that\u2019s the whole point.',
      healthyStyle:
        'Share one pav between two, skip the fried chili, and ask for less chutney. Pair with a cutting chai instead of a second vada. Homemade versions can use air-fried vada and whole-wheat pav.',
      nutrition: { calories: '~280 kcal', protein: '~6 g', carbs: '~38 g', fat: '~12 g', fiber: '~4 g' },
    },
    chai: {
      id: 'chai',
      script: 'मसाला चाय',
      name: 'Masala Chai',
      price: '₹15',
      origin: 'Indian subcontinent \u00b7 chai tapri culture',
      famous: 'The rhythm of every galli \u2014 cutting chai sipped between conversations, rain, and rush hour.',
      techniques: ['conic meniscus shimmer', 'cup sip lift', 'biscuit dunk', 'glass condensation', 'steam @keyframes'],
      history:
        'Tea arrived in India under British trade, but masala chai as we know it was shaped by street vendors who boiled milk, tea, ginger, and spices together in large vessels \u2014 stronger, sweeter, and built for sharing.',
      ingredients: [
        'CTC black tea leaves',
        'Full-fat milk',
        'Fresh ginger',
        'Green cardamom',
        'Cloves & cinnamon',
        'Sugar (or jaggery)',
        'Parle-G biscuits (classic pairing)',
      ],
      howToEat:
        'Sip from a small glass or kulhad while it\u2019s hot \u2014 blow gently first. Dunk a biscuit for two seconds, not twenty. \u201cCutting\u201d means half a glass; perfect when you\u2019re standing at the counter.',
      healthyStyle:
        'Use less sugar or swap for jaggery, increase ginger and cardamom, and choose low-fat milk. Limit to 1\u20132 cups daily. Skip the biscuit stack if you\u2019re watching carbs.',
      nutrition: { calories: '~120 kcal', protein: '~3 g', carbs: '~18 g', fat: '~4 g', fiber: '~0 g' },
    },
    'pani-puri': {
      id: 'pani-puri',
      script: 'पानी पूरी',
      name: 'Pani Puri',
      price: '₹40',
      origin: 'North & West India (regional names: golgappa, puchka)',
      famous: 'The ultimate one-bite thrill \u2014 six puris, six explosions of teekha pani.',
      techniques: ['preserve-3d isometric', 'radial-gradient puri shell', 'clip-path pools', 'boondi spheres'],
      history:
        'Crisp hollow puris filled with potato, sprouts, and tangy spiced water trace roots to Magadh-era traditions. Every region claims its version \u2014 but the joy is universal.',
      ingredients: [
        'Semolina\u2013wheat puri shells',
        'Boiled potato & sprouted moong',
        'Teekha pani (mint\u2013tamarind\u2013spice water)',
        'Meetha pani (sweet tamarind)',
        'Boondi, sev & chaat masala',
        'Coriander & onion (optional)',
      ],
      howToEat:
        'Eat one puri at a time, whole \u2014 cup your hand, tilt your head back, and pop it in before the puri softens. Never save the last puri for \u201clater.\u201d',
      healthyStyle:
        'Ask for less potato, more sprouts, and skip sev. Choose vendors with fresh pani made daily. At home, bake puris lightly or use smaller portions.',
      nutrition: { calories: '~180 kcal (6 pc)', protein: '~4 g', carbs: '~32 g', fat: '~5 g', fiber: '~3 g' },
    },
    idli: {
      id: 'idli',
      script: 'इडली',
      name: 'Idli Platter',
      price: '₹60',
      origin: 'Tamil Nadu \u00b7 South Indian breakfast canon',
      famous: 'Cloud-soft steamed rice cakes \u2014 the gentlest comfort on a banana leaf.',
      techniques: ['platter levitation', 'individual idli pop', 'katori lift & ripple', 'thermal steam wisps', 'leaf capillary ribs'],
      history:
        'Idli appears in ancient Kannada and Tamil texts; modern fermented idli spread from Karnataka and Tamil Nadu tiffin rooms across India. Steamed, not fried.',
      ingredients: [
        'Fermented idli batter (rice + urad dal)',
        'Sambar (toor dal, tamarind, vegetables)',
        'Coconut chutney',
        'Tomato or gunpowder chutney',
        'Banana leaf liner',
        'Curry leaves & mustard tadka',
      ],
      howToEat:
        'Break idli with fingers or spoon, dip in sambar, then coconut chutney. Eat hot; cold idli loses its magic.',
      healthyStyle:
        'Idli is naturally low-fat and fermented. Choose sambar heavy on vegetables, go easy on coconut chutney oil, and add a side of greens.',
      nutrition: { calories: '~320 kcal (4 idli + sides)', protein: '~10 g', carbs: '~58 g', fat: '~6 g', fiber: '~5 g' },
    },
    dosa: {
      id: 'dosa',
      script: 'पनीर डोसा',
      name: 'Paneer Dosa',
      price: '₹90',
      origin: 'South India \u00b7 Udupi\u2013Chennai tiffin evolution',
      famous: 'Paper-thin crisp dosa rolled into a cone stuffed with spiced paneer \u2014 street luxury.',
      techniques: ['cone tilt reveal', 'griddle lace burns', 'paneer cube pop', 'katori lift', 'dosa steam trails'],
      history:
        'Dosa is centuries old; stuffed variations like masala and paneer dosa grew with urban tiffin culture. The cone roll lets you eat on the move.',
      ingredients: [
        'Fermented rice\u2013urad batter',
        'Grated paneer & onion masala',
        'Turmeric, chili & cumin',
        'Coconut chutney',
        'Sambar (optional side)',
        'Ghee or oil on the griddle',
      ],
      howToEat:
        'Tear off pieces of the cone with your right hand, dip in chutney, alternate with sambar sips. Eat while the dosa crackles.',
      healthyStyle:
        'Request less ghee, fill with extra paneer and vegetables. Share one dosa \u2014 portions are huge. Pair with sambar for protein.',
      nutrition: { calories: '~450 kcal', protein: '~14 g', carbs: '~52 g', fat: '~18 g', fiber: '~4 g' },
    },
    poha: {
      id: 'poha',
      script: 'पोहा',
      name: 'Indori Poha',
      price: '₹35',
      origin: 'Indore, Madhya Pradesh',
      famous: 'Flattened rice tossed with peanuts, sev, and lime — Indore\u2019s gentle morning comfort.',
      techniques: ['canvas poha flakes', 'spoon steam wisps', 'purple bowl rim', 'lemon wedge garnish', 'heat glow pulse'],
      history:
        'Poha is eaten across India, but Indori poha — with jeera, curry leaves, sev, and pomegranate — is a breakfast institution. Light, savoury, and endlessly customisable.',
      ingredients: [
        'Flattened rice (poha)',
        'Peanuts & curry leaves',
        'Turmeric & mustard tadka',
        'Sev & coriander',
        'Lemon juice',
        'Onion (optional)',
      ],
      howToEat:
        'Squeeze lemon over the bowl, mix with a spoon, and eat hot. Add sev at the end for crunch.',
      healthyStyle:
        'Use thick poha, less oil in tadka, extra peanuts for protein, and skip sev or use baked sev.',
      nutrition: { calories: '~250 kcal', protein: '~5 g', carbs: '~38 g', fat: '~9 g', fiber: '~3 g' },
    },
    'misal-pav': {
      id: 'misal-pav',
      script: 'मिसळ पाव',
      name: 'Misal Pav',
      price: '₹80',
      origin: 'Pune, Maharashtra',
      famous: 'A volcanic bowl of kat — spicy tarri, farsan mountain, and buttered laadi pav for scooping.',
      techniques: ['kat meniscus ripples', 'farsan sev strands', 'cast iron thali', 'brushed steel bowl', 'pav butter glaze', 'wet lemon wedges'],
      history:
        'Misal evolved from humble usal (sprouted bean curry) into Pune\u2019s signature breakfast — kat poured over farsan, eaten with pav, raw onion, and lemon. Every misal joint guards its spice blend.',
      ingredients: [
        'Matki & moong usal base',
        'Spicy kat / tar rassa',
        'Crunchy farsan (sev, gathiya)',
        'Laadi pav with butter glaze',
        'Raw onion & coriander',
        'Fresh lemon wedges',
      ],
      howToEat:
        'Mix the usal and tar gently, pile farsan on top just before eating so it stays crisp. Tear pav, dunk into the rassa, alternate with spoonfuls. Squeeze lemon, add raw onion if you like heat.',
      healthyStyle:
        'Ask for less oil in tar, skip extra farsan, and share one plate. Homemade misal can use less salt and baked sev.',
      nutrition: { calories: '~450 kcal', protein: '~14 g', carbs: '~52 g', fat: '~18 g', fiber: '~4 g' },
    },
    'banana-chips': {
      id: 'banana-chips',
      script: 'केळी चिप्स',
      name: 'Jalgaon Banana Chips',
      price: '₹50',
      origin: 'Jalgaon · Maharashtra (Banana City)',
      famous: 'Paper-thin nendran coins, double-fried in coconut oil — Jalgaon\u2019s famous tea-time crunch.',
      techniques: ['25-layer coin matrix', 'pith radial segments', 'walnut wood bowl', 'linen weave', 'sun sheen highlights'],
      history:
        'Jalgaon sits in the heart of Maharashtra\u2019s banana belt. Local chip makers slice raw nendran bananas into coins, fry them golden, and sell them by the bowl at every bus stand and chai tapri.',
      ingredients: [
        'Raw nendran bananas',
        'Coconut / groundnut oil',
        'Rock salt',
        'Optional chili masala',
        'Turmeric (some batches)',
      ],
      howToEat:
        'Eat straight from the bowl with chai — pinch a coin, dip in salt or chili masala if you like heat. Best when still audibly crisp.',
      healthyStyle:
        'Share one bowl, blot excess oil on tissue, skip extra salt, and pair with unsweetened chai instead of a second serving.',
      nutrition: { calories: '~320 kcal', protein: '~2 g', carbs: '~38 g', fat: '~18 g', fiber: '~3 g' },
    },
  };

  var modal = null;
  var panel = null;
  var scrollEl = null;
  var content = null;
  var closeBtn = null;
  var lastFocused = null;
  var lenis = null;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) document.documentElement.classList.add('motion-reduced');

  function renderTechniques(techniques) {
    return techniques.map(function (t) {
      return '<span class="dish-modal__technique">' + t + '</span>';
    }).join('');
  }

  function renderDish(dish) {
    var ingredientList = dish.ingredients.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');
    var n = dish.nutrition;

    return (
      '<header class="dish-modal__header">' +
        '<p class="dish-modal__script">' + dish.script + '</p>' +
        '<h2 class="dish-modal__title" id="dish-modal-title">' + dish.name + '</h2>' +
        '<div class="dish-modal__badges">' +
          '<span class="dish-modal__badge dish-modal__badge--price">' + dish.price + '</span>' +
          '<span class="dish-modal__badge">' + dish.origin + '</span>' +
        '</div>' +
        '<p class="dish-modal__famous">' + dish.famous + '</p>' +
        '<div class="dish-modal__techniques" aria-label="CSS techniques used">' +
          renderTechniques(dish.techniques) +
        '</div>' +
      '</header>' +
      '<div class="dish-modal__body">' +
        '<section class="dish-modal__section dish-modal__section--css"><h3>CSS Craft</h3><p>Pure CSS art — gradients, transforms, and keyframes. No photographs.</p></section>' +
        '<section class="dish-modal__section"><h3>History</h3><p>' + dish.history + '</p></section>' +
        '<section class="dish-modal__section"><h3>Ingredients</h3><ul class="dish-modal__list">' + ingredientList + '</ul></section>' +
        '<section class="dish-modal__section"><h3>How to Eat</h3><p>' + dish.howToEat + '</p></section>' +
        '<section class="dish-modal__section dish-modal__section--health"><h3>Healthier Style</h3><p>' + dish.healthyStyle + '</p></section>' +
        '<section class="dish-modal__section">' +
          '<h3>Nutrition <span class="dish-modal__note">(per serving, approximate)</span></h3>' +
          '<dl class="dish-modal__nutrition">' +
            '<div><dt>Calories</dt><dd>' + n.calories + '</dd></div>' +
            '<div><dt>Protein</dt><dd>' + n.protein + '</dd></div>' +
            '<div><dt>Carbs</dt><dd>' + n.carbs + '</dd></div>' +
            '<div><dt>Fat</dt><dd>' + n.fat + '</dd></div>' +
            '<div><dt>Fiber</dt><dd>' + n.fiber + '</dd></div>' +
          '</dl>' +
        '</section>' +
      '</div>'
    );
  }

  function openModal(dishId) {
    var dish = DISHES[dishId];
    if (!dish || !modal || !content || !closeBtn) return;

    lastFocused = document.activeElement;
    content.innerHTML = renderDish(dish);
    if (scrollEl) scrollEl.scrollTop = 0;
    modal.hidden = false;
    document.body.classList.add('dish-modal-open');
    if (lenis) lenis.stop();
    requestAnimationFrame(function () {
      modal.classList.add('dish-modal--visible');
    });
    closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('dish-modal--visible');
    document.body.classList.remove('dish-modal-open');
    window.setTimeout(function () {
      modal.hidden = true;
      if (content) content.innerHTML = '';
      if (lastFocused && lastFocused.focus) lastFocused.focus();
      lastFocused = null;
      if (lenis) lenis.start();
    }, 260);
  }

  function bindCardInteractions(card) {
    card.addEventListener('click', function () {
      var dishId = card.getAttribute('data-dish');
      if (dishId) openModal(dishId);
    });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        var dishId = card.getAttribute('data-dish');
        if (dishId) openModal(dishId);
      }
    });
  }

  function initDishModal() {
    modal = document.getElementById('dish-modal');
    panel = modal ? modal.querySelector('.dish-modal__panel') : null;
    scrollEl = modal ? modal.querySelector('.dish-modal__scroll') : null;
    content = document.getElementById('dish-modal-content');
    closeBtn = modal ? modal.querySelector('.dish-modal__close') : null;
    if (!modal || !panel || !content || !closeBtn) return;

    var cards = document.querySelectorAll('.order-card[data-dish]');
    for (var i = 0; i < cards.length; i++) bindCardInteractions(cards[i]);

    closeBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      closeModal();
    });

    var backdrop = modal.querySelector('[data-close]');
    if (backdrop) backdrop.addEventListener('click', closeModal);
    panel.addEventListener('click', function (event) { event.stopPropagation(); });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
    });
  }

  function seedPageBokeh(container, count) {
    for (var i = 0; i < count; i++) {
      var orb = document.createElement('span');
      orb.className = 'page-bokeh-orb';
      orb.style.left = (4 + Math.random() * 92) + '%';
      orb.style.top = (6 + Math.random() * 88) + '%';
      orb.style.setProperty('--bokeh-size', (6 + Math.random() * 18) + 'px');
      orb.style.setProperty('--drift-dur', (5 + Math.random() * 5) + 's');
      orb.style.setProperty('--drift-delay', (Math.random() * 4) + 's');
      orb.style.setProperty('--bokeh-op', (0.12 + Math.random() * 0.22).toFixed(2));
      container.appendChild(orb);
    }
  }

  function seedStringLights(container, count, wireStyle) {
    var wire = document.createElement('div');
    wire.className = 'string-wire';
    wire.style.cssText = wireStyle || 'top:50%;left:4%;width:92%;transform:rotate(0.5deg);';
    container.appendChild(wire);

    var step = count > 1 ? count - 1 : 1;
    for (var i = 0; i < count; i++) {
      var pool = document.createElement('span');
      pool.className = 'string-bulb-pool';
      var x = 4 + (i / step) * 90;
      pool.style.left = x + '%';
      pool.style.top = (46 + Math.sin(i * 0.8) * 3) + '%';
      pool.style.setProperty('--flicker-dur', (3.5 + (i % 4) * 0.5) + 's');
      pool.style.setProperty('--flicker-delay', ((i * 0.3) % 2) + 's');
      container.appendChild(pool);

      var bulb = document.createElement('span');
      bulb.className = 'string-bulb';
      bulb.style.left = x + '%';
      bulb.style.top = (46 + Math.sin(i * 0.8) * 3) + '%';
      bulb.style.setProperty('--flicker-dur', (3.5 + (i % 4) * 0.5) + 's');
      bulb.style.setProperty('--flicker-delay', ((i * 0.3) % 2) + 's');
      container.appendChild(bulb);
    }
  }

  function tickClock() {
    var el = document.getElementById('live-clock');
    if (!el) return;
    var now = new Date();
    el.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  function initPohaStatic(canvas) {
    if (!canvas || canvas.dataset.pohaDrawn === 'true') return;

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var w = canvas.width;
    var h = canvas.height;
    var centerX = w / 2;
    var centerY = h / 2;
    var maxRadius = w / 2 - 8;

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function applyShadow() {
      ctx.shadowColor = 'rgba(40, 24, 8, 0.18)';
      ctx.shadowBlur = 5;
      ctx.shadowOffsetY = 2;
    }

    function clearShadow() {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    }

    function moundPoints(count, extra) {
      var points = [];
      var i;
      for (i = 0; i < count; i++) {
        var theta = rand(0, Math.PI * 2);
        var r = maxRadius * Math.pow(Math.random(), 0.82);
        var moundLift = Math.sqrt(Math.max(0, 1 - Math.pow(r / maxRadius, 2))) * 18;
        var pt = {
          x: centerX + r * Math.cos(theta),
          y: centerY + r * Math.sin(theta) * 0.92 - moundLift,
          dist: r,
          depth: moundLift
        };
        if (extra) {
          var ex = extra();
          for (var k in ex) {
            if (Object.prototype.hasOwnProperty.call(ex, k)) pt[k] = ex[k];
          }
        }
        points.push(pt);
      }
      points.sort(function (a, b) { return a.y - b.y; });
      return points;
    }

    function flakeLight(hue, light, depth) {
      var lift = Math.min(1, depth / 18);
      var lit = light + lift * 8;
      return 'hsl(' + hue + ',88%,' + Math.min(78, lit) + '%)';
    }

    function drawFlake(x, y, angle, size, hue, light, depth) {
      depth = depth || 0;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      var shadowStr = 0.12 + (depth / 18) * 0.08;
      ctx.shadowColor = 'rgba(40, 24, 8, ' + shadowStr + ')';
      ctx.shadowBlur = 4 + depth * 0.15;
      ctx.shadowOffsetY = 2 + depth * 0.08;
      ctx.fillStyle = flakeLight(hue, light, depth);
      ctx.beginPath();
      ctx.moveTo(-size, -size * 0.35);
      ctx.bezierCurveTo(-size * 0.5, -size * 0.65, size * 0.4, -size * 0.55, size, -size * 0.15);
      ctx.bezierCurveTo(size * 1.1, size * 0.35, size * 0.5, size * 0.65, -size * 0.2, size * 0.55);
      ctx.bezierCurveTo(-size * 0.8, size * 0.45, -size * 1.1, size * 0.15, -size, -size * 0.35);
      ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      var specOpacity = 0.15 + (depth / 18) * 0.2;
      ctx.fillStyle = 'rgba(255,255,255,' + specOpacity + ')';
      ctx.beginPath();
      ctx.ellipse(-size * 0.25, -size * 0.18, size * 0.35, size * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'hsl(' + hue + ',82%,' + (light - 15 - depth * 0.3) + '%)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(-size * 0.6, 0);
      ctx.lineTo(size * 0.6, 0);
      ctx.stroke();
      ctx.restore();
    }

    function drawFlakeLayers(list) {
      var far = [];
      var mid = [];
      var near = [];
      list.forEach(function (f) {
        var t = f.dist / maxRadius;
        if (t > 0.7) far.push(f);
        else if (t > 0.38) mid.push(f);
        else near.push(f);
      });
      ctx.filter = 'blur(2px)';
      far.forEach(function (f) { drawFlake(f.x, f.y, f.angle, f.size, f.hue, f.light, f.depth); });
      ctx.filter = 'blur(0.8px)';
      mid.forEach(function (f) { drawFlake(f.x, f.y, f.angle, f.size, f.hue, f.light, f.depth); });
      ctx.filter = 'none';
      near.forEach(function (f) { drawFlake(f.x, f.y, f.angle, f.size, f.hue, f.light, f.depth); });
    }

    function drawPeanut(x, y, angle, pw, ph) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      var g = ctx.createRadialGradient(-2, -2, 2, 0, 0, pw / 2);
      g.addColorStop(0, '#ab5022');
      g.addColorStop(0.5, '#752107');
      g.addColorStop(1, '#3a0c01');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(0, 0, pw / 2, ph / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawOnion(x, y, angle, s) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      var g = ctx.createLinearGradient(-s / 2, -s / 2, s / 2, s / 2);
      g.addColorStop(0, 'rgba(255,245,245,.85)');
      g.addColorStop(0.6, 'rgba(215,125,155,.75)');
      g.addColorStop(1, 'rgba(145,48,85,.85)');
      ctx.fillStyle = g;
      ctx.fillRect(-s / 2, -s / 2, s, s);
      ctx.restore();
    }

    function drawMustard(x, y, radius) {
      ctx.beginPath();
      ctx.fillStyle = '#1b1209';
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawCoriander(x, y, angle) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      ctx.fillStyle = '#2d7c31';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-6, -10, -12, -3, -5, 2);
      ctx.bezierCurveTo(-10, 8, -2, 12, 0, 3);
      ctx.bezierCurveTo(2, 12, 10, 8, 5, 2);
      ctx.bezierCurveTo(12, -3, 6, -10, 0, 0);
      ctx.fill();
      ctx.restore();
    }

    function drawCurryLeaf(x, y, angle) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      ctx.fillStyle = '#1a5c1e';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-8, -12, -14, -4);
      ctx.quadraticCurveTo(-6, 2, 0, 0);
      ctx.fill();
      ctx.restore();
    }

    function drawChilli(x, y, angle, len, thickness) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      ctx.fillStyle = '#2d8a28';
      ctx.beginPath();
      ctx.ellipse(0, 0, len / 2, thickness, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#1a5a16';
      ctx.beginPath();
      ctx.arc(len / 2 - 2, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawSev(x, y, len, ang, width) {
      ctx.strokeStyle = '#d4a017';
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
    }

    function drawCoconut(x, y, dots) {
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      dots.forEach(function (d) {
        ctx.beginPath();
        ctx.arc(x + d.dx, y + d.dy, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawPomegranate(x, y, radius) {
      ctx.save();
      applyShadow();
      ctx.fillStyle = '#8b0a1a';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      clearShadow();
      ctx.fillStyle = 'rgba(255,255,255,.25)';
      ctx.beginPath();
      ctx.arc(x - 0.5, y - 0.5, 0.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawStem(x, y, angle, len) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      ctx.strokeStyle = '#3a9a3e';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();
      ctx.restore();
    }

    function drawTurmeric(x, y, radius) {
      ctx.fillStyle = 'rgba(218,165,32,.35)';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    var lemon = { x: centerX + 52, y: centerY - 32, angle: 0.22, radius: 44 };
    var spoon = { x: centerX - 62, y: centerY + 24, angle: -0.48 };

    function drawSpoonPoha(bx, by) {
      [
        { dx: -8, dy: -4, size: 7, angle: 0.3, hue: 47, light: 66 },
        { dx: 4, dy: -6, size: 8, angle: 1.1, hue: 48, light: 70 },
        { dx: 10, dy: 0, size: 7, angle: 2.0, hue: 46, light: 64 },
        { dx: -2, dy: 5, size: 6, angle: -0.5, hue: 49, light: 68 },
        { dx: 8, dy: 6, size: 6, angle: 1.8, hue: 47, light: 62 },
        { dx: -10, dy: 3, size: 5, angle: 0.9, hue: 48, light: 65 }
      ].forEach(function (f) {
        drawFlake(bx + f.dx, by + f.dy, f.angle, f.size, f.hue, f.light);
      });
    }

    function drawSpoonShape(x, y, angle) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      var handle = ctx.createLinearGradient(-92, -6, 8, 6);
      handle.addColorStop(0, '#5a6068');
      handle.addColorStop(0.35, '#e8eaed');
      handle.addColorStop(0.65, '#f4f6f8');
      handle.addColorStop(1, '#6a7078');
      ctx.fillStyle = handle;
      ctx.beginPath();
      ctx.moveTo(-92, -4);
      ctx.lineTo(-8, -5.5);
      ctx.quadraticCurveTo(2, -5.5, 8, -3);
      ctx.lineTo(8, 3);
      ctx.quadraticCurveTo(2, 5.5, -8, 5.5);
      ctx.lineTo(-92, 4);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.12)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      var bowl = ctx.createRadialGradient(10, -8, 2, 18, 6, 32);
      bowl.addColorStop(0, '#ffffff');
      bowl.addColorStop(0.45, '#d8dce2');
      bowl.addColorStop(0.85, '#8a919a');
      bowl.addColorStop(1, '#5a6068');
      ctx.fillStyle = bowl;
      ctx.beginPath();
      ctx.ellipse(16, 2, 30, 19, 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.beginPath();
      ctx.ellipse(12, -4, 10, 5, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(16, 4, 24, 14, 0.15, 0, Math.PI * 2);
      ctx.clip();
      drawSpoonPoha(16, 4);
      ctx.restore();
      ctx.restore();
    }

    function drawLemon(x, y, angle, r) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      applyShadow();
      ctx.beginPath();
      ctx.moveTo(-r, 0);
      ctx.arc(0, 0, r, Math.PI, 0);
      ctx.closePath();
      var flesh = ctx.createRadialGradient(0, -r * 0.25, 4, 0, -r * 0.1, r * 1.1);
      flesh.addColorStop(0, '#fff9c4');
      flesh.addColorStop(0.75, '#fdd835');
      flesh.addColorStop(1, '#f9a825');
      ctx.fillStyle = flesh;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0, r, Math.PI, 0);
      ctx.arc(0, 0, r - 8, 0, Math.PI, true);
      ctx.closePath();
      var rind = ctx.createLinearGradient(-r, -r, r, r * 0.2);
      rind.addColorStop(0, '#fff176');
      rind.addColorStop(1, '#b8860b');
      ctx.fillStyle = rind;
      ctx.fill();
      ctx.restore();
    }

    var scene = {
      flakes: moundPoints(450, function () {
        return { angle: rand(0, Math.PI * 2), size: rand(9, 13), hue: rand(45, 50), light: rand(58, 74) };
      }),
      onions: moundPoints(60, function () { return { angle: rand(0, Math.PI), size: rand(9, 13) }; }),
      mustard: moundPoints(90, function () { return { radius: rand(1.5, 2.4) }; }),
      peanuts: moundPoints(10, function () { return { angle: rand(0, Math.PI * 2), w: rand(20, 25), h: rand(13, 16) }; }),
      coriander: moundPoints(30, function () { return { angle: rand(0, Math.PI * 2) }; }),
      curryLeaves: moundPoints(14, function () { return { angle: rand(0, Math.PI * 2) }; }),
      chillies: moundPoints(5, function () { return { angle: rand(0, Math.PI * 2), len: rand(18, 28), thickness: rand(3, 5) }; }),
      sev: moundPoints(55, function () { return { len: rand(8, 16), ang: rand(0, Math.PI * 2), width: rand(0.8, 1.2) }; }),
      coconut: moundPoints(25, function () {
        return {
          dots: Array.from({ length: 4 }, function () {
            return { dx: rand(-3, 3), dy: rand(-3, 3), r: rand(1, 2.5) };
          })
        };
      }),
      pomegranate: moundPoints(18, function () { return { radius: rand(2, 3.5) }; }),
      stems: moundPoints(15, function () { return { angle: rand(0, Math.PI * 2), len: rand(12, 20) }; }),
      turmeric: moundPoints(40, function () { return { radius: rand(1, 2) }; })
    };

    drawFlakeLayers(scene.flakes);
    scene.onions.forEach(function (p) { drawOnion(p.x, p.y, p.angle, p.size); });
    scene.mustard.forEach(function (p) { drawMustard(p.x, p.y, p.radius); });
    scene.peanuts.forEach(function (p) { drawPeanut(p.x, p.y, p.angle, p.w, p.h); });
    scene.coriander.forEach(function (p) { drawCoriander(p.x, p.y, p.angle); });
    scene.curryLeaves.forEach(function (p) { drawCurryLeaf(p.x, p.y, p.angle); });
    scene.chillies.forEach(function (p) { drawChilli(p.x, p.y, p.angle, p.len, p.thickness); });
    scene.sev.forEach(function (p) { drawSev(p.x, p.y, p.len, p.ang, p.width); });
    scene.coconut.forEach(function (p) { drawCoconut(p.x, p.y, p.dots); });
    scene.pomegranate.forEach(function (p) { drawPomegranate(p.x, p.y, p.radius); });
    scene.stems.forEach(function (p) { drawStem(p.x, p.y, p.angle, p.len); });
    scene.turmeric.forEach(function (p) { drawTurmeric(p.x, p.y, p.radius); });
    drawSpoonShape(spoon.x, spoon.y, spoon.angle);
    drawLemon(lemon.x, lemon.y, lemon.angle, lemon.radius);
    drawCoriander(lemon.x - 22, lemon.y - 38, -0.4);

    canvas.dataset.pohaDrawn = 'true';
  }

  function initPohaCanvases() {
    var canvases = document.querySelectorAll('[data-poha-canvas]');
    if (!canvases.length) return;

    var draw = function () {
      for (var i = 0; i < canvases.length; i++) initPohaStatic(canvases[i]);
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(draw, { timeout: 1500 });
    } else {
      window.setTimeout(draw, 100);
    }
  }

  function bootCounter() {
    initDishModal();
    initPohaCanvases();

    var ordersEl = document.getElementById('stat-orders');
    if (ordersEl && !reduced) {
      var n = 47;
      setInterval(function () {
        n += Math.random() > 0.7 ? 1 : 0;
        ordersEl.textContent = String(n);
      }, 8000);
    }
  }

  function bootWelcome() {
    if (!reduced) {
      var pageBokeh = document.getElementById('page-bokeh-field');
      if (pageBokeh) seedPageBokeh(pageBokeh, 18);
      var stallLights = document.getElementById('stall-string-lights');
      if (stallLights) seedStringLights(stallLights, 14, 'top:50%;left:2%;width:96%;transform:rotate(0.3deg);');
      var stallLightsBack = document.getElementById('stall-string-lights-back');
      if (stallLightsBack) seedStringLights(stallLightsBack, 10, 'top:50%;left:2%;width:96%;transform:rotate(0.3deg);');
    }
  }

  function initLenis() {
    if (reduced || typeof window.Lenis !== 'function') return;

    lenis = new window.Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.12,
      allowNestedScroll: true,
      prevent: function (node) {
        return Boolean(
          node.closest('.dish-modal__scroll') ||
          node.closest('.order-grid') ||
          node.closest('.queue-list') ||
          node.closest('.app-nav') ||
          node.closest('[data-lenis-prevent]')
        );
      },
    });

    document.documentElement.classList.add('lenis-active');
  }

  function bootShared() {
    initLenis();

    document.addEventListener('visibilitychange', function () {
      document.documentElement.setAttribute('data-page-hidden', document.hidden ? 'true' : 'false');
      if (!lenis) return;
      if (document.hidden) lenis.stop();
      else if (!document.body.classList.contains('dish-modal-open')) lenis.start();
    });

    tickClock();
    setInterval(tickClock, 30000);

    if (!reduced) {
      if (!isWelcome) {
        var lights = document.getElementById('counter-string-lights');
        if (lights) seedStringLights(lights, 14);
        var pageBokeh = document.getElementById('page-bokeh-field');
        if (pageBokeh) seedPageBokeh(pageBokeh, 16);
      }
    }
  }

  bootShared();
  if (isWelcome) bootWelcome();
  else bootCounter();
})();
