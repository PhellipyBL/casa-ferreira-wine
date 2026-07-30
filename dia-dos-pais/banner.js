/* ============================================================
   Casa Ferreira Wine — Banner Dia dos Pais (temporário)
   Injetado no site principal por UMA linha antes de </body>:
   <script src="/dia-dos-pais/banner.js" defer></script>

   Remoção pós-evento: o banner se desativa sozinho após EXPIRES.
   Para remover de vez: apague essa linha do index.html
   e a pasta /dia-dos-pais/.
   ============================================================ */
(function () {
  var CFG = {
    url: '/dia-dos-pais/',
    art: '/dia-dos-pais/assets/hero-familia.webp',
    expires: '2026-08-10T00:00:00-03:00',   // some após o Dia dos Pais
    oncePerSession: true
  };

  if (new Date() >= new Date(CFG.expires)) return;
  try {
    if (CFG.oncePerSession && sessionStorage.getItem('ddpBannerSeen')) return;
  } catch (e) { /* sessionStorage indisponível — mostra mesmo assim */ }

  var css = ''
    + '.ddp-ov{position:fixed;inset:0;z-index:99990;display:flex;align-items:center;justify-content:center;padding:1.2rem;background:rgba(22,8,7,.72);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);opacity:0;transition:opacity .5s ease}'
    + '.ddp-ov.on{opacity:1}'
    + '.ddp-card{position:relative;width:min(540px,94vw);max-height:92vh;overflow:auto;background:#2c1210;border:1px solid rgba(215,193,145,.38);border-radius:12px;box-shadow:0 40px 120px rgba(0,0,0,.6);transform:translateY(26px);transition:transform .6s cubic-bezier(.2,.8,.25,1)}'
    + '.ddp-ov.on .ddp-card{transform:none}'
    + '.ddp-x{position:absolute;top:.65rem;right:.65rem;z-index:2;width:34px;height:34px;border-radius:50%;border:1px solid rgba(244,229,194,.4);background:rgba(24,8,7,.55);color:#f4e5c2;font-size:1rem;line-height:1;cursor:pointer}'
    + '.ddp-art{display:block;width:100%;aspect-ratio:16/8.2;object-fit:cover;object-position:center 30%}'
    + '.ddp-b{padding:1.7rem 2rem 2rem;text-align:center;color:#f4e5c2;font-family:Montserrat,system-ui,sans-serif}'
    + '.ddp-k{font-size:.66rem;font-weight:600;letter-spacing:.32em;text-transform:uppercase;color:#d7c191;margin:0 0 .7rem}'
    + '.ddp-t{font-family:Archivo,Montserrat,sans-serif;font-stretch:125%;font-weight:700;font-size:clamp(1.3rem,3.4vw,1.75rem);line-height:1.2;color:#fff;margin:0 0 .8rem}'
    + '.ddp-p{font-size:.92rem;font-weight:300;line-height:1.65;color:#eee2c1;max-width:26rem;margin:0 auto 1.5rem}'
    + '.ddp-p b{font-weight:600;color:#d7c191}'
    + '.ddp-cta{display:block;background:#d7c191;color:#2c1210;text-decoration:none;font-weight:600;font-size:.85rem;letter-spacing:.16em;text-transform:uppercase;padding:1.05rem;border-radius:3px;transition:background .3s}'
    + '.ddp-cta:hover{background:#f4e5c2}'
    + '.ddp-skip{display:inline-block;margin-top:1rem;font-size:.78rem;color:rgba(244,229,194,.65);text-decoration:underline;text-underline-offset:3px;cursor:pointer;background:none;border:0;font-family:inherit}'
    + '.ddp-other{position:fixed;right:1.4rem;bottom:1.4rem;z-index:99991;display:flex;align-items:center;gap:.6rem;background:rgba(24,8,7,.6);border:1px solid rgba(215,193,145,.55);color:#f4e5c2;text-decoration:none;font-family:Montserrat,system-ui,sans-serif;font-size:.78rem;font-weight:600;letter-spacing:.08em;padding:.85rem 1.3rem;border-radius:999px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);cursor:pointer;transition:all .3s;opacity:0}'
    + '.ddp-ov.on ~ .ddp-other,.ddp-other.on{opacity:1}'
    + '.ddp-other:hover{background:#d7c191;color:#2c1210}'
    + '@media(max-width:560px){.ddp-b{padding:1.4rem 1.2rem 1.6rem}.ddp-other{right:.9rem;bottom:5.2rem;font-size:.72rem;padding:.7rem 1rem}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var ov = document.createElement('div');
  ov.className = 'ddp-ov';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-label', 'Dia dos Pais na Casa Ferreira');
  ov.innerHTML = ''
    + '<div class="ddp-card">'
    + '  <button class="ddp-x" aria-label="Fechar">✕</button>'
    + '  <img class="ddp-art" src="' + CFG.art + '" alt="Dia dos Pais na Casa Ferreira Wine">'
    + '  <div class="ddp-b">'
    + '    <p class="ddp-k">Edição especial • 09 de agosto</p>'
    + '    <p class="ddp-t">Neste Dia dos Pais, celebre o tempo à mesa.</p>'
    + '    <p class="ddp-p">Menu do Chef Houston Pina em três tempos, <b>Jazz Harmony ao vivo</b> e a Serra da Borborema. Apenas <b>40 reservas</b>.</p>'
    + '    <a class="ddp-cta" href="' + CFG.url + '">Conhecer o Dia dos Pais →</a>'
    + '    <button class="ddp-skip">Continuar no site principal</button>'
    + '  </div>'
    + '</div>';

  var other = document.createElement('button');
  other.className = 'ddp-other';
  other.innerHTML = '<span>Demais dias • experiência Casa Ferreira</span><span>→</span>';

  function close() {
    try { sessionStorage.setItem('ddpBannerSeen', '1'); } catch (e) {}
    ov.classList.remove('on');
    other.classList.remove('on');
    setTimeout(function () { ov.remove(); other.remove(); }, 500);
    document.removeEventListener('keydown', onKey);
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function mount() {
    document.body.appendChild(ov);
    document.body.appendChild(other);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { ov.classList.add('on'); other.classList.add('on'); });
    });
    ov.querySelector('.ddp-x').addEventListener('click', close);
    ov.querySelector('.ddp-skip').addEventListener('click', close);
    other.addEventListener('click', close);           // “demais dias” = permanece no site principal
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', onKey);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
