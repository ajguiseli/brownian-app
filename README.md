# brownian-app — Plano de estudo: Movimento Browniano

Uma página interativa com meu cronograma de estudo (Janeiro–Junho 2026) sobre movimento browniano, processos estocásticos e tópicos relacionados, com objetivos práticos (simulações, notebooks, propostas de IC). A interface inclui marcos mensais, roadmap detalhado por semanas (teoria, matemática, programação), checklist de tarefas, bibliografia e próximos passos.

Demo
- Versão pública (GitHub Pages): https://ajguiseli.github.io/brownian-app/
- Repositório: https://github.com/ajguiseli/brownian-app

O que este repositório contém
- Um plano de estudos completo (cronograma, tarefas e recursos).
- UI interativa em React que permite:
  - navegar por mês;
  - marcar tarefas como concluídas (checklist local);
  - visualizar bibliografia, marcos e próximos passos.

Como usar a página
1. Abra a demo: https://ajguiseli.github.io/brownian-app/
2. Navegue pelos meses usando os botões na seção "Navegação Mensal".
3. Clique no círculo ao lado de cada tarefa para marcá-la como concluída (o estado atual é mantido apenas na sessão).

Como rodar localmente
Pré-requisitos: Node.js (versão LTS), npm/yarn.

1. Clone
   ```bash
   git clone https://github.com/ajguiseli/brownian-app.git
   cd brownian-app
   ```

2. Instale dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Rode em dev
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

Arquitetura rápida
- index.html — ponto de entrada (root).
- src/main.jsx — bootstrap do React.
- src/App.jsx — componente App (renderiza BrownianMastery).
- src/BrownianMastery.jsx — componente principal que contém todo o roadmap, UI e lógica de checklist.
- src/index.css — estilos globais.

Entregáveis esperados
- Notas semanais (docs/)
- Notebooks com simulações (notebooks/)
- Código interativo (src/) e deploy (GitHub Pages)
- Relatório final / proposta de IC (quando aplicável)

Criado por: ajguiseli