(function () {
  var $ = function (s) { return document.querySelector(s); };
  var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = matchMedia('(hover: none)').matches;
  document.documentElement.classList.add('js');

  var EMAIL = 'mohathirahmed55561@gmail.com';

  // preloader (name + progress line, then curtain lifts)
  var pl = $('#pl'), n = 0;
  var iv = setInterval(function () {
    n += Math.ceil(Math.random() * 8);
    if (n >= 100) {
      n = 100; clearInterval(iv);
      setTimeout(function () {
        $('#pre').classList.add('off');
        typeRole();
        document.querySelectorAll('.rv').forEach(function (e) { io.observe(e); });
      }, 400);
    }
    pl.style.width = n + '%';
  }, still ? 1 : 55);

  // typing role
  var R = ['Software Engineer', 'App Builder', 'Community Leader', 'AI-native Developer'], ri = 0, ci = 0, dl = false;
  function typeRole() {
    var w = R[ri], e = $('#rl');
    if (still) { e.textContent = R[0]; return; }
    e.textContent = w.slice(0, ci) + '▍';
    if (!dl && ci === w.length) { dl = true; return setTimeout(typeRole, 1500); }
    if (dl && ci === 0) { dl = false; ri = (ri + 1) % R.length; }
    ci += dl ? -1 : 1;
    setTimeout(typeRole, dl ? 32 : 70);
  }

  // marquee rows
  var A = ['C', 'C++', 'Python', 'Kotlin', 'Java', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'];
  var B = ['Leadership', 'Problem Solving', 'Rapid Prototyping', 'Teamwork', 'Communication', 'Management Systems'];
  function fill(id, arr) {
    $(id).innerHTML = arr.concat(arr, arr, arr).map(function (s) { return '<span>' + s + '</span>'; }).join('');
  }
  fill('#t1', A); fill('#t2', B);

  // scroll reveal + counters
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('on'); io.unobserve(e.target);
      e.target.querySelectorAll('[data-n]').forEach(count);
    });
  }, { threshold: .15 });
  function count(el) {
    var to = +el.dataset.n, s = performance.now();
    (function f(now) {
      var p = Math.min((now - s) / 1600, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + '+';
      if (p < 1) requestAnimationFrame(f);
    })(s);
  }

  // scroll progress + active nav link
  var bar = $('#bar');
  addEventListener('scroll', function () {
    bar.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
  }, { passive: true });
  var links = document.querySelectorAll('#lk a');
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['about', 'skills', 'work', 'contact'].forEach(function (id) { so.observe(document.getElementById(id)); });

  // custom cursor, glow, spotlight, 3D tilt
  var glow = $('#glow'), frame = $('.frame');
  if (!still && !touch) {
    document.body.classList.add('cc');
    var cd = $('#cd'), cr = $('#cr'), cx = -100, cy = -100, rx = -100, ry = -100;
    addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      cd.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      glow.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      var t = e.target.closest && e.target.closest('.sp');
      if (t) {
        var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        t.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }
      var hr = $('#hr').getBoundingClientRect();
      if (cy > hr.top - 100 && cy < hr.bottom + 100) {
        var x = cx / innerWidth - .5, y = cy / innerHeight - .5;
        frame.style.transform = 'perspective(900px) rotateY(' + x * 10 + 'deg) rotateX(' + -y * 8 + 'deg)';
      }
    });
    (function loop() {
      rx += (cx - rx) * .16; ry += (cy - ry) * .16;
      cr.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', function (e) {
      cr.classList.toggle('h', !!e.target.closest('a,button,input,textarea'));
    });
    document.querySelectorAll('.phone,.win').forEach(function (p) {
      var r = p.closest('.row');
      r.addEventListener('mousemove', function (e) {
        var b = p.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
        p.style.transform = 'perspective(900px) rotateY(' + x * 16 + 'deg) rotateX(' + -y * 12 + 'deg)';
      });
      r.addEventListener('mouseleave', function () { p.style.transform = ''; });
    });
  }

  // menu
  $('#bg').onclick = function () { $('#menu').classList.add('on'); };
  $('#close').onclick = function () { $('#menu').classList.remove('on'); };
  document.querySelectorAll('#menu a').forEach(function (a) {
    a.onclick = function () { $('#menu').classList.remove('on'); };
  });

  // copy email + form (opens mail app)
  $('#cp').onclick = function () {
    var b = this;
    (navigator.clipboard ? navigator.clipboard.writeText(EMAIL) : Promise.reject())
      .catch(function () {}).then(function () {
        b.textContent = 'Copied ✓';
        setTimeout(function () { b.textContent = 'Copy'; }, 1800);
      });
  };
  $('#fm').onsubmit = function (e) {
    e.preventDefault();
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Portfolio message from ' + $('#fn').value) +
      '&body=' + encodeURIComponent($('#ft').value + '\n\n' + $('#fe').value);
  };
})();
