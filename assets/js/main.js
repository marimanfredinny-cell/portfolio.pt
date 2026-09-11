var I18N = {
  nav1: { br: "Serviços", pt: "Serviços" },
  nav2: { br: "Sites", pt: "Sites" },
  nav3: { br: "Perfis", pt: "Perfis" },
  nav4: { br: "Contato", pt: "Contacto" },
  navcta: { br: "Falar com a Mari", pt: "Falar com a Mari" },

  heroEyebrow: { br: "Para quem presta serviço e quer escalar", pt: "Para quem presta serviços e quer escalar" },
  heroH1: { br: "Seu serviço é bom. <em>Sua presença digital</em> precisa mostrar isso.", pt: "O seu serviço é bom. <em>A sua presença digital</em> precisa mostrar isso." },
  heroLead: { br: "Há cinco anos, entrego estratégia, site, automação com IA e tráfego pago pra quem presta serviço, quer aparecer no Google e faturar mais.", pt: "Há cinco anos, entrego estratégia, site, automação com IA e tráfego pago para quem presta serviços, quer aparecer no Google e faturar mais." },
  heroBtn1: { br: "Ver perfis que já geri →", pt: "Ver perfis que já geri →" },
  heroBtn2: { br: "Ver sites que já entreguei", pt: "Ver sites que já entreguei" },

  stat0: { br: "Anos comandando projeto digital", pt: "Anos a comandar projetos digitais" },
  stat1: { br: "Perfis geridos", pt: "Perfis geridos" },
  stat2: { br: "Sites entregues", pt: "Sites entregues" },
  stat3: { br: "Frentes de atuação", pt: "Frentes de atuação" },

  servEyebrow: { br: "O que eu faço", pt: "O que eu faço" },
  servH2: { br: "Tudo que o seu digital precisa, <em>sem enrolação</em>.", pt: "Tudo o que o seu digital precisa, <em>sem rodeios</em>." },
  serv1t: { br: "Estratégia Digital", pt: "Estratégia Digital" },
  serv1p: { br: "Diagnóstico completo e um plano pra sair do operacional e escalar, com prioridade clara.", pt: "Diagnóstico completo e um plano para sair do operacional e escalar, com prioridade clara." },
  serv2t: { br: "Sites de Alta Conversão", pt: "Sites de Alta Conversão" },
  serv2p: { br: "Site pensado pra aparecer no Google e converter, não só pra existir.", pt: "Site pensado para aparecer no Google e converter, não apenas para existir." },
  serv3t: { br: "Automação com IA", pt: "Automação com IA" },
  serv3p: { br: "Atendimento e qualificação automáticos, pra escalar sem contratar mais gente.", pt: "Atendimento e qualificação automáticos, para escalar sem contratar mais pessoas." },
  serv4t: { br: "Tráfego Pago", pt: "Tráfego Pago" },
  serv4p: { br: "Campanha de verdade, não o botão de impulsionar. Investimento indo pra quem decide comprar.", pt: "Campanha a sério, não o botão de impulsionar. Investimento a chegar a quem decide comprar." },

  sitesEyebrow: { br: "Projetos que já comandei", pt: "Projetos que já comandei" },
  sitesH2: { br: "Sites que já <em>geraram demanda</em> de verdade.", pt: "Sites que já <em>geraram procura</em> a sério." },
  sitesP: { br: "Projetos que eu mesma comandei do início ao fim. Clique pra ver funcionando.", pt: "Projetos que eu própria comandei do início ao fim. Clique para ver a funcionar." },

  site1p: { br: "Hub de ferramentas e diagnóstico pra captar cliente.", pt: "Hub de ferramentas e diagnóstico para captar clientes." },
  site2p: { br: "Calcula o Custo de Aquisição de Cliente na hora.", pt: "Calcula o Custo de Aquisição de Cliente na hora." },
  site3p: { br: "Mostra quanto investir pra bater a meta de clientes.", pt: "Mostra quanto investir para atingir a meta de clientes." },
  site4p: { br: "Site institucional pra empresa de vias férreas.", pt: "Site institucional para empresa de vias férreas." },
  site5p: { br: "Site institucional com foco em agendamento.", pt: "Site institucional com foco em marcações." },
  site6p: { br: "Formulário de diagnóstico e acesso às ferramentas.", pt: "Formulário de diagnóstico e acesso às ferramentas." },
  site7p: { br: "Acesso rápido pra quem chega pelo Instagram.", pt: "Acesso rápido para quem chega pelo Instagram." },
  site8p: { br: "IA que monta o planejamento de conteúdo em minutos.", pt: "IA que monta o planeamento de conteúdo em minutos." },
  site9p: { br: "Site institucional pra cirurgiã de transplante capilar.", pt: "Site institucional para cirurgiã de transplante capilar." },

  igEyebrow: { br: "Projetos que já comandei", pt: "Projetos que já comandei" },
  igH2: { br: "Perfis que já geri e <em>geraram demanda</em>.", pt: "Perfis que já geri e <em>geraram procura</em>." },
  igP: { br: "Projetos de estratégia e tráfego que eu comandei. Toque num celular pra ver de verdade.", pt: "Projetos de estratégia e tráfego que eu comandei. Toque num telemóvel para ver de verdade." },

  ctaH2: { br: "O próximo passo é <em>simples</em>.", pt: "O próximo passo é <em>simples</em>." },
  ctaP: { br: "Se seu tráfego ainda depende do impulsionador e seu site não aparece no Google, vale entender onde está o gargalo.", pt: "Se o seu tráfego ainda depende do impulsionador e o seu site não aparece no Google, vale a pena perceber onde está o entrave." },
  ctaBtn1: { br: "Falar com a Mari →", pt: "Falar com a Mari →" },
  ctaBtn2: { br: "Ver portfólio", pt: "Ver portfólio" }
};

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var entry = I18N[el.getAttribute('data-i18n')];
    if (entry) el.innerHTML = entry[lang];
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'pt-BR';
  document.querySelectorAll('.lang-opt').forEach(function (el) {
    el.classList.toggle('is-active', el.getAttribute('data-lang') === lang);
  });
  try { localStorage.setItem('mari-lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  var revealEls = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
    observer.observe(el);
  });

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = document.querySelector('.lang-opt.is-active').getAttribute('data-lang');
      applyLang(current === 'br' ? 'pt' : 'br');
    });
  }
  var saved = null;
  try { saved = localStorage.getItem('mari-lang'); } catch (e) {}
  if (saved === 'pt') applyLang('pt');
});
