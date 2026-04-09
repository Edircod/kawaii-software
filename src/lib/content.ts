import type { Locale } from "@/lib/i18n";

type Capability = {
  title: string;
  keywords: string[];
  description: string;
};

type ProcessStep = {
  code: string;
  title: string;
  body: string;
};

type Stat = {
  value: string;
  label: string;
};

type PhilosophyCard = {
  kicker: string;
  title: string;
  body: string;
  tags: string[];
  accent: "primary" | "secondary" | "jolly";
};

type Copy = {
  meta: {
    title: string;
    description: string;
  };
  languages: Record<Locale, string>;
  nav: {
    philosophy: string;
    capabilities: string;
    process: string;
    contact: string;
    talk: string;
    themeDark: string;
    themeLight: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: [string, string];
    eyebrow: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    verticalNote: string;
    panelTitle: string;
    panelBody: string;
    panelCoverage: string;
  };
  philosophy: {
    headline: string;
    intro: string;
    cards: PhilosophyCard[];
  };
  coverage: {
    headline: string;
    intro: string;
    totalLabel: string;
    totalValue: string;
    continuous: string;
    workday: string;
    officeHoursLabel: string;
    liveNowLabel: string;
    milan: string;
    sydney: string;
    tokyo: string;
    strip: string[];
  };
  capabilities: {
    headline: string;
    intro: string;
    items: Capability[];
  };
  process: {
    headline: string;
    intro: string;
    steps: ProcessStep[];
  };
  numbers: {
    headline: string;
    items: Stat[];
  };
  contact: {
    headline: string;
    subheadline: string;
    officeTitle: string;
    officeHours: string;
    response: string;
    milanLabel: string;
    sydneyLabel: string;
    tokyoLabel: string;
    fields: {
      name: string;
      email: string;
      company: string;
      project: string;
      budget: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      project: string;
    };
    budgets: string[];
    submit: string;
    success: string;
    inboxNote: string;
    locationNote: string;
    validation: {
      name: string;
      email: string;
      project: string;
    };
  };
  footer: {
    tagline: string;
    privacy: string;
    cookie: string;
    linkedin: string;
    github: string;
    copyright: string;
    closing: string;
  };
};

