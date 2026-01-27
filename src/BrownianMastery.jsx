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
    month: "jan",
    title: "Janeiro 2026",
    subtitle: "Termodinâmica e Flutuações",
    weeklyHours: "15h/sem",
    mainGoal: "Entender o movimento browniano como manifestação direta de flutuações térmicas",
    topics: [
      {
        title: "Termodinâmica",
        hours: "6h/sem",
        theory: {
          title: "Fundamentos",
          tasks: [
            {
              id: "jan-t1",
              item: "Temperatura, entropia e segunda lei",
              resource: "Schroeder – Thermal Physics, caps 1–3"
            },
            {
              id: "jan-t2",
              item: "Distribuição de Boltzmann",
              resource: "Schroeder – cap 3"
            },
            {
              id: "jan-t3",
              item: "Flutuações em sistemas pequenos",
              resource: "Schroeder – seções sobre flutuações"
            }
          ]
        },
        checkpoint: "Explicar Browniano como consequência da agitação térmica molecular"
      }
    ],
    milestone: "Browniano entendido como fenômeno termodinâmico"
  },

  {
    month: "fev",
    title: "Fevereiro 2026",
    subtitle: "Transporte e Dissipação",
    weeklyHours: "15h/sem",
    mainGoal: "Conectar flutuações térmicas à dissipação via Langevin",
    topics: [
      {
        title: "Dinâmica Estocástica",
        hours: "5h/sem",
        theory: {
          title: "Equação de Langevin",
          tasks: [
            {
              id: "fev-l1",
              item: "Equação de Langevin: arrasto + ruído",
              resource: "Gardiner – caps 1–3"
            },
            {
              id: "fev-l2",
              item: "Teorema Flutuação-Dissipação",
              resource: "Derivação física do FDT"
            },
            {
              id: "fev-l3",
              item: "Relação de Einstein D = kT/γ",
              resource: "Gardiner – seção correspondente"
            }
          ]
        },
        coding: {
          title: "Simulações",
          tasks: [
            {
              id: "fev-c1",
              item: "Implementar Langevin (Euler-Maruyama)",
              resource: "dv/dt = -γv + √(2γkT) ξ(t)"
            },
            {
              id: "fev-c2",
              item: "Medir D e γ independentemente"
            },
            {
              id: "fev-c3",
              item: "Verificar D = kT/γ numericamente"
            }
          ]
        },
        checkpoint: "Conectar dissipação com flutuações"
      }
    ],
    milestone: "Langevin dominado e validado numericamente"
  },

  {
    month: "mar",
    title: "Março 2026",
    subtitle: "Fokker–Planck e Termodinâmica",
    weeklyHours: "17h/sem",
    mainGoal: "Entender evolução temporal de distribuições de probabilidade",
    topics: [
      {
        title: "Fokker–Planck",
        hours: "6h/sem",
        theory: {
          title: "Equação de Fokker–Planck",
          tasks: [
            {
              id: "mar-f1",
              item: "FPE como conservação de probabilidade",
              resource: "Gardiner – caps 4–5"
            },
            {
              id: "mar-f2",
              item: "Métodos de solução",
              resource: "Risken – caps 4–6"
            },
            {
              id: "mar-f3",
              item: "Solução estacionária",
              resource: "P_st ∝ exp(-V/kT)"
            }
          ]
        },
        coding: {
          title: "Solver Numérico",
          tasks: [
            {
              id: "mar-c1",
              item: "Resolver FPE via diferenças finitas",
              resource: "Crank–Nicolson"
            },
            {
              id: "mar-c2",
              item: "Verificar relaxação até Boltzmann"
            }
          ]
        },
        checkpoint: "Mostrar que P_st minimiza energia livre"
      }
    ],
    milestone: "Fokker–Planck dominada como descrição estatística"
  },

  {
    month: "abr",
    title: "Abril 2026",
    subtitle: "Processos Irreversíveis",
    weeklyHours: "17h/sem",
    mainGoal: "Derivar irreversibilidade a partir de dinâmica microscópica",
    topics: [
      {
        title: "Não-Equilíbrio",
        hours: "8h/sem",
        theory: {
          title: "FDT e resposta linear",
          tasks: [
            {
              id: "abr-n1",
              item: "Teorema Flutuação-Dissipação completo",
              resource: "Kubo – Statistical Physics II"
            },
            {
              id: "abr-n2",
              item: "Funções de correlação e susceptibilidade"
            }
          ]
        },
        checkpoint: "Derivar FDT a partir de reversibilidade microscópica"
      }
    ],
    milestone: "Irreversibilidade compreendida formalmente"
  },

  {
    month: "mai",
    title: "Maio 2026",
    subtitle: "Teoremas de Flutuação Modernos",
    weeklyHours: "17h/sem",
    mainGoal: "Aplicar termodinâmica estocástica a sistemas reais",
    topics: [
      {
        title: "Termodinâmica Estocástica",
        hours: "10h/sem",
        theory: {
          title: "Flutuação moderna",
          tasks: [
            {
              id: "mai-s1",
              item: "Review de Seifert (2012)",
              resource: "Rep. Prog. Phys."
            },
            {
              id: "mai-s2",
              item: "Teoremas de Jarzynski e Crooks"
            }
          ]
        },
        checkpoint: "Aplicar teoremas de flutuação numericamente"
      }
    ],
    milestone: "Ferramentas modernas dominadas"
  },

  {
    month: "jun",
    title: "Junho 2026",
    subtitle: "Síntese e IC",
    weeklyHours: "18h/sem",
    mainGoal: "Consolidar e definir projeto de iniciação científica",
    topics: [
      {
        title: "Síntese",
        hours: "8h/sem",
        writing: {
          title: "Documento",
          tasks: [
            {
              id: "jun-w1",
              item: "Escrever síntese de 10 páginas"
            },
            {
              id: "jun-w2",
              item: "Preparar apresentação"
            }
          ]
        },
        checkpoint: "Proposta de IC pronta para submissão"
      }
    ],
    milestone: "Projeto de IC definido e estruturado"
  }
];
const milestones = [
  { month: 'Jan', achievement: 'Browniano entendido como fenômeno termodinâmico' },
  { month: 'Fev', achievement: 'Langevin dominado e validado numericamente' },
  { month: 'Mar', achievement: 'Fokker-Planck dominada como descrição estatística' },
  { month: 'Abr', achievement: 'Irreversibilidade compreendida formalmente' },
  { month: 'Mai', achievement: 'Ferramentas modernas dominadas' },
  { month: 'Jun', achievement: 'Projeto de IC definido e estruturado' }
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
    </div>
  );
};

export default BrownianMastery;