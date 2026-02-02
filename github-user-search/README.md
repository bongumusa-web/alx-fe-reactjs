GitHub User Search Application

Live Demo

A responsive React application that allows users to search for GitHub profiles with advanced filters such as location and minimum repository count. This project integrates the GitHub Search API and is optimized for real-world deployment using Vercel.

Features

🔍 Search GitHub users by username

🌍 Filter users by location

📦 Filter users by minimum number of repositories

⚡ Live results display with avatar, username, and profile link

💻 Responsive design for desktop and mobile

🛡 Uses environment variables for secure API key management

🏗 Deployed on Vercel with production-ready build optimizations



Getting Started

Follow these instructions to set up the project locally:

Prerequisites

Node.js (v16 or newer recommended)

npm or yarn

Installation

Clone the repository:

git clone https://github.com/bongumusa-web/alx-fe-reactjs.git
cd alx-fe-reactjs/github-user-search


Install dependencies:

npm install


Create a .env file in the project root with your GitHub Personal Access Token:

VITE_APP_GITHUB_API_KEY=your_token_h


Important: Keep this file private and add it to .gitignore.

Start the development server:

npm run dev


The app should now be running at http://localhost:5173 (or the port shown in the terminal).

Deployment

This project is deployed on Vercel. Any updates pushed to the main branch are automatically deployed.

Live App: https://alx-fe-reactjs-xi-seven.vercel.app/

Project Structure
github-user-search/
├─ src/
│  ├─ components/        # React components
│  │   └─ Search.jsx
│  ├─ services/          # API service for GitHub
│  │   └─ githubService.js
│  └─ main.jsx            # React entry point
├─ .env                   # Environment variables (ignored)
├─ package.json
├─ vite.config.js
└─ README.md

Technologies Used

React 18

Vite

Axios

Tailwind CSS (optional for styling)

GitHub REST API

Vercel for deployment

Future Improvements

Add pagination for search results

Display additional user information (followers, repos, bio)

Dark mode toggle

Unit testing with Jest or React Testing Library

License

This project is open-source and available under the MIT License.

This README is:

Flexible – You can update screenshots, features, or deployment URLs anytime.























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
