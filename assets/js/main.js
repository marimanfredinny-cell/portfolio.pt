var I18N = {
  nav1: { br: "Serviços", pt: "Serviços" },
  nav2: { br: "Sites", pt: "Sites" },
  nav3: { br: "Perfis", pt: "Perfis" },
  nav4: { br: "Contato", pt: "Contacto" },
  navcta: { br: "Falar com a Mari", pt: "Falar com a Mari" },

  heroEyebrow: { br: "Estratégia · Sites · IA · Tráfego pago", pt: "Estratégia · Sites · IA · Tráfego pago" },
  heroH1: { br: "Presença digital que vira <em>cliente pagando</em>.", pt: "Presença digital que se torna <em>cliente a pagar</em>." },
  heroLead: { br: "Estratégia, site, automação com IA e tráfego pago, operados por uma pessoa só, com direção clara pro seu faturamento.", pt: "Estratégia, site, automação com IA e tráfego pago, geridos por uma só pessoa, com direção clara para a sua faturação." },
  heroBtn1: { br: "Ver perfis que já geri →", pt: "Ver perfis que já geri →" },
  heroBtn2: { br: "Ver sites que já entreguei", pt: "Ver sites que já entreguei" },

  stat1: { br: "Perfis geridos", pt: "Perfis geridos" },
  stat2: { br: "Sites entregues", pt: "Sites entregues" },
  stat3: { br: "Frentes de atuação", pt: "Frentes de atuação" },

  servEyebrow: { br: "O que eu faço", pt: "O que eu faço" },
  servH2: { br: "Tudo que o seu digital precisa, <em>sem enrolação</em>.", pt: "Tudo o que o seu digital precisa, <em>sem rodeios</em>." },
  serv1t: { br: "Estratégia Digital", pt: "Estratégia Digital" },
  serv1p: { br: "Diagnóstico completo e um plano de ação com prioridade clara, sem achismo.", pt: "Diagnóstico completo e um plano de ação com prioridade clara, sem palpites." },
  serv2t: { br: "Sites de Alta Conversão", pt: "Sites de Alta Conversão" },
  serv2p: { br: "Um site pensado pra vender, não só pra ficar bonito.", pt: "Um site pensado para vender, não apenas para ficar bonito." },
  serv3t: { br: "Automação com IA", pt: "Automação com IA" },
  serv3p: { br: "Sua empresa respondendo e qualificando lead mesmo com você fora do ar.", pt: "A sua empresa a responder e a qualificar leads mesmo consigo offline." },
  serv4t: { br: "Tráfego Pago", pt: "Tráfego Pago" },
  serv4p: { br: "Investimento direcionado pra quem decide comprar, não pra quem só curte.", pt: "Investimento direcionado a quem decide comprar, não a quem apenas gosta da publicação." },

  sitesEyebrow: { br: "Portfólio · Sites", pt: "Portfólio · Sites" },
  sitesH2: { br: "Sites que <em>eu mesma construí</em>.", pt: "Sites que <em>eu própria construí</em>." },
  sitesP: { br: "Clique em qualquer um pra ver funcionando de verdade.", pt: "Clique em qualquer um para ver a funcionar de verdade." },

  site1p: { br: "Hub de ferramentas e diagnóstico pra captar cliente.", pt: "Hub de ferramentas e diagnóstico para captar clientes." },
  site2p: { br: "Calcula o Custo de Aquisição de Cliente na hora.", pt: "Calcula o Custo de Aquisição de Cliente na hora." },
  site3p: { br: "Mostra quanto investir pra bater a meta de clientes.", pt: "Mostra quanto investir para atingir a meta de clientes." },
  site4p: { br: "Site institucional pra empresa de vias férreas.", pt: "Site institucional para empresa de vias férreas." },
  site5p: { br: "Site institucional com foco em agendamento.", pt: "Site institucional com foco em marcações." },
  site6p: { br: "Formulário de diagnóstico e acesso às ferramentas.", pt: "Formulário de diagnóstico e acesso às ferramentas." },
  site7p: { br: "Acesso rápido pra quem chega pelo Instagram.", pt: "Acesso rápido para quem chega pelo Instagram." },
  site8p: { br: "IA que monta o planejamento de conteúdo em minutos.", pt: "IA que monta o planeamento de conteúdo em minutos." },
  site9p: { br: "Site institucional pra cirurgiã de transplante capilar.", pt: "Site institucional para cirurgiã de transplante capilar." },

  igEyebrow: { br: "Portfólio · Perfis", pt: "Portfólio · Perfis" },
  igH2: { br: "Perfis que já <em>geri</em>.", pt: "Perfis que já <em>geri</em>." },
  igP: { br: "Toque num celular pra abrir o perfil de verdade.", pt: "Toque num telemóvel para abrir o perfil de verdade." },

  ctaH2: { br: "O próximo passo é <em>simples</em>.", pt: "O próximo passo é <em>simples</em>." },
  ctaP: { br: "Se o seu digital ainda não gera demanda consistente, vale entender por quê.", pt: "Se o seu digital ainda não gera procura consistente, vale a pena perceber porquê." },
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
