# React + Vite

This template provides a minimal setup to get React working in Vite with Prettier and some ESLint rules.

The app allows users to search movies, add to a personal watchlist, edit or remove entries and manage a personal watchlist stored in the browser using localStorage.

# My React Vite App

A modern React application built with [Vite](https://vitejs.dev/), ESLint, and Prettier.

## Installation

1. Clone the repository.

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies.

npm install

3. Set up environment variables

Create a .env file in the root directory:

VITE_MOVIE_API_KEY=your_omdb_api_key_here

4. Run the Development Server.

npm run dev

The app will be available at http://localhost:5173 by default.

5. Code Quality Tools.

ESLint: Linting and code quality.
Prettier: Code formatting.
Vite: Fast build tool and dev server.

🧩 Features

🔍 Search movies using the OMDb API

➕ Add/remove movies from your watchlist

💾 Watchlist persists in localStorage

⚡ Fast HMR with Vite

🧹 Linting with ESLint

🎨 Formatting with Prettier

🧭 Navigation with React Router DOM

🌐 API Details

Service: OMDb API

Base URL:

https://www.omdbapi.com/

Example Request:

GET https://www.omdbapi.com/?t=inception&apikey=your_api_key

Credentials:
Register for a free API key here
and store it in .env as:

VITE_MOVIE_API_KEY=your_api_key
