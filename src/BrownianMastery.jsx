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
      subtitle: 'Fundamentos: O que é movimento browniano?',
      weeklyHours: '12-15h',
      mainGoal: 'Compreender fenomenologia e criar intuição através de simulações',
      topics: [
        {
          week: 'Semanas 1-2 (19 Jan - 2 Fev)',
          theory: {
            title: 'Teoria (5h/semana)',
            tasks: [
              {
                id: 'jan-t1',
                item: 'Ler Einstein (1905) - tradução comentada sobre movimento browniano',
                resource: 'Einstein, A. "Investigations on the Theory of Brownian Movement" (artigo completo)'
              },
              {
                id: 'jan-t2',
                item: 'Schroeder "Thermal Physics" cap. 1: Temperatura e energia térmica',
                resource: 'Schroeder - Cap. 1 completo (pgs 1-20) - apenas conceitos qualitativos'
              },
              {
                id: 'jan-t3',
                item: 'Vídeos: Feynman sobre movimento molecular + visualizações de browniano',
                resource: 'Feynman "Six Easy Pieces" - Cap. 1 (Átomos em movimento)'
              }
            ]
          },
          math: {
            title: 'Matemática (4h/semana)',
            tasks: [
              {
                id: 'jan-m1',
                item: 'Probabilidade básica: distribuição normal (gaussiana)',
                resource: 'Sheldon Ross - Cap. 3 seções 3.1.-3.5 (pgs 95-130) - var. aleatórias'
              },
              {
                id: 'jan-m2',
                item: 'Intição: Lógica da probabiliade e inferência',
                resource: 'Jaynes - Caps 1-2 (pgs 1-45) - leitura conceitual'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'jan-c1',
                item: 'Setup: Python + Jupyter + NumPy + Matplotlib',
                resource: 'Instalar Anaconda - Tutorial: docs.anaconda.com/getting-started'
              },
              {
                id: 'jan-c2',
                item: 'Projeto 1: Random walk 1D (1000 passos, plotar trajetória)',
                resource: 'Código: x[i+1] = x[i] + np.random.randn() - criar notebook'
              },
              {
                id: 'jan-c3',
                item: 'Análise: Rodar 100 trajetórias, calcular <x²(t)>, plotar vs t',
                resource: 'Verificar que <x²> ∝ t (difusão) - documentar no notebook'
              }
            ]
          },
          checkpoint: 'Você entende: por que partículas se movem aleatoriamente, <r²> ∝ t, gaussiana'
        },
        {
          week: 'Semanas 3-4 (3 Fev - 14 Fev)',
          theory: {
            title: 'Teoria (5h/semana)',
            tasks: [
              {
                id: 'jan-t4',
                item: 'Schilling "Brownian Motion" cap. 1: Definição matemática (leitura qualitativa)',
                resource: 'Schilling - Cap. 1 completo (pgs 1-25) - propriedades de Markov'
              },
              {
                id: 'jan-t5',
                item: 'Artigos de divulgação sobre aplicações do browniano',
                resource: 'Buscar 3-4 artigos em Physics Today, Scientific American sobre aplicações'
              }
            ]
          },
          math: {
            title: 'Matemática (4h/semana)',
            tasks: [
              {
                id: 'jan-m3',
                item: 'Valor esperado, variância, momentos',
                resource: 'Sheldon Ross - Cap. 4 seções 4.1 - 4.4 (pgs 145-175) - exercícios 4.1 - 4.20'
              },
              {
                id: 'jan-m4',
                item: 'Random walk: calcular <x> e <x²>',
                resource: 'Aplicar Ross + Jaynes Cap. 3 (pgs 46-80)'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'jan-c4',
                item: 'Projeto 2: Random walk 2D, plotar trajetórias no plano',
                resource: 'Criar animação (matplotlib.animation) - salvar como MP4'
              },
              {
                id: 'jan-c5',
                item: 'Análise: Histograma de posições em t fixo, comparar com gaussiana',
                resource: 'Usar scipy.stats.norm.fit() para ajustar gaussiana aos dados'
              },
              {
                id: 'jan-c6',
                item: 'Experimento: Variar número de passos, ver convergência para difusão',
                resource: 'Plots: diferentes Δt (10, 100, 1000 passos), mesmo tempo total'
              }
            ]
          },
          checkpoint: 'Você sabe: simular random walks, TCL explica gaussiana, visualizar trajetórias'
        }
      ],
      milestone: 'Intuição sólida sobre browniano + simulações básicas funcionando'
    },
    {
      month: 'fev',
      title: 'Fevereiro 2026',
      subtitle: 'Equação de Langevin: Dinâmica com força aleatória',
      weeklyHours: '12-15h',
      mainGoal: 'Modelar movimento browniano com atrito + ruído térmico',
      topics: [
        {
          week: 'Semanas 1-2 (16 Fev - 27 Fev)',
          theory: {
            title: 'Teoria (5h/semana)',
            tasks: [
              {
                id: 'fev-t1',
                item: 'Gardiner cap. 2.1-2.3: Equação de Langevin',
                resource: 'Gardiner - Cap. 2 seções 2.1-2.3 (pgs 40-65) - m dv/dt = -γv + F(t)'
              },
              {
                id: 'fev-t2',
                item: 'Teorema de flutuação-dissipação (FDT) - primeira passada',
                resource: 'Gardiner - Seção 2.4 (pgs 65-75) - <F(t)F(t\')> = 2γkT δ(t-t\')'
              },
              {
                id: 'fev-t3',
                item: 'Schroeder cap. 3: Entropia e distribuição de Boltzmann',
                resource: 'Schroeder - Cap. 3 completo (pgs 80-120) - P ∝ exp(-E/kT)'
              }
            ]
          },
          math: {
            title: 'Matemática (4h/semana)',
            tasks: [
              {
                id: 'fev-m1',
                item: 'EDO: Equações lineares de primeira ordem',
                resource: 'Boyce - Cap. 2 seções 2.1-2.2 (pgs 40-70) - resolver dy/dt + ay = 0'
              },
              {
                id: 'fev-m2',
                item: 'Distribuilçoes conjuntas e independência',
                resource: 'Ross - Cap. 5 seções 5.1-5.3 (pgs 185-215) + Jaynes Cap. 4'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'fev-c1',
                item: 'Implementar: Langevin pelo método de Euler-Maruyama',
                resource: 'v[i+1] = v[i] - γ*v[i]*dt + sqrt(2*γ*k*T)*dW - criar função reutilizável'
              },
              {
                id: 'fev-c2',
                item: 'Projeto: Partícula browniana livre (sem potencial)',
                resource: 'Plotar v(t) e x(t), verificar relaxação exponencial de v(t)'
              },
              {
                id: 'fev-c3',
                item: 'Validação: Calcular <v²> numérico, comparar com kT/m',
                resource: 'Equipartição: (1/2)m<v²> = (1/2)kT - erro < 5%'
              }
            ]
          },
          checkpoint: 'Você resolve Langevin numericamente, entende FDT, valida equipartição'
        },
        {
          week: 'Semanas 3-4 (2 Mar - 13 Mar)',
          theory: {
            title: 'Teoria (5h/semana)',
            tasks: [
              {
                id: 'fev-t4',
                item: 'Derivar solução analítica de Langevin para velocidade',
                resource: 'Gardiner - Seção 2.5 (pgs 75-85) - fazer a derivação completa no papel'
              },
              {
                id: 'fev-t5',
                item: 'Regimes: overdamped vs underdamped',
                resource: 'Gardiner - Seção 2.6 (pgs 85-95) - quando γ grande/pequeno'
              }
            ]
          },
          math: {
            title: 'Matemática (4h/semana)',
            tasks: [
              {
                id: 'fev-m3',
                item: 'Teorema Central do Limite (Conceitual)',
                resource: 'Ross - Cap. 7 seções 7.1-7.2 + Jaynes Cap. 7 (pgs 195-220)'
              },
              {
                id: 'fev-m4',
                item: 'Processos estocásticos: correlação e ruído branco',
                resource: 'Ross - Cap. 6 seção 6.1 (pgs 240-260) - Poisson apenas introdutório'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'fev-c4',
                item: 'Projeto: Langevin em potencial harmônico (mola)',
                resource: 'V(x) = (1/2)kx² - adicionar força F = -k*x ao código'
              },
              {
                id: 'fev-c5',
                item: 'Análise: Variar γ e T, observar comportamento',
                resource: 'Plots: trajetórias para γ pequeno vs grande, T baixa vs alta'
              },
              {
                id: 'fev-c6',
                item: 'Validação: <x²> deve ser kT/k (equipartição)',
                resource: 'Comparar analítico (kT/k) vs numérico - documentar convergência'
              }
            ]
          },
          checkpoint: 'Você domina Langevin analiticamente e numericamente, entende regimes'
        }
      ],
      milestone: 'Langevin resolvido + código robusto + validações completas'
    },
    {
      month: 'mar',
      title: 'Março 2026',
      subtitle: 'Equação de Fokker-Planck: Evolução da distribuição',
      weeklyHours: '15-18h',
      mainGoal: 'Entender evolução de P(x,t) e resolver analiticamente casos básicos',
      topics: [
        {
          week: 'Semanas 1-2 (16 Mar - 27 Mar)',
          theory: {
            title: 'Teoria (6h/semana)',
            tasks: [
              {
                id: 'mar-t1',
                item: 'Gardiner cap. 3: Equação de Fokker-Planck (F-P)',
                resource: 'Gardiner - Cap. 3 completo (pgs 95-130) - ∂P/∂t = -∂(A·P)/∂x + (1/2)∂²(B·P)/∂x²'
              },
              {
                id: 'mar-t2',
                item: 'Derivar F-P a partir de Langevin (expansão de Kramers-Moyal)',
                resource: 'Gardiner - Seção 3.3 (pgs 110-120) - seguir derivação passo a passo'
              },
              {
                id: 'mar-t3',
                item: 'Solução fundamental: difusão livre',
                resource: 'Gardiner - Seção 3.4 (pgs 120-125) - P(x,t) = (1/√4πDt) exp(-x²/4Dt)'
              }
            ]
          },
          math: {
            title: 'Matemática (5h/semana)',
            tasks: [
              {
                id: 'mar-m1',
                item: 'EDP: Equação do calor (difusão)',
                resource: 'Strauss - Cap. 1 seções 1.1-1.4 (pgs 1-40)'
              },
              {
                id: 'mar-m2',
                item: 'Conexão random walk → difusão (limite contínuo)',
                resource: 'Notas próprias + resultados de  <x²> ∝ t'
              },
              {
                id: 'mar-m3',
                item: 'Transformada de Fourier - solução da equação de difusão',
                resource: 'Riley - Cap. 13 seção 13.1 - 13.3 (pgs 450-480)'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'mar-c1',
                item: 'Implementar: Resolver F-P por diferenças finitas',
                resource: 'Método explícito (FTCS) ou Crank-Nicolson - escolher baseado em estabilidade'
              },
              {
                id: 'mar-c2',
                item: 'Projeto: Evolução de P(x,t) para difusão livre',
                resource: 'Animação: condição inicial δ(x) → gaussiana alargando'
              },
              {
                id: 'mar-c3',
                item: 'Validação: Comparar numérico com solução analítica',
                resource: 'Erro relativo L2, convergência com refinamento de malha (Δx, Δt)'
              }
            ]
          },
          checkpoint: 'Você deriva F-P, resolve difusão livre analítica e numericamente'
        },
        {
          week: 'Semanas 3-4 (30 Mar - 10 Abr)',
          theory: {
            title: 'Teoria (6h/semana)',
            tasks: [
              {
                id: 'mar-t4',
                item: 'Solução estacionária: dP/dt = 0',
                resource: 'Gardiner - Seção 3.5 (pgs 125-135) - P_st ∝ exp(-V(x)/kT)'
              },
              {
                id: 'mar-t5',
                item: 'Risken cap. 4: Exemplos clássicos (harmônico, duplo poço)',
                resource: 'Risken - Cap. 4 seções 4.1-4.3 (pgs 85-120) - métodos de solução'
              },
              {
                id: 'mar-t6',
                item: 'Pathria cap. 14: Flutuações em equilíbrio',
                resource: 'Pathria - Cap. 14 seções 14.1-14.3 (pgs 550-575) - conexão com mec. estatística'
              }
            ]
          },
          math: {
            title: 'Matemática (5h/semana)',
            tasks: [
              {
                id: 'mar-m4',
                item: 'Funções de Green para EDPs (difusão)',
                resource: 'Riley - Seção 21.4 (pgs 730-750) - Green G(x,t;x₀,t₀) da equação do calor'
              },
              {
                id: 'mar-m5',
                item: 'Autofunções e autovalores (expansão espectral)',
                resource: 'Strauss - Cap. 2 (pgs 50-80) - solução da equação de difusão / Fokker–Planck'
              }
            ]
          },
          coding: {
            title: 'Programação (7h/semana)',
            tasks: [
              {
                id: 'mar-c4',
                item: 'Projeto: F-P em potencial harmônico',
                resource: 'V(x) = (1/2)kx² - comparar P_st numérica com exp(-kx²/2kT)'
              },
              {
                id: 'mar-c5',
                item: 'Projeto: F-P em potencial duplo poço',
                resource: 'V(x) = ax⁴ - bx² - observar relaxação para P_st bimodal'
              },
              {
                id: 'mar-c6',
                item: 'Validação cruzada: Histograma de Langevin vs solução F-P',
                resource: 'Rodar Langevin 10⁴ trajetórias, comparar com F-P - devem coincidir!'
              },
              {
                id: 'mar-c7',
                item: 'Otimização: Melhorar performance do código',
                resource: 'Usar Numba (@jit), vectorização NumPy, escolher método eficiente'
              }
            ]
          },
          checkpoint: 'Você resolve F-P com potenciais, entende Boltzmann, valida com Langevin'
        }
      ],
      milestone: 'Fokker-Planck dominado + biblioteca de código sólida'
    },
    {
      month: 'abr',
      title: 'Abril 2026',
      subtitle: 'Van Kampen: Formalismo rigoroso e equação mestra',
      weeklyHours: '15-18h',
      mainGoal: 'Teoria formal de processos estocásticos e expansão sistemática',
      topics: [
        {
          week: 'Semanas 1-2',
          theory: {
            title: 'Teoria (7h/semana)',
            tasks: [
              {
                id: 'abr-t1',
                item: 'Van Kampen cap. 1: Processos estocásticos - definições',
                resource: 'Van Kampen - Cap. 1 completo (pgs 1-30) - Markov, estacionário, ergódico'
              },
              {
                id: 'abr-t2',
                item: 'Van Kampen cap. 2: Equação mestra',
                resource: 'Van Kampen - Cap. 2 completo (pgs 31-70) - dP_n/dt = Σ(W_mn P_m - W_nm P_n)'
              },
              {
                id: 'abr-t3',
                item: 'Relação: equação mestra → Fokker-Planck',
                resource: 'Van Kampen - Seção 2.5 (pgs 60-70) - quando a aproximação é válida?'
              }
            ]
          },
          math: {
            title: 'Matemática (5h/semana)',
            tasks: [
              {
                id: 'abr-m1',
                item: 'Processos de Markov formais',
                resource: 'Ross - Cap. 6 seções 6.2 - 6.4 (pgs 260-295)'           
              },
              {
                id: 'abr-m2',
                item: 'Inferência, entropia e física estatística',
                resource: 'Jaynes - Cap. 8 (pgs 340-270)'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'abr-c1',
                item: 'Projeto: Implementar equação mestra discreta',
                resource: 'Ex: sistema de 2 estados (A ⇌ B) com taxas k+ e k-'
              },
              {
                id: 'abr-c2',
                item: 'Análise: Evolução temporal de P_n, relaxação para equilíbrio',
                resource: 'Calcular autovalores, tempos de relaxação τ = 1/λ'
              }
            ]
          },
          checkpoint: 'Você entende equação mestra, conexão com F-P'
        },
        {
          week: 'Semanas 3-4 (13 Abr - 24 Abr)',
          theory: {
            title: 'Teoria (7h/semana)',
            tasks: [
              {
                id: 'abr-t4',
                item: 'Van Kampen caps. 3-4: Expansão de Kramers-Moyal',
                resource: 'Van Kampen - Caps 3-4 (pgs 71-120) - quando truncar em 2ª ordem?'
              },
              {
                id: 'abr-t5',
                item: 'Van Kampen cap. 5: Exemplos físicos',
                resource: 'Van Kampen - Cap. 5 (pgs 121-160) - birth-death, reações químicas'
              },
              {
                id: 'abr-t6',
                item: 'Van Kampen cap. 8: Expansão sistemática (Ω-expansion)',
                resource: 'Van Kampen - Cap. 8 (pgs 220-260) - separar macro + flutuações'
              }
            ]
          },
          math: {
            title: 'Matemática (5h/semana)',
            tasks: [
              {
                id: 'abr-m3',
                item: 'Funções geradoras',
                resource: 'Van Kampen - Apêndice II (pgs 450-460) - ferramenta para processos estocásticos'
              },
              {
                id: 'abr-m4',
                item: 'Transformada de Laplace',
                resource: 'Riley - Cap. 13 seção 13.6 (pgs 500-520) - resolução da equação mestra'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'abr-c3',
                item: 'Projeto: Algoritmo de Gillespie (simulação estocástica exata)',
                resource: 'Implementar SSA (Stochastic Simulation Algorithm) para A ⇌ B'
              },
              {
                id: 'abr-c4',
                item: 'Comparação: descrição determinística vs estocástica',
                resource: 'Quando flutuações importam? Variar N (número de moléculas)'
              },
              {
                id: 'abr-c5',
                item: 'Análise: Scaling com tamanho do sistema (Ω)',
                resource: 'Verificar: flutuações ~ 1/√Ω (predição da Ω-expansion)'
              }
            ]
          },
          checkpoint: 'Você domina equação mestra, entende limites de validade'
        }
      ],
      milestone: 'Formalismo de Van Kampen + aplicações concretas'
    },
    {
      month: 'mai',
      title: 'Maio 2026',
      subtitle: 'Flutuação-Dissipação e Termodinâmica Estatística',
      weeklyHours: '15-18h',
      mainGoal: 'Conexão profunda entre flutuações microscópicas e dissipação macroscópica',
      topics: [
        {
          week: 'Semanas 1-2 (27 Abr - 8 Mai)',
          theory: {
            title: 'Teoria (7h/semana)',
            tasks: [
              {
                id: 'mai-t1',
                item: 'Kubo cap. 1-2: Teorema de flutuação-dissipação (FDT)',
                resource: 'Kubo - Caps 1-2 (pgs 1-80) - <F(t)F(0)> ↔ γ (dissipação)'
              },
              {
                id: 'mai-t2',
                item: 'Kubo cap. 3: Teoria de resposta linear',
                resource: 'Kubo - Cap. 3 (pgs 81-140) - susceptibilidades, funções de correlação'
              },
              {
                id: 'mai-t3',
                item: 'Pathria caps. 14-15: Flutuações termodinâmicas',
                resource: 'Pathria - Caps 14-15 (pgs 550-620) - conexão com susceptibilidades'
              }
            ]
          },
          math: {
            title: 'Matemática (5h/semana)',
            tasks: [
              {
                id: 'mai-m1',
                item: 'Transformadas de Fourier - aplicações (espctros)',
                resource: 'Riley - Seções sobre spectrum, densidades espectrais (pgs 480-500)'
              },
              {
                id: 'mai-m2',
                item: 'Funções de correlação temporal',
                resource: 'Kubo - Apêndice A (pgs 250-270) - C(t) = <A(t)A(0)> e propriedades'
              }
            ]
          },
          coding: {
            title: 'Programação (6h/semana)',
            tasks: [
              {
                id: 'mai-c1',
                item: 'Calcular: Coeficiente de difusão via FDT (D = kT/γ)',
                resource: 'Relação de Einstein - verificar D medido vs D teórico'
              },
              {
                id: 'mai-c2',
                item: 'Projeto: Medir correlações <x(t)x(0)> em simulações',
                resource: 'Calcular função de autocorrelação, comparar com exp(-t/τ)'
              },
              {
                id: 'mai-c3',
                item: 'Análise: Johnson-Nyquist noise (ruído térmico)',
                resource: 'Simular resistor com flutuações térmicas, calcular espectro de potência'
              }
            ]
          },
          checkpoint: 'Você entende FDT profundamente, aplica a sistemas físicos'
        },
        {
          week: 'Semanas 3-4 (11 Mai - 22 Mai)',
          theory: {
            title: 'Teoria (7h/semana)',
            tasks: [
              {
                id: 'mai-t4',
                item: 'Schroeder caps. 4-6: Mecânica estatística de equilíbrio',
                resource: 'Schroeder - Caps 4-6 (pgs 140-240) - ensembles, função partição'
              },
              {
                id: 'mai-t5',
                item: 'Pathria caps. 2-3: Formalismo canônico',
                resource: 'Pathria - Caps 2-3 (pgs 50-150) - base sólida em mec. estatística'
              },
              {
                id: 'mai-t6',
                item: 'Leitura: Artigos de revisão sobre termodinâmica estocástica',
                resource: 'Seifert (2012) Rep. Prog. Phys. - preparação para tópicos avançados'
              }
            ]
          },
          math: {
            title: 'Matemática (4h/semana)',
            tasks: [
              {
                id: 'mai-m3',
                item: 'Análise dimensional e leis de escala (scaling)',
                resource: 'Identificação de parâmetros relevantes, regimes assintóticos, x² ∼ t'
              },
              {
                id: 'mai-m4',
                item: 'Revisão: lacunas matemáticas identificadas',
                resource: 'Preencher gaps conforme necessário (EDO, EDP, probabilidade)'
              }
            ]
          },
          coding: {
            title: 'Programação (7h/semana)',
            tasks: [
              {
                id: 'mai-c4',
                item: 'Projeto integrador: Sistema complexo à escolha',
                resource: 'Ex: escape de Kramers, partícula em meio desordenado, ratchet'
              },
              {
                id: 'mai-c5',
                item: 'Análise completa: teoria + simulação + validação',
                resource: 'Documento de 5-10 páginas com: teoria, código, resultados, discussão'
              },
              {
                id: 'mai-c6',
                item: 'Organizar: Biblioteca de código bem documentada',
                resource: 'GitHub repo público - README, docstrings, exemplos, testes'
              }
            ]
          },
          checkpoint: 'Você conecta flutuações com termodinâmica, domina análise completa'
        }
      ],
      milestone: 'FDT dominado + base sólida em mecânica estatística'
    },
    {
      month: 'jun',
      title: 'Junho 2026',
      subtitle: 'Exploração e Definição de Tema de IC',
      weeklyHours: '15-18h',
      mainGoal: 'Explorar fronteiras, identificar tema para IC, escrever proposta',
      topics: [
        {
          week: 'Semanas 1-2 (25 Mai - 5 Jun)',
          theory: {
            title: 'Exploração de Tópicos (8h/semana)',
            tasks: [
              {
                id: 'jun-t1',
                item: 'Ler 15-20 artigos recentes (2020-2025) em áreas de interesse',
                resource: 'ArXiv: cond-mat.stat-mech, PRE, Phys Rev Letters'
              },
              {
                id: 'jun-t2',
                item: 'Identificar 3-4 problemas abertos interessantes',
                resource: 'Fazer fichamento: motivação, estado da arte, gap'
              },
              {
                id: 'jun-t3',
                item: 'Estudar 1-2 tópicos avançados específicos',
                resource: 'Escolher: difusão anômala, termo. estocástica, escape, etc'
              }
            ]
          },
          exploration: {
            title: 'Experimentação (10h/semana)',
            tasks: [
              {
                id: 'jun-e1',
                item: 'Implementar 2-3 modelos de artigos recentes',
                resource: 'Reproduzir figuras principais'
              },
              {
                id: 'jun-e2',
                item: 'Exploração: modificar modelos, testar variações',
                resource: 'Buscar comportamentos novos ou inesperados'
              },
              {
                id: 'jun-e3',
                item: 'Discussões: reuniões com potenciais orientadores',
                resource: 'Apresentar interesses, ouvir sugestões'
              }
            ]
          },
          checkpoint: 'Você tem 3 ideias concretas de temas para IC'
        },
        {
          week: 'Semanas 3-4 (8 Jun - 19 Jun)',
          theory: {
            title: 'Definição de Tema (6h/semana)',
            tasks: [
              {
                id: 'jun-t4',
                item: 'Decidir tema específico com orientador',
                resource: 'Considerar: viabilidade, interesse, originalidade'
              },
              {
                id: 'jun-t5',
                item: 'Leitura focada: 10 artigos chave do tema escolhido',
                resource: 'Entender estado da arte em detalhe'
              },
              {
                id: 'jun-t6',
                item: 'Estudar metodologias específicas necessárias',
                resource: 'Técnicas analíticas ou numéricas especiais'
              }
            ]
          },
          writing: {
            title: 'Proposta de IC (12h/semana)',
            tasks: [
              {
                id: 'jun-w1',
                item: 'Escrever proposta (5-8 páginas): Introdução + Motivação',
                resource: 'Contexto, relevância, problema específico'
              },
              {
                id: 'jun-w2',
                item: 'Objetivos e metodologia detalhados',
                resource: 'O que fazer, como fazer, cronograma de 12 meses'
              },
              {
                id: 'jun-w3',
                item: 'Bibliografia anotada (30-40 referências)',
                resource: 'Artigos organizados por subtema'
              },
              {
                id: 'jun-w4',
                item: 'Resultados preliminares (se houver)',
                resource: 'Simulações exploratórias, cálculos iniciais'
              }
            ]
          },
          checkpoint: 'Você tem proposta completa de IC pronta para Agosto!'
        }
      ],
      milestone: 'IC: Tema definido + Proposta escrita + Base sólida'
    }
  ];

  const milestones = [
  { month: 'Jan', achievement: 'Intuição sobre movimento browniano, random walk e simulações básicas' },
  { month: 'Fev', achievement: 'Equação de Langevin dominada (analítico + numérico)' },
  { month: 'Mar', achievement: 'Equação de Fokker–Planck resolvida, código estável e interpretável' },
  { month: 'Abr', achievement: 'Formalismo de Van Kampen e equação mestra compreendidos' },
  { month: 'Mai', achievement: 'FDT e correlações temporais integradas à mecânica estatística' },
  { month: 'Jun', achievement: 'Tema de IC definido, proposta escrita e fundamentada' }
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
          <h3 className="font-bold text-lg text-gray-900 mb-4">📚 Bibliografia Progressiva</h3>
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
                <div className="text-gray-600">Teoria (40%) + Matemática (30%) + Código (30%)</div>
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