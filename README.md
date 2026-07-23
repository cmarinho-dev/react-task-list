<div align="center">

<img src="./logo.svg" alt="agents Logo" width="300" />

# React Task List

[Demo Online](#demo-online) • [Instalação](#instalação) • [Scripts](#scripts) • [Tecnologias](#tecnologias)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel&logoColor=white)

</div>

---

### Sumário
- [Introdução](#introdução)
- [Demo Online](#demo-online)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts](#scripts)
- [Tecnologias](#tecnologias)

# Introdução

**React Task List** é uma aplicação de lista de tarefas (to-do list) construída com **React 19** e **TypeScript**, usando **Vite** como build tool e **TailwindCSS** para estilização. O projeto internamente é identificado como `react-todo-lister`.

# Demo Online

A aplicação está publicada na Vercel:

👉 [react-task-list-fawn.vercel.app](https://react-task-list-fawn.vercel.app)

# Funcionalidades

- Criação, edição e remoção de tarefas;
- Navegação entre telas com **React Router**;
- Ícones consistentes via **lucide-react**;
- Identificadores únicos para as tarefas gerados com **uuid**;
- Interface estilizada com **TailwindCSS 4**.

# Pré-requisitos

- **Node.js** (recomendado 18+);
- **npm** (ou outro gerenciador compatível, como pnpm/yarn).

# Instalação

```sh
git clone https://github.com/cmarinho-dev/react-task-list.git
cd react-task-list
npm install
```

Inicie o servidor de desenvolvimento:

```sh
npm run dev
```

A aplicação ficará disponível no endereço informado pelo Vite no terminal (por padrão, `http://localhost:5173`).

# Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento (Vite) |
| `npm run build` | Compila o projeto (TypeScript + build de produção) |
| `npm run lint` | Executa o ESLint no projeto |
| `npm run preview` | Serve o build de produção localmente |

# Tecnologias

- **React 19** + **React DOM**;
- **TypeScript**;
- **Vite** — dev server e bundler;
- **React Router DOM** — roteamento;
- **TailwindCSS 4** (via `@tailwindcss/vite`) — estilização;
- **lucide-react** — ícones;
- **uuid** — geração de IDs únicos para as tarefas;
- **ESLint** — padronização e qualidade de código.

---

<div align="center">

Feito com React + TypeScript, para organizar aquela lista de tarefas.

</div>
