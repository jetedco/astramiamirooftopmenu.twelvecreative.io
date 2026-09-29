/* Astra Rooftop menu — renders js/menu-data.js into tabs + panels. No build step. */
(function () {
  "use strict";
  var MENUS = window.ASTRA_MENUS || [];
  var SITE = window.ASTRA_SITE || {};
  var tabs = document.getElementById("tabs");
  var main = document.getElementById("menus");
  if (!tabs || !main || !MENUS.length) return;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtName(s) {
    return esc(s).replace(/\*/g, '<sup class="raw" title="Served raw or undercooked">*</sup>');
  }

  function renderItem(it) {
    if (typeof it === "string") return '<li class="chip">' + esc(it) + "</li>";
    var img = it.img
      ? '<button class="item-img" type="button" data-full="' + esc(it.img) + '" aria-label="View photo of ' + esc(it.name) + '">' +
        '<img src="' + esc(it.thumb || it.img) + '" alt="' + esc(it.name) + '" loading="lazy" width="600" height="600"></button>'
      : "";
    var sub = it.sub ? ' <span class="item-sub">' + esc(it.sub) + "</span>" : "";
    var price = it.price ? '<span class="leader" aria-hidden="true"></span><span class="item-price">' + esc(it.price) + "</span>" : "";
    var desc = it.desc ? '<p class="item-desc">' + esc(it.desc) + "</p>" : "";
    var cls = "item" + (it.featured ? " featured" : "") + (it.img ? " has-img" : "");
    return '<li class="' + cls + '">' + img + '<div class="item-body"><div class="item-line"><span class="item-name">' +
      fmtName(it.name) + sub + "</span>" + price + "</div>" + desc + "</div></li>";
  }

  function renderSection(sec) {
    var kind = sec.kind || "items";
    var cls = "cat kind-" + kind + (sec.boxed ? " boxed" : "");
    var note = sec.note ? '<p class="cat-note">' + esc(sec.note) + "</p>" : "";
    var foot = sec.footnote ? '<p class="cat-foot">' + esc(sec.footnote) + "</p>" : "";
    var list = kind === "chips" ? "chips" : "items";
    return '<section class="' + cls + '"><h2 class="cat-title">' + esc(sec.title) + "</h2>" + note +
      '<ul class="' + list + '">' + (sec.items || []).map(renderItem).join("") + "</ul>" + foot + "</section>";
  }

  function renderMenu(m) {
    var hero = m.hero ? '<img class="menu-hero" src="' + esc(m.hero) + '" alt="">' : "";
    var sub = m.subtitle ? '<p class="menu-subtitle">' + esc(m.subtitle) + "</p>" : "";
    var note = m.note ? '<p class="menu-note">' + esc(m.note) + "</p>" : "";
    var story = m.story
      ? '<details class="story"><summary>' + esc(m.story.title) + "</summary>" +
        m.story.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</details>"
      : "";
    var pdf = m.pdf ? '<p class="menu-actions"><a class="pdf-link" href="' + esc(m.pdf) + '" target="_blank" rel="noopener">Printable PDF</a></p>' : "";
    return '<section class="menu" id="panel-' + esc(m.id) + '" role="tabpanel" aria-labelledby="tab-' + esc(m.id) + '" hidden>' +
      hero + '<header class="menu-head"><h1 class="menu-title">' + esc(m.title) + "</h1>" + sub + note + "</header>" +
      '<div class="cats' + (m.columns === 1 ? " one-col" : "") + '">' + (m.sections || []).map(renderSection).join("") + "</div>" +
      story + pdf + "</section>";
  }

  tabs.innerHTML = MENUS.map(function (m) {
    return '<button class="tab" id="tab-' + esc(m.id) + '" role="tab" type="button" aria-selected="false" tabindex="-1" aria-controls="panel-' +
      esc(m.id) + '" data-id="' + esc(m.id) + '">' + esc(m.label) + "</button>";
  }).join("");
  main.innerHTML = MENUS.map(renderMenu).join("");

  function byId(id) { for (var i = 0; i < MENUS.length; i++) if (MENUS[i].id === id) return MENUS[i]; return null; }
  var current = null;

  function show(id, opts) {
    opts = opts || {};
    var m = byId(id) || MENUS[0];
    id = m.id;
    var buttons = tabs.querySelectorAll(".tab");
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute("data-id") === id;
      buttons[i].setAttribute("aria-selected", on ? "true" : "false");
      buttons[i].setAttribute("tabindex", on ? "0" : "-1");
      buttons[i].classList.toggle("active", on);
      if (on && !opts.initial) buttons[i].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
    var panels = main.querySelectorAll(".menu");
    for (var j = 0; j < panels.length; j++) panels[j].hidden = panels[j].id !== "panel-" + id;
    document.title = m.title + " · " + (SITE.name || "Astra Rooftop");
    if (location.hash !== "#" + id) {
      if (opts.replace) history.replaceState(null, "", "#" + id); else history.pushState(null, "", "#" + id);
    }
    if (!opts.initial && current !== id) {
      // Land on the menu title, just under the (sticky) button row. `main` is not sticky,
      // so its position is reliable even while the bar is stuck to the top.
      var top = main.getBoundingClientRect().top + window.pageYOffset - tabs.parentElement.offsetHeight;
      if (window.pageYOffset > top) window.scrollTo(0, Math.max(top, 0));
    }
    current = id;
  }

  tabs.addEventListener("click", function (e) {
    var b = e.target.closest(".tab");
    if (b) show(b.getAttribute("data-id"));
  });
  tabs.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var ids = MENUS.map(function (m) { return m.id; });
    var i = ids.indexOf(current);
    var n = (i + (e.key === "ArrowRight" ? 1 : ids.length - 1)) % ids.length;
    show(ids[n]);
    tabs.querySelector('[data-id="' + ids[n] + '"]').focus();
    e.preventDefault();
  });
  window.addEventListener("hashchange", function () { show(location.hash.slice(1), { replace: true }); });
  var brand = document.querySelector(".brand");
  if (brand) brand.addEventListener("click", function (e) { e.preventDefault(); show(MENUS[0].id); window.scrollTo(0, 0); });
  show(location.hash.slice(1), { initial: true, replace: true });

  /* Photo lightbox (used once items get img: "images/…") */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    main.addEventListener("click", function (e) {
      var b = e.target.closest(".item-img");
      if (!b) return;
      lbImg.src = b.getAttribute("data-full");
      lbImg.alt = b.querySelector("img").alt;
      lb.hidden = false;
      document.body.classList.add("no-scroll");
    });
    function closeLb() { lb.hidden = true; lbImg.removeAttribute("src"); document.body.classList.remove("no-scroll"); }
    lb.addEventListener("click", closeLb);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLb(); });
  }
})();
