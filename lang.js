(function () {
  'use strict';

  /**
   * Keys whose values contain real HTML elements (<br>, <em>, <strong>, <a>).
   * All other keys are plain text and will be applied with textContent.
   */
  var HTML_KEYS = {
    'hero-h1': true,
    'benefits-title': true,
    'mod-title': true,
    'dep-title': true,
    'sponsor-p': true,
    'footer-sponsor': true
  };

  var TRANSLATIONS = {
    'pt-BR': {
      /* Meta */
      'meta-title': 'Academia FitCode \u2014 Transforme Seu Corpo, Liberte Sua Mente',
      'meta-description': 'Academia FitCode \u2014 descubra os benefícios do esporte e escolha sua modalidade. Musculação, Natação, Yoga, CrossFit, Corrida e Artes Marciais.',
      /* Navegação */
      'nav-beneficios': 'Benefícios',
      'nav-modalidades': 'Modalidades',
      'nav-depoimentos': 'Depoimentos',
      'nav-parceiro': 'Parceiro',
      'nav-cta': 'Matricule-se',
      /* Hero */
      'hero-badge': '\u25cf Transformação Real',
      'hero-h1': 'Seu corpo é capaz de<br><em>muito mais</em> do que<br>você imagina',
      'hero-p': 'Ciência e movimento unidos para transformar sua saúde, sua mente e sua vida. Descubra como praticar esporte muda tudo \u2014 de dentro para fora.',
      'hero-btn-primary': 'Ver Modalidades',
      'hero-btn-outline': 'Por que se exercitar?',
      'hero-scroll': 'Explore',
      /* Benefícios */
      'benefits-label': 'Por que se exercitar',
      'benefits-title': 'Benefícios comprovados<br>pela ciência',
      'benefits-sub': 'Praticar esporte regularmente é a decisão mais impactante que você pode tomar pela sua saúde \u2014 física e mental.',
      'benefit-cardio-title': 'Saúde Cardiovascular',
      'benefit-cardio-p': 'O exercício fortalece o coração, reduz a pressão arterial e diminui significativamente o risco de doenças cardíacas.',
      'benefit-cardio-stat-label': 'de redução no risco cardíaco',
      'benefit-mental-title': 'Bem-estar Mental',
      'benefit-mental-p': 'Atividade física libera endorfinas e serotonina, combatendo ansiedade, depressão e melhorando o sono profundamente.',
      'benefit-mental-stat-label': 'de melhora no humor',
      'benefit-strength-title': 'Força & Longevidade',
      'benefit-strength-p': 'Músculos mais fortes protegem articulações, melhoram a postura e aumentam a qualidade de vida por décadas.',
      'benefit-strength-stat-label': 'anos a mais de vida ativa',
      'benefit-community-title': 'Comunidade & Motivação',
      'benefit-community-p': 'Treinar junto cria laços reais. Nossa comunidade mantém você motivado nos dias difíceis e celebra cada conquista.',
      'benefit-community-stat-label': 'mais consistência em grupo',
      /* Modalidades */
      'mod-label': 'O que oferecemos',
      'mod-title': 'Escolha sua<br>modalidade',
      'mod-sub': 'Seis modalidades, um objetivo: encontrar o movimento que vai mudar a sua vida e que você vai amar praticar todo dia.',
      'mod-musculacao-title': 'Musculação',
      'mod-musculacao-p': 'Ganho de massa muscular, definição e força com acompanhamento individualizado de instrutores certificados.',
      'mod-musculacao-tag': 'Todos os níveis',
      'mod-natacao-title': 'Natação',
      'mod-natacao-p': 'O exercício mais completo do mundo. Trabalha todos os grupos musculares sem impacto nas articulações \u2014 ideal para todas as idades.',
      'mod-natacao-tag': 'Zero impacto',
      'mod-yoga-title': 'Yoga',
      'mod-yoga-p': 'Flexibilidade, equilíbrio e mindfulness em harmonia. Reduza o estresse e melhore a conexão corpo-mente com nossas instrutoras especializadas.',
      'mod-yoga-tag': 'Anti-estresse',
      'mod-crossfit-title': 'CrossFit',
      'mod-crossfit-p': 'Alta intensidade, resultados acelerados. Treinamento funcional em comunidade com foco em performance e superação de limites.',
      'mod-crossfit-tag': 'Alta intensidade',
      'mod-corrida-title': 'Corrida',
      'mod-corrida-p': 'Assessoria de corrida com planilhas periodizadas para quem quer completar o primeiro 5K ou bater o recorde pessoal na maratona.',
      'mod-corrida-tag': 'Iniciante ao avançado',
      'mod-artes-title': 'Artes Marciais',
      'mod-artes-p': 'Muay thai, jiu-jitsu e boxe com mestres experientes. Aprenda autodefesa, disciplina e supere seus limites a cada aula.',
      'mod-artes-tag': 'Defesa & disciplina',
      /* Depoimentos */
      'dep-label': 'O que dizem nossos alunos',
      'dep-title': 'Depoimentos<br>reais',
      'dep-sub': 'Veja como a Academia FitCode transformou a saúde, o bem-estar e a autoestima de quem escolheu começar hoje.',
      /* Patrocinador */
      'sponsor-eyebrow': '\u2726 Patrocinador Oficial',
      'sponsor-subtitle': 'Saúde & Bem-estar',
      'sponsor-p': 'A <strong>Boa Farma</strong> acredita que saúde vai muito além dos medicamentos. Por isso, apoia a Academia FitCode levando suplementação de qualidade, vitaminas e orientação farmacêutica especializada para todos os atletas.',
      'sponsor-quote': '\u201cMovimento é remédio. E quando o movimento encontra a nutrição certa, os resultados são extraordinários.\u201d',
      'sponsor-btn': 'Conhecer a Boa Farma \u2192',
      /* Footer */
      'footer-tagline': 'Transforme seu corpo. Liberte sua mente. Viva mais.',
      'footer-sponsor': 'Patrocinado com orgulho pela <a href="#">Boa Farma</a> \u2014 Saúde & Bem-estar'
    },
    'en': {
      /* Meta */
      'meta-title': 'FitCode Academy \u2014 Transform Your Body, Free Your Mind',
      'meta-description': 'FitCode Academy \u2014 discover the benefits of sport and choose your activity. Weight Training, Swimming, Yoga, CrossFit, Running and Martial Arts.',
      /* Navigation */
      'nav-beneficios': 'Benefits',
      'nav-modalidades': 'Activities',
      'nav-depoimentos': 'Testimonials',
      'nav-parceiro': 'Partner',
      'nav-cta': 'Enroll Now',
      /* Hero */
      'hero-badge': '\u25cf Real Transformation',
      'hero-h1': 'Your body is capable of<br><em>so much more</em> than<br>you imagine',
      'hero-p': 'Science and movement united to transform your health, your mind and your life. Discover how practicing sport changes everything \u2014 from the inside out.',
      'hero-btn-primary': 'View Activities',
      'hero-btn-outline': 'Why exercise?',
      'hero-scroll': 'Explore',
      /* Benefits */
      'benefits-label': 'Why exercise',
      'benefits-title': 'Science-proven<br>benefits',
      'benefits-sub': 'Exercising regularly is the most impactful decision you can make for your health \u2014 physical and mental.',
      'benefit-cardio-title': 'Cardiovascular Health',
      'benefit-cardio-p': 'Exercise strengthens the heart, reduces blood pressure and significantly lowers the risk of heart disease.',
      'benefit-cardio-stat-label': 'reduction in cardiac risk',
      'benefit-mental-title': 'Mental Wellbeing',
      'benefit-mental-p': 'Physical activity releases endorphins and serotonin, combating anxiety, depression and deeply improving sleep.',
      'benefit-mental-stat-label': 'improvement in mood',
      'benefit-strength-title': 'Strength & Longevity',
      'benefit-strength-p': 'Stronger muscles protect joints, improve posture and increase quality of life for decades.',
      'benefit-strength-stat-label': 'more years of active life',
      'benefit-community-title': 'Community & Motivation',
      'benefit-community-p': 'Training together creates real bonds. Our community keeps you motivated on tough days and celebrates every achievement.',
      'benefit-community-stat-label': 'more consistency in a group',
      /* Activities */
      'mod-label': 'What we offer',
      'mod-title': 'Choose your<br>activity',
      'mod-sub': 'Six activities, one goal: find the movement that will change your life and that you will love to practice every day.',
      'mod-musculacao-title': 'Weight Training',
      'mod-musculacao-p': 'Muscle gain, definition and strength with individualized guidance from certified instructors.',
      'mod-musculacao-tag': 'All levels',
      'mod-natacao-title': 'Swimming',
      'mod-natacao-p': 'The most complete exercise in the world. Works all muscle groups without joint impact \u2014 ideal for all ages.',
      'mod-natacao-tag': 'Zero impact',
      'mod-yoga-title': 'Yoga',
      'mod-yoga-p': 'Flexibility, balance and mindfulness in harmony. Reduce stress and improve the mind-body connection with our specialized instructors.',
      'mod-yoga-tag': 'Anti-stress',
      'mod-crossfit-title': 'CrossFit',
      'mod-crossfit-p': 'High intensity, accelerated results. Functional training in community with a focus on performance and pushing limits.',
      'mod-crossfit-tag': 'High intensity',
      'mod-corrida-title': 'Running',
      'mod-corrida-p': 'Running coaching with periodized programs for those who want to complete their first 5K or beat their personal record in a marathon.',
      'mod-corrida-tag': 'Beginner to advanced',
      'mod-artes-title': 'Martial Arts',
      'mod-artes-p': 'Muay thai, jiu-jitsu and boxing with experienced masters. Learn self-defense, discipline and push your limits every class.',
      'mod-artes-tag': 'Defense & discipline',
      /* Testimonials */
      'dep-label': 'What our students say',
      'dep-title': 'Real<br>testimonials',
      'dep-sub': 'See how FitCode Academy has transformed the health, wellbeing and self-esteem of those who chose to start today.',
      /* Sponsor */
      'sponsor-eyebrow': '\u2726 Official Sponsor',
      'sponsor-subtitle': 'Health & Wellness',
      'sponsor-p': '<strong>Boa Farma</strong> believes that health goes far beyond medication. That is why it supports FitCode Academy by providing quality supplementation, vitamins and specialized pharmaceutical guidance to all athletes.',
      'sponsor-quote': '\u201cMovement is medicine. And when movement meets the right nutrition, the results are extraordinary.\u201d',
      'sponsor-btn': 'Learn about Boa Farma \u2192',
      /* Footer */
      'footer-tagline': 'Transform your body. Free your mind. Live more.',
      'footer-sponsor': 'Proudly sponsored by <a href="#">Boa Farma</a> \u2014 Health & Wellness'
    }
  };

  var ARIA_LABELS = {
    'pt-BR': {
      'lang-switcher': 'Selecionar idioma',
      'nav-main': 'Navegação principal',
      'sponsor-section': 'Patrocinador Oficial \u2014 Boa Farma'
    },
    'en': {
      'lang-switcher': 'Select language',
      'nav-main': 'Main navigation',
      'sponsor-section': 'Official Sponsor \u2014 Boa Farma'
    }
  };

  function applyLanguage(lang) {
    var t = TRANSLATIONS[lang];
    var a = ARIA_LABELS[lang];
    if (!t) return;

    /* Update <html lang> for screen-reader language announcements */
    document.documentElement.lang = lang;

    /* Update translatable text/html elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] === undefined) return;
      if (HTML_KEYS[key]) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });

    /* Update aria-labels */
    if (a) {
      document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        var key = el.getAttribute('data-i18n-aria');
        if (a[key] !== undefined) {
          el.setAttribute('aria-label', a[key]);
        }
      });
    }

    /* Update <title> and meta description */
    if (t['meta-title']) {
      document.title = t['meta-title'];
    }
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t['meta-description']) {
      metaDesc.setAttribute('content', t['meta-description']);
    }

    /* Update language toggle button states */
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      if (active) {
        btn.classList.add('fc-lang-btn--active');
      } else {
        btn.classList.remove('fc-lang-btn--active');
      }
    });

    /* Persist preference */
    try {
      localStorage.setItem('fc-lang', lang);
    } catch (e) { /* no-op in sandboxed environments */ }
  }

  function init() {
    /* Attach click handlers */
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    /* Determine initial language:
       1. Saved user preference
       2. English browser language → English
       3. Default: pt-BR  */
    var lang = 'pt-BR';
    var saved = null;
    try { saved = localStorage.getItem('fc-lang'); } catch (e) {}

    if (saved === 'en' || saved === 'pt-BR') {
      lang = saved;
    } else {
      var browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (browser.startsWith('en')) {
        lang = 'en';
      }
    }

    /* Always call applyLanguage to ensure proper button states on init */
    applyLanguage(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
