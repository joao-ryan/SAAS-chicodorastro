import { User, Trilha, Quiz } from '../types';

export const initialUser: User = {
  id: 'u1',
  name: 'Tiago Souza',
  username: 'tiagosouza',
  bio: 'Estudante curioso e apaixonado por tecnologia e direitos. Sempre em busca de aprender coisas novas.',
  avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop',
  level: 14,
  xp: 2400,
  nextLevelXp: 3000,
  title: 'Guardião Digital',
  achievements: [
    {
      id: 'a1',
      title: 'Primeiro Passo',
      description: 'Você iniciou sua jornada no Chico do Rastro.',
      unlockedAt: new Date().toISOString(),
    },
    {
      id: 'a2',
      title: 'Voz da Cidadania',
      description: 'Você conheceu seus primeiros direitos.',
      unlockedAt: new Date().toISOString(),
    }
  ],
};

export const initialTrilhas: Trilha[] = [
  {
    id: 't1',
    title: 'Segurança na Internet',
    description: 'Aprenda a identificar golpes, proteger seus dados e navegar com segurança na internet.',
    status: 'in_progress',
    modules: [
      { id: 'm1', title: 'Privacidade nas Redes', completed: true, xpReward: 100 },
      { id: 'm2', title: 'Identificando Fake News', completed: true, xpReward: 150 },
      { id: 'm3', title: 'Como Evitar Golpes Digitais', completed: false, xpReward: 120 },
      { id: 'm4', title: 'O que é Engenharia Social?', completed: false, xpReward: 200 },
      { id: 'm5', title: 'Senhas Seguras e Autenticação', completed: false, xpReward: 150 },
    ]
  },
  {
    id: 't2',
    title: 'Direitos na Escola',
    description: 'Descubra o que a lei garante a você dentro da escola, da inclusão ao respeito.',
    status: 'in_progress',
    modules: [
      { id: 'm1', title: 'Liberdade de Aprendizagem', completed: false, xpReward: 100 },
      { id: 'm2', title: 'Acesso à Educação', completed: false, xpReward: 150 },
      { id: 'm3', title: 'Combate à Discriminação', completed: false, xpReward: 150 },
    ]
  },
  {
    id: 't3',
    title: 'Convivência Saudável',
    description: 'Diálogo, empatia e inteligência emocional para uma vida familiar e social mais feliz.',
    status: 'locked',
    modules: [
      { id: 'm1', title: 'Escuta Ativa', completed: false, xpReward: 100 },
      { id: 'm2', title: 'Resolução de Conflitos', completed: false, xpReward: 100 },
    ]
  },
  {
    id: 't4',
    title: 'Saúde Emocional',
    description: 'Cuide da sua saúde mental, autoestima e aprenda a lidar com a ansiedade.',
    status: 'locked',
    modules: [
      { id: 'm1', title: 'Entendendo a Ansiedade', completed: false, xpReward: 150 },
      { id: 'm2', title: 'Inteligência Emocional', completed: false, xpReward: 150 },
    ]
  }
];

export const initialQuizzes: Quiz[] = [
  {
    id: 'q1',
    title: 'Fake News ou Verdade?',
    description: 'Teste seus conhecimentos sobre as notícias falsas da internet.',
    xpReward: 100,
    completed: false,
    questions: [
      {
        id: 'qq1',
        question: 'Você recebe uma mensagem no WhatsApp dizendo que um famoso doou 1 milhão para quem repassar a mensagem. O que você faz?',
        options: [
          'Repasso imediatamente para todos os meus contatos.',
          'Clico no link para ver se é verdade.',
          'Ignoro e desconfio, pois promoções assim geralmente são golpes.',
          'Pergunto no grupo da família se alguém já ganhou.'
        ],
        correctOptionIndex: 2,
        explanation: 'Golpes de phishing frequentemente usam promessas falsas de dinheiro para fazer você clicar em links maliciosos ou capturar seus dados.'
      },
      {
        id: 'qq2',
        question: 'Qual a melhor forma de verificar uma notícia suspeita?',
        options: [
          'Ver quantos likes ela tem nas redes sociais.',
          'Pesquisar o título no Google e em sites de checagem confiáveis.',
          'Perguntar para um amigo que sempre compartilha notícias.',
          'Acreditar, se veio de alguém que você conhece.'
        ],
        correctOptionIndex: 1,
        explanation: 'Sempre verifique a fonte da informação em sites oficiais ou agências de checagem de fatos antes de acreditar ou compartilhar.'
      }
    ]
  },
  {
    id: 'q2',
    title: 'Isso é Bullying?',
    description: 'Você sabe diferenciar uma brincadeira saudável de uma agressão?',
    xpReward: 150,
    completed: false,
    questions: [
      {
        id: 'qq3',
        question: 'Um colega da escola sempre coloca apelidos ofensivos em você, mesmo sabendo que você não gosta. O que é isso?',
        options: [
          'Uma brincadeira de mau gosto, mas normal.',
          'Bullying, pois é repetitivo e causa sofrimento intencional.',
          'Apenas uma forma dele chamar minha atenção.',
          'Falta de senso de humor da minha parte.'
        ],
        correctOptionIndex: 1,
        explanation: 'O bullying se caracteriza por agressões repetitivas (físicas ou verbais) que causam sofrimento à vítima. Apelidos ofensivos não são brincadeira.'
      },
      {
        id: 'qq4',
        question: 'Como você deve agir ao presenciar uma pessoa sofrendo Cyberbullying?',
        options: [
          'Rir junto para não sobrar para mim.',
          'Ignorar, afinal o problema não é meu.',
          'Tirar prints da agressão, acolher a vítima e incentivar a denúncia.',
          'Responder xingando o agressor.'
        ],
        correctOptionIndex: 2,
        explanation: 'Você nunca deve responder com mais agressão. Preserve as provas (prints) e ofereça apoio à vítima, ajudando-a a reportar o caso a um adulto ou órgão responsável.'
      }
    ]
  }
];