export const copy: Record<Locale, Copy> = {
  en: {
    meta: {
      title: "kawaii(x,y) | Cute software that works.",
      description:
        "A boutique software house blending Japanese craft, Italian aesthetics, and Australian engineering into enterprise-grade software."
    },
    languages: {
      en: "English",
      it: "Italiano",
      ja: "Japanese"
    },
    nav: {
      philosophy: "philosophy",
      capabilities: "capabilities",
      process: "process",
      contact: "contact",
      talk: "Let's talk",
      themeDark: "Dark mode",
      themeLight: "Light mode",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      title: ["Software that", "actually works."],
      eyebrow: "kawaii(x,y) - where elegance is a constraint, not an afterthought.",
      subtitle:
        "Two teams. Three cities. One function: deliver enterprise-grade software without sacrificing a single pixel of quality.",
      primaryCta: "Discover how",
      secondaryCta: "Contact us",
      verticalNote: "kawaii(x,y) © Palermo - Perth - Tokyo",
      panelTitle: "Cute software that works.",
      panelBody:
        "Boutique execution for enterprise teams that care about architecture, reliability, and taste in equal measure.",
      panelCoverage: "24h delivery coverage"
    },
    philosophy: {
      headline: "Every problem is an equation.",
      intro:
        "kawaii(x,y) is where disciplined craft, visual intelligence, and pragmatic engineering collapse into one delivery model.",
      cards: [
        {
          kicker: "Japanese spirit",
          title: "Shokunin",
          body:
            "The Japanese artisan does not stop at working. They stop at right. We bring that mindset into software: each line is deliberate, each architecture choice intentional.",
          tags: ["#kaizen", "#ikigai", "#shokunin"],
          accent: "primary"
        },
        {
          kicker: "Italian design",
          title: "Form is substance",
          body:
            "Italian aesthetics are not decoration. They are strategy. Clean interfaces lower cognitive load, speed adoption, and communicate trust before the first click.",
          tags: ["#ux", "#typography", "#craftsmanship"],
          accent: "secondary"
        },
        {
          kicker: "Australian engineering",
          title: "Pragmatic by design",
          body:
            "No over-engineering, no architecture theatre. We build systems that scale when needed, stay observable under pressure, and ship without drama.",
          tags: ["#scalability", "#devops", "#reliability"],
          accent: "jolly"
        }
      ]
    },
    coverage: {
      headline: "The sun never sets on our code.",
      intro:
        "While your team sleeps, ours keeps moving. Morning briefs become evening releases, without losing handoff quality.",
      totalLabel: "Total",
      totalValue: "24h of active development",
      continuous: "continuous, coordinated, accountable",
      workday: "09:00 -> 19:00",
      officeHoursLabel: "Office",
      liveNowLabel: "Live",
      milan: "Palermo",
      sydney: "Perth",
      tokyo: "Tokyo",
      strip: [
        "No dead days.",
        "No missed handoffs.",
        "No artificial waiting between iterations."
      ]
    },
    capabilities: {
      headline: "kawaii(enterprise, scale)",
      intro:
        "We work where quality has to survive scale, stakeholder scrutiny, and real operational complexity.",
      items: [
        {
          title: "Cloud Architectures",
          keywords: ["AWS", "GCP", "multi-region"],
          description:
            "Infrastructure shaped for resilience, cost clarity, and enterprise governance."
        },
        {
          title: "Backend Systems",
          keywords: ["APIs", "real-time", "pipelines"],
          description:
            "Reliable services for data-intensive, mission-critical products."
        },
        {
          title: "Frontend Enterprise",
          keywords: ["Next.js", "design systems", "performance"],
          description:
            "Interfaces that feel refined under scrutiny and stay fast under load."
        },
        {
          title: "Mobile",
          keywords: ["React Native", "native", "offline-first"],
          description:
            "Mobile products engineered for continuity, not just app-store presence."
        },
        {
          title: "AI Integration",
          keywords: ["LLMs", "RAG", "automation"],
          description:
            "Useful AI systems embedded into workflows with measurable operational value."
        },
        {
          title: "DevOps & Security",
          keywords: ["CI/CD", "observability", "hardening"],
          description:
            "Delivery pipelines and infrastructure ready for serious environments."
        }
      ]
    },
    process: {
      headline: "The process is the product.",
      intro:
        "We treat delivery as a system. Clarity in, quality out.",
      steps: [
        {
          code: "f(x)",
          title: "Brief",
          body:
            "We listen before proposing. A half-defined problem usually becomes a half-successful project."
        },
        {
          code: "f(x,y)",
          title: "Architecture",
          body:
            "We sketch the solution before touching code. Every decision has a reason and a trade-off."
        },
        {
          code: "kawaii(x,y)",
          title: "Build",
          body:
            "Palermo, Perth, and Tokyo stay in sync so no feature disappears into silence."
        },
        {
          code: "assert(quality)",
          title: "Review",
          body:
            "Cross-team reviews, testing discipline, and performance budgets before anything gets shipped."
        },
        {
          code: "loop()",
          title: "Deploy & Iterate",
          body:
            "Launch is not the finish line. It is the first measured iteration of continuous improvement."
        }
      ]
    },
    numbers: {
      headline: "Equations do not lie.",
      items: [
        { value: "24h", label: "daily coverage" },
        { value: "3", label: "cities, one cadence" },
        { value: "0", label: "missed deadlines so far" },
        { value: "∞", label: "possible iterations" }
      ]
    },
    contact: {
      headline: "You have a complex problem. We have the function.",
      subheadline:
        "Tell us about the project. We will respond within 24 hours, whichever time zone you are writing from.",
      officeTitle: "Current office time",
      officeHours: "Office hours: 09:00 - 19:00",
      response: "Usually answers within one global work cycle.",
      milanLabel: "Palermo, Italy",
      sydneyLabel: "Perth, Australia",
      tokyoLabel: "Tokyo, Japan",
      fields: {
        name: "Name",
        email: "Email",
        company: "Company",
        project: "Project brief",
        budget: "Indicative budget"
      },
      placeholders: {
        name: "Ada Lovelace",
        email: "ada@company.com",
        company: "Company name",
        project: "Context, constraints, ambition, timelines."
      },
      budgets: ["<50k", "50k-200k", "200k+", "To be defined"],
      submit: "kawaii(send)",
      success: "Message staged. The next human reply should be close behind.",
      inboxNote: "Primary contact inbox",
      locationNote: "Boutique delivery across three aligned time horizons.",
      validation: {
        name: "Please enter your name.",
        email: "Please provide a valid email address.",
        project: "Please share at least a short project summary."
      }
    },
    footer: {
      tagline: "Cute software that works.",
      privacy: "Privacy",
      cookie: "Cookies",
      linkedin: "LinkedIn",
      github: "GitHub",
      copyright: "kawaii(x,y) © 2025 - Palermo, Italy / Perth, Australia / Tokyo, Japan",
      closing: "// built with kaizen, shipped with amore"
    }
  },
  it: {
    meta: {
      title: "kawaii(x,y) | Cute software that works.",
      description:
        "Software house boutique che unisce artigianato giapponese, estetica italiana e pragmatismo australiano in prodotti enterprise-grade."
    },
    languages: {
      en: "English",
      it: "Italiano",
      ja: "Giapponese"
    },
    nav: {
      philosophy: "filosofia",
      capabilities: "capacità",
      process: "processo",
      contact: "contatti",
      talk: "Parliamo",
      themeDark: "Modalità scura",
      themeLight: "Modalità chiara",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu"
    },
    hero: {
      title: ["Software che", "funziona. Davvero."],
      eyebrow: "kawaii(x,y) - where elegance is a constraint, not an afterthought.",
      subtitle:
        "Due team. Tre città. Una funzione: consegnare software enterprise-grade senza sacrificare un singolo pixel di qualità.",
      primaryCta: "Scopri come",
      secondaryCta: "Contattaci",
      verticalNote: "kawaii(x,y) © Palermo - Perth - Tokyo",
      panelTitle: "Cute software that works.",
      panelBody:
        "Esecuzione boutique per team enterprise che vogliono architettura, affidabilità e gusto nello stesso sistema.",
      panelCoverage: "Copertura operativa 24h"
    },
    philosophy: {
      headline: "Ogni problema è un'equazione.",
      intro:
        "kawaii(x,y) unisce disciplina artigianale, intelligenza visiva e ingegneria pragmatica in un unico modello operativo.",
      cards: [
        {
          kicker: "Anima giapponese",
          title: "Shokunin",
          body:
            "Il maestro artigiano giapponese non si ferma al funzionante. Si ferma al giusto. Portiamo questa mentalità nel codice: ogni riga è deliberata, ogni architettura è intenzionale.",
          tags: ["#kaizen", "#ikigai", "#shokunin"],
          accent: "primary"
        },
        {
          kicker: "Design italiano",
          title: "La forma è sostanza",
          body:
            "L'estetica italiana non è decorazione. È strategia. Interfacce pulite riducono il carico cognitivo, accelerano l'adozione e comunicano affidabilità prima ancora del primo click.",
          tags: ["#ux", "#typography", "#craftsmanship"],
          accent: "secondary"
        },
        {
          kicker: "Engineering australiano",
          title: "Pragmatic by design",
          body:
            "Niente over-engineering, niente architetture teatrali. Costruiamo sistemi che scalano quando serve, restano osservabili sotto pressione e vanno in produzione senza drammi.",
          tags: ["#scalability", "#devops", "#reliability"],
          accent: "jolly"
        }
      ]
    },
    coverage: {
      headline: "Il sole non tramonta mai sul nostro codice.",
      intro:
        "Mentre il tuo team dorme, il nostro continua. I brief del mattino diventano release della sera senza perdere qualità nei passaggi di consegna.",
      totalLabel: "Totale",
      totalValue: "24h di sviluppo attivo",
      continuous: "continuo, coordinato, responsabile",
      workday: "09:00 -> 19:00",
      officeHoursLabel: "Ufficio",
      liveNowLabel: "Live",
      milan: "Palermo",
      sydney: "Perth",
      tokyo: "Tokyo",
      strip: [
        "Nessun giorno morto.",
        "Nessun handoff perso.",
        "Nessuna attesa artificiale tra un'iterazione e l'altra."
      ]
    },
    capabilities: {
      headline: "kawaii(enterprise, scale)",
      intro:
        "Lavoriamo dove la qualità deve reggere la scala, lo scrutinio degli stakeholder e la complessità operativa reale.",
      items: [
        {
          title: "Architetture Cloud",
          keywords: ["AWS", "GCP", "multi-region"],
          description:
            "Infrastrutture progettate per resilienza, chiarezza dei costi e governance enterprise."
        },
        {
          title: "Backend Systems",
          keywords: ["API", "real-time", "pipeline"],
          description:
            "Servizi affidabili per prodotti mission-critical e intensivi sul dato."
        },
        {
          title: "Frontend Enterprise",
          keywords: ["Next.js", "design systems", "performance"],
          description:
            "Interfacce raffinate sotto analisi e veloci sotto carico."
        },
        {
          title: "Mobile",
          keywords: ["React Native", "native", "offline-first"],
          description:
            "Prodotti mobile pensati per continuità operativa, non solo presenza sugli store."
        },
        {
          title: "AI Integration",
          keywords: ["LLM", "RAG", "automation"],
          description:
            "Sistemi AI utili, integrati nei workflow con valore operativo misurabile."
        },
        {
          title: "DevOps & Security",
          keywords: ["CI/CD", "observability", "hardening"],
          description:
            "Pipeline di delivery e infrastrutture pronte per ambienti seri."
        }
      ]
    },
    process: {
      headline: "Il processo è il prodotto.",
      intro:
        "Trattiamo la delivery come un sistema. Chiarezza in ingresso, qualità in uscita.",
      steps: [
        {
          code: "f(x)",
          title: "Brief",
          body:
            "Ascoltiamo prima di proporre. Un problema definito a metà diventa quasi sempre un progetto riuscito a metà."
        },
        {
          code: "f(x,y)",
          title: "Architettura",
          body:
            "Disegniamo la soluzione prima di toccare il codice. Ogni scelta ha una ragione e un compromesso."
        },
        {
          code: "kawaii(x,y)",
          title: "Build",
          body:
            "Palermo, Perth e Tokyo restano sincronizzate: nessuna feature sparisce nel silenzio."
        },
        {
          code: "assert(quality)",
          title: "Review",
          body:
            "Review incrociate, disciplina di test e budget di performance prima di qualsiasi rilascio."
        },
        {
          code: "loop()",
          title: "Deploy & Iterate",
          body:
            "Il lancio non è il traguardo. È la prima iterazione misurata di un miglioramento continuo."
        }
      ]
    },
    numbers: {
      headline: "Le equazioni non mentono.",
      items: [
        { value: "24h", label: "copertura giornaliera" },
        { value: "3", label: "città, una cadenza" },
        { value: "0", label: "deadline mancati finora" },
        { value: "∞", label: "iterazioni possibili" }
      ]
    },
    contact: {
      headline: "Hai un problema complesso. Noi abbiamo la funzione.",
      subheadline:
        "Raccontaci il progetto. Risponderemo entro 24 ore, da qualunque fuso orario arrivi il messaggio.",
      officeTitle: "Orario uffici in tempo reale",
      officeHours: "Orario ufficio: 09:00 - 19:00",
      response: "Di solito rispondiamo entro un ciclo globale di lavoro.",
      milanLabel: "Palermo, Italia",
      sydneyLabel: "Perth, Australia",
      tokyoLabel: "Tokyo, Giappone",
      fields: {
        name: "Nome",
        email: "Email",
        company: "Azienda",
        project: "Descrizione progetto",
        budget: "Budget indicativo"
      },
      placeholders: {
        name: "Ada Lovelace",
        email: "ada@azienda.com",
        company: "Nome azienda",
        project: "Contesto, vincoli, ambizione, tempistiche."
      },
      budgets: ["<50k", "50k-200k", "200k+", "Da definire"],
      submit: "kawaii(invia)",
      success: "Messaggio preparato. La risposta umana dovrebbe arrivare poco dopo.",
      inboxNote: "Inbox principale di contatto",
      locationNote: "Delivery boutique su tre orizzonti orari coordinati.",
      validation: {
        name: "Inserisci il tuo nome.",
        email: "Inserisci un indirizzo email valido.",
        project: "Condividi almeno una sintesi del progetto."
      }
    },
    footer: {
      tagline: "Cute software that works.",
      privacy: "Privacy",
      cookie: "Cookie",
      linkedin: "LinkedIn",
      github: "GitHub",
      copyright: "kawaii(x,y) © 2025 - Palermo, Italy / Perth, Australia / Tokyo, Japan",
      closing: "// built with kaizen, shipped with amore"
    }
  },
  ja: {
    meta: {
      title: "kawaii(x,y) | Cute software that works.",
      description:
        "日本のクラフトマンシップ、イタリアの美意識、オーストラリアの実践的エンジニアリングを融合したブティック型ソフトウェアスタジオ。"
    },
    languages: {
      en: "English",
      it: "Italiano",
      ja: "日本語"
    },
    nav: {
      philosophy: "哲学",
      capabilities: "提供領域",
      process: "進め方",
      contact: "相談窓口",
      talk: "相談する",
      themeDark: "ダークモード",
      themeLight: "ライトモード",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる"
    },
    hero: {
      title: ["美しく。", "確かに動く。"],
      eyebrow: "kawaii(x,y) - where elegance is a constraint, not an afterthought.",
      subtitle:
        "2つのチーム、3つの都市、1つの関数。エンタープライズ品質のソフトウェアを、美しさにも品質にも妥協せず届けます。",
      primaryCta: "プロセスを見る",
      secondaryCta: "相談する",
      verticalNote: "kawaii(x,y) © Palermo - Perth - Tokyo",
      panelTitle: "美しく、確かに動くソフトウェア。",
      panelBody:
        "設計、信頼性、そして美意識まで求めるエンタープライズチームのための、少数精鋭の開発体制です。",
      panelCoverage: "24時間の開発体制"
    },
    philosophy: {
      headline: "すべての課題は、ひとつの方程式。",
      intro:
        "kawaii(x,y) は、日本の職人精神、イタリアの美意識、オーストラリアの実践的な工学を、ひとつの開発体制に統合します。",
      cards: [
        {
          kicker: "日本の精神",
          title: "Shokunin",
          body:
            "日本の職人は、ただ動けばよいとは考えません。あるべき完成度を目指します。私たちも同じです。コードの一行一行にも、設計の一判断にも、必ず意図があります。",
          tags: ["#kaizen", "#ikigai", "#shokunin"],
          accent: "primary"
        },
        {
          kicker: "イタリアの美意識",
          title: "形は本質である",
          body:
            "美しさは装飾ではなく戦略です。整ったUIは認知負荷を下げ、導入を速め、最初のクリックより前に信頼を伝えます。",
          tags: ["#ux", "#typography", "#craftsmanship"],
          accent: "secondary"
        },
        {
          kicker: "オーストラリアの工学",
          title: "Pragmatic by design",
          body:
            "過剰設計はしません。必要なときに伸びる構成、負荷の中でも見通せる運用性、静かで確実なリリース。そのための設計です。",
          tags: ["#scalability", "#devops", "#reliability"],
          accent: "jolly"
        }
      ]
    },
    coverage: {
      headline: "私たちのコードに、夜はない。",
      intro:
        "あなたのチームが休んでいる間も、こちらでは開発が進みます。朝のブリーフが、その日の夕方には成果へ変わります。",
      totalLabel: "合計",
      totalValue: "24時間のアクティブ開発",
      continuous: "止まらず、連携し、説明責任を持つ",
      workday: "09:00 -> 19:00",
      officeHoursLabel: "営業時間",
      liveNowLabel: "現在",
      milan: "パレルモ",
      sydney: "パース",
      tokyo: "東京",
      strip: [
        "開発が止まる日がない。",
        "引き継ぎで品質を落とさない。",
        "次のイテレーションを待たせない。"
      ]
    },
    capabilities: {
      headline: "kawaii(enterprise, scale)",
      intro:
        "私たちは、品質がスケールや利害関係者の厳しい目、実運用の複雑さに耐えるべき領域で仕事をします。",
      items: [
        {
          title: "Cloud Architectures",
          keywords: ["AWS", "GCP", "multi-region"],
          description:
            "レジリエンス、コスト透明性、エンタープライズ統制を前提にしたインフラ設計。"
        },
        {
          title: "Backend Systems",
          keywords: ["APIs", "real-time", "pipelines"],
          description:
            "データ負荷が高く、止められないプロダクトのための信頼できる基盤。"
        },
        {
          title: "Frontend Enterprise",
          keywords: ["Next.js", "design systems", "performance"],
          description:
            "厳しい評価にも耐える洗練さと、高負荷でも崩れない速さ。"
        },
        {
          title: "Mobile",
          keywords: ["React Native", "native", "offline-first"],
          description:
            "ストア掲載のためではなく、運用継続性のためのモバイル開発。"
        },
        {
          title: "AI Integration",
          keywords: ["LLMs", "RAG", "automation"],
          description:
            "実務フローに組み込み、価値を測定できるAIシステム。"
        },
        {
          title: "DevOps & Security",
          keywords: ["CI/CD", "observability", "hardening"],
          description:
            "本番の厳しさに耐えるデリバリーパイプラインと運用基盤。"
        }
      ]
    },
    process: {
      headline: "プロセスそのものが、製品の一部。",
      intro:
        "私たちはデリバリーそのものを、ひとつのシステムとして扱います。入力が明快であれば、出力の品質もぶれません。",
      steps: [
        {
          code: "f(x)",
          title: "Brief",
          body:
            "提案の前に、まず深く聞きます。課題定義が曖昧なら、結果もまた曖昧になりやすいからです。"
        },
        {
          code: "f(x,y)",
          title: "Architecture",
          body:
            "コードに触れる前に設計します。すべての判断には理由があり、必ずトレードオフがあります。"
        },
        {
          code: "kawaii(x,y)",
          title: "Build",
          body:
            "パレルモ、パース、東京が同期し、どの機能も曖昧な受け渡しの中に消えることはありません。"
        },
        {
          code: "assert(quality)",
          title: "Review",
          body:
            "相互レビュー、テストの規律、性能予算。準備が整うまでは出荷しません。"
        },
        {
          code: "loop()",
          title: "Deploy & Iterate",
          body:
            "ローンチは終点ではありません。継続的改善が始まる最初の計測点です。"
        }
      ]
    },
    numbers: {
      headline: "方程式は、嘘をつかない。",
      items: [
        { value: "24h", label: "1日の開発カバレッジ" },
        { value: "3", label: "3都市、1つのリズム" },
        { value: "0", label: "これまでの納期遅延" },
        { value: "∞", label: "改善の余地" }
      ]
    },
    contact: {
      headline: "複雑な課題には、それに耐える関数を。",
      subheadline:
        "プロジェクトについて聞かせてください。どのタイムゾーンからでも、24時間以内にお返事します。",
      officeTitle: "現在の各拠点時刻",
      officeHours: "営業時間: 09:00 - 19:00",
      response: "通常は、ひとつのグローバル稼働サイクル内に返信します。",
      milanLabel: "パレルモ、イタリア",
      sydneyLabel: "パース、オーストラリア",
      tokyoLabel: "東京、日本",
      fields: {
        name: "お名前",
        email: "メールアドレス",
        company: "会社名",
        project: "プロジェクト概要",
        budget: "想定予算"
      },
      placeholders: {
        name: "Ada Lovelace",
        email: "ada@company.com",
        company: "会社名",
        project: "背景、制約、目標、希望時期など。"
      },
      budgets: ["<50k", "50k-200k", "200k+", "要相談"],
      submit: "kawaii(send)",
      success: "メッセージを受け付けました。次は人間からお返事します。",
      inboxNote: "主要連絡用メールボックス",
      locationNote: "3つのタイムゾーンをつないだ、少数精鋭の開発体制です。",
      validation: {
        name: "お名前を入力してください。",
        email: "有効なメールアドレスを入力してください。",
        project: "短くてもよいので概要を入力してください。"
      }
    },
    footer: {
      tagline: "Cute software that works.",
      privacy: "Privacy",
      cookie: "Cookies",
      linkedin: "LinkedIn",
      github: "GitHub",
      copyright: "kawaii(x,y) © 2025 - Palermo, Italy / Perth, Australia / Tokyo, Japan",
      closing: "// built with kaizen, shipped with amore"
    }
  }
};
