import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, Code, Target, TrendingUp, CheckCircle, Circle } from 'lucide-react';

const BrownianMastery = () => {
  console.log('BrownianMastery component is rendering');
  const [expandedMonth, setExpandedMonth] = useState('jan');
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('brownianMasteryTasks');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('brownianMasteryTasks', JSON.stringify(completedTasks));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [completedTasks]);

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const roadmap = [
  {
    month: 'jan',
    title: 'Janeiro 2026',
    subtitle: 'Fundamentos conceituais do Browniano',
    weeklyHours: '12-15h',
    mainGoal: 'Movimento browniano: definição, propriedades, incrementos independentes, ⟨x²⟩ ∝ t',
    topics: [
      {
        week: 'Semanas 1-2',
        theory: {
          title: 'Física / Conceitos (5h/semana)',
          tasks: [
            {
              id: 'jan-t1',
              item: 'Movimento browniano: definição e propriedades básicas',
              resource: 'Schilling & Partzsch - Brownian Motion: Cap. 1 (pgs 1-30)'
            },
            {
              id: 'jan-t2',
              item: 'Incrementos independentes e propriedade de Markov',
              resource: 'Schilling & Partzsch - Cap. 2 (pgs 31-60)'
            },
            {
              id: 'jan-t3',
              item: 'Crescimento ⟨x²⟩ ∝ t - derivação e intuição',
              resource: 'Schilling & Partzsch - Cap. 3 (pgs 61-90) - construção rigorosa'
            }
          ]
        },
        math: {
          title: 'Probabilidade - Fundação Lógica (4h/semana)',
          tasks: [
            {
              id: 'jan-m1',
              item: 'Probabilidade como inferência e incerteza física',
              resource: 'Jaynes - Probability Theory: Caps 1-2 (pgs 1-50)'
            },
            {
              id: 'jan-m2',
              item: 'Variáveis aleatórias e espaços de probabilidade',
              resource: 'Ross - A First Course in Probability: Cap. 2 (pgs 45-90)'
            },
            {
              id: 'jan-m3',
              item: 'Distribuições contínuas básicas',
              resource: 'Ross - Cap. 3 seções 3.1-3.5 (pgs 95-130)'
            }
          ]
        },
        coding: {
          title: 'Programação (6h/semana)',
          tasks: [
            {
              id: 'jan-c1',
              item: 'Implementar random walk 1D',
              resource: 'Simular N passos, plotar trajetórias individuais'
            },
            {
              id: 'jan-c2',
              item: 'Medidas estatísticas: calcular ⟨x⟩ e ⟨x²⟩',
              resource: 'Verificar ⟨x²⟩ ∝ t empiricamente com múltiplas realizações'
            },
            {
              id: 'jan-c3',
              item: 'Visualização de trajetórias e histogramas',
              resource: 'Comparar distribuição de posições com gaussiana'
            }
          ]
        },
        checkpoint: 'Explicar o que é Browniano (física + matemática) • Conectar random walk discreto ao limite contínuo'
      },
      {
        week: 'Semanas 3-4',
        theory: {
          title: 'Aprofundamento Conceitual (5h/semana)',
          tasks: [
            {
              id: 'jan-t4',
              item: 'Limite de escala: random walk → Browniano contínuo',
              resource: 'Schilling & Partzsch - seções sobre convergência'
            },
            {
              id: 'jan-t5',
              item: 'Propriedades de caminhos: continuidade, não-diferenciabilidade',
              resource: 'Schilling & Partzsch - propriedades quase-certas'
            }
          ]
        },
        math: {
          title: 'Probabilidade Aplicada (4h/semana)',
          tasks: [
            {
              id: 'jan-m4',
              item: 'Valor esperado, variância, momentos',
              resource: 'Ross - Cap. 4 (pgs 145-180)'
            },
            {
              id: 'jan-m5',
              item: 'Lei dos grandes números (conceitual)',
              resource: 'Jaynes - seções sobre inferência estatística'
            }
          ]
        },
        coding: {
          title: 'Programação (6h/semana)',
          tasks: [
            {
              id: 'jan-c4',
              item: 'Random walk 2D e 3D',
              resource: 'Extensão natural, verificar isotropia'
            },
            {
              id: 'jan-c5',
              item: 'Convergência: comparar diferentes Δt',
              resource: 'Observar convergência ao limite contínuo'
            },
            {
              id: 'jan-c6',
              item: 'Documentação: notebook Jupyter completo',
              resource: 'Teoria + código + resultados + análise'
            }
          ]
        },
        checkpoint: 'Dominar a passagem discreto → contínuo - Simular e analisar trajetórias brownianas'
      }
    ],
    milestone: 'Explicar o que é Browniano - Conectar random walk ao limite contínuo'
  },
  
  {
    month: 'fev',
    title: 'Fevereiro 2026',
    subtitle: 'Langevin e emergência da gaussiana',
    weeklyHours: '12-15h',
    mainGoal: 'Dinâmica estocástica: Langevin, ruído branco, emergência da distribuição gaussiana',
    topics: [
      {
        week: 'Semanas 1-2',
        theory: {
          title: 'Dinâmica Estocástica (6h/semana)',
          tasks: [
            {
              id: 'fev-t1',
              item: 'Equação de Langevin: derivação e interpretação física',
              resource: 'Gardiner - Stochastic Methods: Caps 1-2 (pgs 1-70)'
            },
            {
              id: 'fev-t2',
              item: 'Ruído branco e correlações temporais',
              resource: 'Gardiner - Cap. 3 seções 3.1-3.3 (pgs 71-100)'
            },
            {
              id: 'fev-t3',
              item: 'Teorema de flutuação-dissipação (introdutório)',
              resource: 'Gardiner - seção sobre FDT'
            }
          ]
        },
        math: {
          title: 'Probabilidade Contínua (4h/semana)',
          tasks: [
            {
              id: 'fev-m1',
              item: 'Variáveis aleatórias contínuas',
              resource: 'Ross - Cap. 4 (esperança, variância)'
            },
            {
              id: 'fev-m2',
              item: 'Distribuição normal/gaussiana',
              resource: 'Ross - Cap. 5 seção 5.4 (pgs 210-235)'
            },
            {
              id: 'fev-m3',
              item: 'Princípio de máxima entropia',
              resource: 'Jaynes - Cap. 11 (pgs 340-380) - por que gaussiana?'
            }
          ]
        },
        coding: {
          title: 'Programação (5h/semana)',
          tasks: [
            {
              id: 'fev-c1',
              item: 'Implementar Langevin (Euler-Maruyama)',
              resource: 'dv/dt = -γv + √(2γkT) ξ(t)'
            },
            {
              id: 'fev-c2',
              item: 'Verificação: ⟨v²⟩ = kT/m (equipartição)',
              resource: 'Simular partícula livre, medir temperatura efetiva'
            },
            {
              id: 'fev-c3',
              item: 'Histogramas: distribuição de velocidades',
              resource: 'Comparar com distribuição de Maxwell-Boltzmann'
            }
          ]
        },
        checkpoint: 'Justificar física e probabilisticamente o ruído gaussiano'
      },
      {
        week: 'Semanas 3-4',
        theory: {
          title: 'Aprofundamento (6h/semana)',
          tasks: [
            {
              id: 'fev-t4',
              item: 'Solução analítica de Langevin',
              resource: 'Gardiner - derivação completa para partícula livre'
            },
            {
              id: 'fev-t5',
              item: 'Regimes: overdamped vs underdamped',
              resource: 'Gardiner - análise de diferentes escalas de tempo'
            }
          ]
        },
        math: {
          title: 'Ferramentas Matemáticas (3h/semana)',
          tasks: [
            {
              id: 'fev-m4',
              item: 'EDO lineares de primeira ordem (revisão)',
              resource: 'Resolver equações com termo forçante aleatório'
            }
          ]
        },
        coding: {
          title: 'Programação (6h/semana)',
          tasks: [
            {
              id: 'fev-c4',
              item: 'Langevin em potencial harmônico',
              resource: 'Adicionar força F = -kx, verificar distribuição estacionária'
            },
            {
              id: 'fev-c5',
              item: 'Comparação analítico vs numérico',
              resource: 'Validar código contra soluções conhecidas'
            },
            {
              id: 'fev-c6',
              item: 'Estudo paramétrico: variar γ e T',
              resource: 'Mapear comportamento em diferentes regimes'
            }
          ]
        },
        checkpoint: 'Resolver e simular Langevin - Validar equipartição numericamente'
      }
    ],
    milestone: 'Justificar ruído gaussiano - Resolver e simular Langevin'
  },
  
  {
    month: 'mar',
    title: 'Março 2026',
    subtitle: 'Fokker-Planck e métodos de solução',
    weeklyHours: '15-18h',
    mainGoal: 'Equação de Fokker-Planck: derivação, solução, conexão com Langevin',
    topics: [
      {
        week: 'Semanas 1-2',
        theory: {
          title: 'Dinâmica Estocástica (7h/semana)',
          tasks: [
            {
              id: 'mar-t1',
              item: 'Equação de Fokker-Planck: derivação',
              resource: 'Gardiner - Caps 4-5 (pgs 120-180)'
            },
            {
              id: 'mar-t2',
              item: 'Conexão Langevin ↔ Fokker-Planck',
              resource: 'Gardiner - demonstração da equivalência'
            },
            {
              id: 'mar-t3',
              item: 'Métodos de solução analíticos',
              resource: 'Risken - The Fokker-Planck Equation: Caps 4-6 (pgs 85-180)'
            }
          ]
        },
        math: {
          title: 'Matemática Aplicada (5h/semana)',
          tasks: [
            {
              id: 'mar-m1',
              item: 'Equação do calor (EDP parabólica)',
              resource: 'Solução por separação de variáveis'
            },
            {
              id: 'mar-m2',
              item: 'Solução gaussiana da difusão',
              resource: 'P(x,t) = (4πDt)^(-1/2) exp(-x²/4Dt)'
            },
            {
              id: 'mar-m3',
              item: 'Transformada de Fourier aplicada',
              resource: 'Resolver EDP no espaço de Fourier'
            }
          ]
        },
        coding: {
          title: 'Programação (6h/semana)',
          tasks: [
            {
              id: 'mar-c1',
              item: 'Solver numérico da Fokker-Planck',
              resource: 'Diferenças finitas (Crank-Nicolson ou explícito)'
            },
            {
              id: 'mar-c2',
              item: 'Comparação: Langevin vs FPE',
              resource: 'Histogramas de Langevin devem coincidir com P(x,t) da FPE'
            },
            {
              id: 'mar-c3',
              item: 'Validação: difusão livre',
              resource: 'Comparar solução numérica com gaussiana analítica'
            }
          ]
        },
        checkpoint: 'Derivar FPE a partir de Langevin • Implementar solver numérico'
      },
      {
        week: 'Semanas 3-4',
        theory: {
          title: 'Aplicações (7h/semana)',
          tasks: [
            {
              id: 'mar-t4',
              item: 'Fokker-Planck em potenciais',
              resource: 'Risken - métodos para diferentes V(x)'
            },
            {
              id: 'mar-t5',
              item: 'Distribuição estacionária: P_st ∝ exp(-V/kT)',
              resource: 'Risken - conexão com mecânica estatística'
            },
            {
              id: 'mar-t6',
              item: 'Tempo de relaxação e modos normais',
              resource: 'Risken - análise espectral'
            }
          ]
        },
        math: {
          title: 'Ferramentas Avançadas (4h/semana)',
          tasks: [
            {
              id: 'mar-m4',
              item: 'Autofunções e autovalores',
              resource: 'Decomposição espectral da FPE'
            },
            {
              id: 'mar-m5',
              item: 'Funções de Green',
              resource: 'Propagador da equação de difusão'
            }
          ]
        },
        coding: {
          title: 'Programação (7h/semana)',
          tasks: [
            {
              id: 'mar-c4',
              item: 'FPE em potencial harmônico',
              resource: 'Verificar P_st = exp(-kx²/2kT)'
            },
            {
              id: 'mar-c5',
              item: 'FPE em potencial duplo poço',
              resource: 'Observar distribuição bimodal'
            },
            {
              id: 'mar-c6',
              item: 'Biblioteca de código: módulos reutilizáveis',
              resource: 'Organizar solvers, potenciais, análises'
            }
          ]
        },
        checkpoint: 'Explicar por que P é gaussiana - Resolver FPE em pelo menos um sistema'
      }
    ],
    milestone: 'Explicar gaussiana - Resolver FPE com potenciais'
  },
  
  {
    month: 'abr',
    title: 'Abril 2026',
    subtitle: 'Formalismo e equação mestra',
    weeklyHours: '15-18h',
    mainGoal: 'Processos estocásticos formais: equação mestra, passagem micro → macro',
    topics: [
      {
        week: 'Semanas 1-2',
        theory: {
          title: 'Formalismo (8h/semana)',
          tasks: [
            {
              id: 'abr-t1',
              item: 'Processos de Markov: definições rigorosas',
              resource: 'van Kampen - Stochastic Processes: Caps 1-2 (leitura seletiva)'
            },
            {
              id: 'abr-t2',
              item: 'Equação mestra',
              resource: 'van Kampen - Caps 3-4 (derivação e exemplos)'
            },
            {
              id: 'abr-t3',
              item: 'Expansão de Kramers-Moyal',
              resource: 'van Kampen - Cap. 5 (quando truncar?)'
            }
          ]
        },
        math: {
          title: 'Probabilidade Aplicada (4h/semana)',
          tasks: [
            {
              id: 'abr-m1',
              item: 'Processos de Markov em tempo contínuo',
              resource: 'Ross - Cap. 6 (processos de Poisson e generalizações)'
            },
            {
              id: 'abr-m2',
              item: 'Matrizes de transição e autovalores',
              resource: 'Análise espectral de processos discretos'
            }
          ]
        },
        coding: {
          title: 'Programação (5h/semana)',
          tasks: [
            {
              id: 'abr-c1',
              item: 'Processos de salto (jump processes)',
              resource: 'Implementar evolução via equação mestra discreta'
            },
            {
              id: 'abr-c2',
              item: 'Algoritmo de Gillespie',
              resource: 'Simulação estocástica exata para sistemas químicos'
            }
          ]
        },
        checkpoint: 'Entender equação mestra - Implementar processos de salto'
      },
      {
        week: 'Semanas 3-4',
        theory: {
          title: 'Limite Contínuo (8h/semana)',
          tasks: [
            {
              id: 'abr-t4',
              item: 'Passagem equação mestra → Fokker-Planck',
              resource: 'van Kampen - Caps 6-8 (expansão sistemática)'
            },
            {
              id: 'abr-t5',
              item: 'Condições de validade da aproximação',
              resource: 'van Kampen - quando a FPE é válida?'
            },
            {
              id: 'abr-t6',
              item: 'Ω-expansion: macro + flutuações',
              resource: 'van Kampen - separação de escalas'
            }
          ]
        },
        math: {
          title: 'Ferramentas (3h/semana)',
          tasks: [
            {
              id: 'abr-m3',
              item: 'Funções geradoras',
              resource: 'van Kampen - Apêndice (técnica poderosa)'
            }
          ]
        },
        coding: {
          title: 'Programação (6h/semana)',
          tasks: [
            {
              id: 'abr-c3',
              item: 'Comparação: mestra discreta vs FPE contínua',
              resource: 'Observar convergência no limite de escala'
            },
            {
              id: 'abr-c4',
              item: 'Validação: sistema simples (A ⇌ B)',
              resource: 'Verificar que FPE é boa aproximação'
            }
          ]
        },
        checkpoint: 'Defender passagem micro → macro - Explicar origem da FPE'
      }
    ],
    milestone: 'Defender micro → macro - Explicar origem da FPE via equação mestra'
  },
  
  {
    month: 'mai',
    title: 'Maio 2026',
    subtitle: 'Consolidação e projeto de IC',
    weeklyHours: '15-18h',
    mainGoal: 'Flutuação-dissipação • Projeto aplicado • Preparação para IC',
    topics: [
      {
        week: 'Semanas 1-2',
        theory: {
          title: 'Física Estatística (7h/semana)',
          tasks: [
            {
              id: 'mai-t1',
              item: 'Teorema de flutuação-dissipação (FDT)',
              resource: 'Gardiner - capítulos correspondentes'
            },
            {
              id: 'mai-t2',
              item: 'Relação de Einstein: D = kT/γ',
              resource: 'Gardiner - derivação e aplicações'
            },
            {
              id: 'mai-t3',
              item: 'Máxima entropia em mecânica estatística',
              resource: 'Jaynes - aplicações ao equilíbrio térmico'
            }
          ]
        },
        project: {
          title: 'Escolha de Sistema (6h/semana)',
          tasks: [
            {
              id: 'mai-p1',
              item: 'Definir sistema para projeto: harmônico / duplo poço / Kramers',
              resource: 'Discutir com orientador viabilidade e interesse'
            },
            {
              id: 'mai-p2',
              item: 'Revisão bibliográfica do sistema escolhido',
              resource: 'Ler 5-10 artigos relevantes'
            }
          ]
        },
        coding: {
          title: 'Implementação (5h/semana)',
          tasks: [
            {
              id: 'mai-c1',
              item: 'Implementar sistema escolhido',
              resource: 'Langevin + FPE para o mesmo problema'
            },
            {
              id: 'mai-c2',
              item: 'Análise preliminar de resultados',
              resource: 'Explorar parâmetros, identificar regimes'
            }
          ]
        },
        checkpoint: 'Sistema implementado • Primeiros resultados obtidos'
      },
      {
        week: 'Semanas 3-4',
        theory: {
          title: 'Consolidação (5h/semana)',
          tasks: [
            {
              id: 'mai-t4',
              item: 'Revisar conceitos fundamentais',
              resource: 'Preencher lacunas identificadas'
            },
            {
              id: 'mai-t5',
              item: 'Conectar diferentes abordagens',
              resource: 'Random walk → Langevin → FPE → Mestra'
            }
          ]
        },
        project: {
          title: 'Análise e Escrita (8h/semana)',
          tasks: [
            {
              id: 'mai-p3',
              item: 'Análise completa do sistema',
              resource: 'Resultados numéricos + comparação com teoria'
            },
            {
              id: 'mai-p4',
              item: 'Escrever relatório (5-8 páginas)',
              resource: 'Introdução + Métodos + Resultados + Discussão'
            },
            {
              id: 'mai-p5',
              item: 'Preparar figuras publication-ready',
              resource: '6-10 figuras bem legendadas'
            }
          ]
        },
        coding: {
          title: 'Finalização (5h/semana)',
          tasks: [
            {
              id: 'mai-c3',
              item: 'Código limpo e documentado',
              resource: 'Docstrings, README, exemplos'
            },
            {
              id: 'mai-c4',
              item: 'Repositório GitHub organizado',
              resource: 'Estrutura profissional, versionamento'
            }
          ]
        },
        checkpoint: 'Relatório completo - Código validado e documentado'
      }
    ],
    milestone: ' Material pronto para IC formal - Sistema analisado completamente'
  },
  
  {
    month: 'jun',
    title: 'Junho 2026',
    subtitle: 'Transição para IC',
    weeklyHours: '15-18h',
    mainGoal: 'Definir tema de IC • Escrever proposta formal • Base consolidada',
    topics: [
      {
        week: 'Semanas 1-2',
        theory: {
          title: 'Exploração de Literatura (8h/semana)',
          tasks: [
            {
              id: 'jun-t1',
              item: 'Ler 10-15 artigos recentes (2020-2025)',
              resource: 'ArXiv: cond-mat.stat-mech, Physical Review E'
            },
            {
              id: 'jun-t2',
              item: 'Identificar problemas em aberto',
              resource: 'Listar 3-5 direções possíveis para IC'
            },
            {
              id: 'jun-t3',
              item: 'Discussões com orientador',
              resource: 'Apresentar opções e decidir foco'
            }
          ]
        },
        exploration: {
          title: 'Experimentação (7h/semana)',
          tasks: [
            {
              id: 'jun-e1',
              item: 'Reproduzir resultados de 2-3 artigos',
              resource: 'Validar compreensão e código'
            },
            {
              id: 'jun-e2',
              item: 'Explorar variações e extensões',
              resource: 'Buscar comportamentos novos'
            }
          ]
        },
        checkpoint: 'Tema de IC definido - Compreensão do estado da arte'
      },
      {
        week: 'Semanas 3-4',
        theory: {
          title: 'Consolidação Final (5h/semana)',
          tasks: [
            {
              id: 'jun-t4',
              item: 'Leitura focada no tema escolhido',
              resource: '10 artigos chave + reviews'
            },
            {
              id: 'jun-t5',
              item: 'Estudar metodologias específicas',
              resource: 'Técnicas que serão usadas na IC'
            }
          ]
        },
        writing: {
          title: 'Proposta de IC (10h/semana)',
          tasks: [
            {
              id: 'jun-w1',
              item: 'Escrever proposta formal (CNPq/FAPESP)',
              resource: 'Introdução + Objetivos + Metodologia + Cronograma'
            },
            {
              id: 'jun-w2',
              item: 'Bibliografia anotada (30-40 referências)',
              resource: 'Organizar por subtema'
            },
            {
              id: 'jun-w3',
              item: 'Plano de trabalho detalhado (12 meses)',
              resource: 'Metas trimestrais + deliverables'
            },
            {
              id: 'jun-w4',
              item: 'Revisão com orientador',
              resource: 'Iterar até versão final'
            }
          ]
        },
        checkpoint: 'Proposta de IC completa e aprovada'
      }
    ],
    milestone: 'Base fechada - Código validado - Proposta de IC pronta para Agosto'
  }
];

 const milestones = [
  { month: 'Jan', achievement: 'Explicar Browniano - Random walk → contínuo' },
  { month: 'Fev', achievement: 'Langevin resolvido - Ruído gaussiano justificado' },
  { month: 'Mar', achievement: 'FPE dominada - Solver numérico funcionando' },
  { month: 'Abr', achievement: 'Formalismo: micro → macro defendido' },
  { month: 'Mai', achievement: 'Projeto completo - Código + relatório' },
  { month: 'Jun', achievement: 'Proposta de IC pronta' }
];


  const currentRoadmap = roadmap.find(m => m.month === expandedMonth);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 mb-6 text-white" style={{ background: 'linear-gradient(to right, purple, blue)' }}>
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-10 h-10" />
          <div>
            <h1 className="text-4xl font-bold">Domínio de Movimento Browniano</h1>
            <p className="text-xl mt-2">Janeiro - Junho 2026 → IC em Agosto 2026</p>
          </div>
        </div>
        <p className="text-lg opacity-95">
          6 meses para construir base sólida, explorar áreas, e definir tema original de Iniciação Científica
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Progressão de Domínio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-600">
              <div className="font-bold text-blue-900 mb-1">{milestone.month}</div>
              <div className="text-sm text-gray-700">{milestone.achievement}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Navegação Mensal</h2>
        <div className="flex gap-2 flex-wrap">
          {roadmap.map((month) => (
            <button
              key={month.month}
              onClick={() => setExpandedMonth(month.month)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                expandedMonth === month.month
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {month.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {currentRoadmap && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{currentRoadmap.title}</h2>
            <p className="text-xl text-gray-600 mt-2">{currentRoadmap.subtitle}</p>
            <div className="flex gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">{currentRoadmap.weeklyHours}/semana</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                <span>{currentRoadmap.mainGoal}</span>
              </div>
            </div>
          </div>

          {currentRoadmap.topics.map((topic, idx) => (
            <div key={idx} className="mb-8 border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.week}</h3>

              {topic.theory && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 bg-blue-50 p-3 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-blue-900">{topic.theory.title}</h4>
                  </div>
                  <div className="space-y-3 ml-8">
                    {topic.theory.tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3">
                        <button onClick={() => toggleTask(task.id)} className="mt-1">
                          {completedTasks[task.id] ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className={`${completedTasks[task.id] ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                            {task.item}
                          </div>
                          {task.resource && (
                            <div className="text-sm text-gray-500 mt-1">💡 {task.resource}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {topic.math && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 bg-purple-50 p-3 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-purple-900">{topic.math.title}</h4>
                  </div>
                  <div className="space-y-3 ml-8">
                    {topic.math.tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3">
                        <button onClick={() => toggleTask(task.id)} className="mt-1">
                          {completedTasks[task.id] ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className={`${completedTasks[task.id] ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                            {task.item}
                          </div>
                          {task.resource && (
                            <div className="text-sm text-gray-500 mt-1">💡 {task.resource}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {topic.coding && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 bg-green-50 p-3 rounded-lg">
                    <Code className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-green-900">{topic.coding.title}</h4>
                  </div>
                  <div className="space-y-3 ml-8">
                    {topic.coding.tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3">
                        <button onClick={() => toggleTask(task.id)} className="mt-1">
                          {completedTasks[task.id] ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className={`${completedTasks[task.id] ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                            {task.item}
                          </div>
                          {task.resource && (
                            <div className="text-sm text-gray-500 mt-1">💡 {task.resource}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {topic.exploration && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 bg-amber-50 p-3 rounded-lg">
                    <Target className="w-5 h-5 text-amber-600" />
                    <h4 className="font-bold text-amber-900">{topic.exploration.title}</h4>
                  </div>
                  <div className="space-y-3 ml-8">
                    {topic.exploration.tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3">
                        <button onClick={() => toggleTask(task.id)} className="mt-1">
                          {completedTasks[task.id] ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className={`${completedTasks[task.id] ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                            {task.item}
                          </div>
                          {task.resource && (
                            <div className="text-sm text-gray-500 mt-1">💡 {task.resource}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {topic.writing && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 bg-indigo-50 p-3 rounded-lg">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-bold text-indigo-900">{topic.writing.title}</h4>
                  </div>
                  <div className="space-y-3 ml-8">
                    {topic.writing.tasks.map((task) => (
                      <div key={task.id} className="flex items-start gap-3">
                        <button onClick={() => toggleTask(task.id)} className="mt-1">
                          {completedTasks[task.id] ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className={`${completedTasks[task.id] ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                            {task.item}
                          </div>
                          {task.resource && (
                            <div className="text-sm text-gray-500 mt-1">💡 {task.resource}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 bg-green-50 border-l-4 border-green-600 p-3 rounded">
                <span className="font-semibold text-green-900">✓ Checkpoint: </span>
                <span className="text-green-800">{topic.checkpoint}</span>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-900">Marco do Mês</h3>
            </div>
            <p className="text-lg text-gray-800">{currentRoadmap.milestone}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Bibliografia Progressiva</h3>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-blue-800">Jan-Fev (Básico):</div>
              <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                <li>• Einstein (1905) - artigo original</li>
                <li>• Schroeder - Thermal Physics</li>
                <li>• Gardiner - caps 1-3</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-purple-800">Mar-Abr (Intermediário):</div>
              <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                <li>• Van Kampen - caps 1-8</li>
                <li>• Risken - Fokker-Planck</li>
                <li>• Pathria - caps 14-15</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-green-800">Mai-Jun (Avançado):</div>
              <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                <li>• Kubo - Statistical Physics II</li>
                <li>• Artigos de revisão modernos</li>
                <li>• Literatura específica do tema</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4"> Estratégia de Estudo</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-3">
              <span className="text-2xl"></span>
              <div>
                <div className="font-semibold">Ciclo semanal consistente</div>
                <div className="text-gray-600">Teoria (40%) + Matemática (40%) + Código (20%)</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl"></span>
              <div>
                <div className="font-semibold">Validação constante</div>
                <div className="text-gray-600">Todo código deve reproduzir resultado conhecido</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl"></span>
              <div>
                <div className="font-semibold">Checkpoints obrigatórios</div>
                <div className="text-gray-600">Não avance sem completar marcos mensais</div>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl"></span>
              <div>
                <div className="font-semibold">Junho = exploração</div>
                <div className="text-gray-600">Ler literatura recente, testar ideias, definir IC</div>
              </div>
            </div>
          </div>
        </div>
    </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bibliografia Completa do Plano</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Movimento Browniano (Principal)</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Gardiner, C. W. - "Stochastic Methods: A Handbook for the Natural and Social Sciences" (4th ed., 2009)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Fev-Mar | Caps 1-5 (Langevin, Fokker-Planck)</div>
                <div className="text-sm text-gray-500 mt-1">Texto principal para dinâmica estocástica, muito acessível para físicos</div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Van Kampen, N. G. - "Stochastic Processes in Physics and Chemistry" (3rd ed., 2007)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Abr | Caps 1-8 (Equação mestra, expansão sistemática)</div>
                <div className="text-sm text-gray-500 mt-1">Referência definitiva, rigoroso mas claro. Essencial para formalismo.</div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Risken, H. - "The Fokker-Planck Equation: Methods of Solution and Applications" (2nd ed., 1996)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Mar | Caps 4-6 (Métodos de solução)</div>
                <div className="text-sm text-gray-500 mt-1">Técnicas específicas para resolver Fokker-Planck em diversos contextos</div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Schilling, R. L. & Partzsch, L. - "Brownian Motion: An Introduction to Stochastic Processes" (2nd ed., 2014)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Jan | Caps 1-3 (Definições, propriedades básicas)</div>
                <div className="text-sm text-gray-500 mt-1">Abordagem mais matemática, mas acessível. Boa para entender construção rigorosa.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-900 mb-3">Mecânica Estatística & Termodinâmica</h3>
            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Schroeder, D. V. - "An Introduction to Thermal Physics" (1999)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Jan-Fev, Mai | Caps 1-3, 6 (Temperatura, entropia, equipartição)</div>
                <div className="text-sm text-gray-500 mt-1">Introdução muito didática, autossuficiente. Perfeito para começar.</div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Pathria, R. K. & Beale, P. D. - "Statistical Mechanics" (3rd ed., 2011)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Mar-Mai | Caps 1-3, 14-15 (Ensembles, flutuações)</div>
                <div className="text-sm text-gray-500 mt-1">Texto padrão de pós-graduação, completo e rigoroso</div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Kubo, R., Toda, M. & Hashitsume, N. - "Statistical Physics II: Nonequilibrium Statistical Mechanics" (2nd ed., 1991)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Mai | Caps 1-3 (FDT, resposta linear)</div>
                <div className="text-sm text-gray-500 mt-1">Clássico sobre flutuação-dissipação. Denso mas fundamental.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-900 mb-3">Matemática (Suporte)</h3>
             <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
               <div className="font-semibold text-gray-900">Ross, S. - "A First Course in Probability" (9th ed., 2014)</div>
               <div className="text-sm text-gray-600 mt-1">Usado em: Jan-Abr | Caps 2-7 (probabilidade, var. aleatórias, TCL, Markov)</div>
               <div className="text-sm text-gray-500 mt-1">Texto principal para técnicas e exercícios. Muito didático.</div>
             </div>

            <div className="bg-purple-50 p-4 rounded-lg">
             <div className="font-semibold text-gray-900">Jaynes, E.T. - "Probability Theory: The Logic of Science" (2003)</div>
             <div className="text-sm text-gray-600 mt-1">Usado em: Jan-Abr | Caps 1-8 (lógica, inferência, transformações, informação)</div>
             <div className="text-sm text-gray-500 mt-1">Leitura complementar para intuição física e abordagem Bayesiana. Escrito por físico.</div>
            </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Boyce, W. E. & DiPrima, R. C. - "Elementary Differential Equations and Boundary Value Problems" (11th ed., 2017)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Fev-Mar | Caps 2-3 (EDO lineares, sistemas)</div>
                <div className="text-sm text-gray-500 mt-1">Texto padrão para EDO, muito didático com muitos exercícios</div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Strauss, W. A. - "Partial Differential Equations: An Introduction" (2nd ed., 2007)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Mar | Caps 1-2 (Equação do calor, separação de variáveis)</div>
                <div className="text-sm text-gray-500 mt-1">Apenas o necessário para entender difusão. Acessível.</div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Riley, K. F., Hobson, M. P. & Bence, S. J. - "Mathematical Methods for Physics and Engineering" (3rd ed., 2006)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Mar-Mai | Caps 13 (Fourier), funções de Green</div>
                <div className="text-sm text-gray-500 mt-1">Enciclopédico. Use como referência quando precisar de técnicas específicas.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-3">Leitura Complementar</h3>
            <div className="space-y-3">
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Einstein, A. - "Investigations on the Theory of the Brownian Movement" (1905, tradução 1956)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Jan | Artigo original</div>
                <div className="text-sm text-gray-500 mt-1">Surpreendentemente acessível! Versão comentada disponível online.</div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Feynman, R. P. - "Six Easy Pieces" (1995)</div>
                <div className="text-sm text-gray-600 mt-1">Usado em: Jan | Capítulo sobre átomos em movimento</div>
                <div className="text-sm text-gray-500 mt-1">Para intuição e motivação. Disponível em português.</div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Zwanzig, R. - "Nonequilibrium Statistical Mechanics" (2001)</div>
                <div className="text-sm text-gray-600 mt-1">Opcional em: Mai-Jun | Formalismo de projeção</div>
                <div className="text-sm text-gray-500 mt-1">Avançado. Apenas se interesse em aspectos formais.</div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Balakrishnan, V. - "Elements of Nonequilibrium Statistical Mechanics" (2008)</div>
                <div className="text-sm text-gray-600 mt-1">Opcional em: Mai-Jun | Alternativa ao Van Kampen</div>
                <div className="text-sm text-gray-500 mt-1">Mais moderno que Van Kampen, talvez mais acessível para alguns tópicos.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Artigos de Revisão (Para Junho)</h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Seifert, U. - "Stochastic thermodynamics, fluctuation theorems and molecular machines" (2012)</div>
                <div className="text-sm text-gray-600 mt-1">Reports on Progress in Physics 75, 126001</div>
                <div className="text-sm text-gray-500 mt-1">Review moderno sobre termodinâmica estocástica. ~80 páginas, muito completo.</div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Bouchaud, J.-P. & Georges, A. - "Anomalous diffusion in disordered media" (1990)</div>
                <div className="text-sm text-gray-600 mt-1">Physics Reports 195, 127-293</div>
                <div className="text-sm text-gray-500 mt-1">Clássico sobre difusão anômala. Se interesse nessa área.</div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-900">Hänggi, P., Talkner, P. & Borkovec, M. - "Reaction-rate theory: fifty years after Kramers" (1990)</div>
                <div className="text-sm text-gray-600 mt-1">Reviews of Modern Physics 62, 251</div>
                <div className="text-sm text-gray-500 mt-1">Review sobre escape ativado e teoria de Kramers.</div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default BrownianMastery;