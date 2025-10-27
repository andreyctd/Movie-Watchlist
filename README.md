Movie-Watchlist

The app allows users to search movies, add to a personal watchlist, edit or remove entries and manage a personal watchlist stored in the browser using localStorage.

Installation

1. Clone the repository.

git clone https://github.com/andreyctd/Movie-Watchlist.git
cd Movie-Watchlist

2. Install dependencies.

npm install

3. Set up environment variables

Create a .env file in the root directory:

VITE_MOVIE_API_KEY=dcdb49d6
http://www.omdbapi.com/?i=tt3896198&apikey=dcdb49d6

4. Run the Development Server.

npm run dev

The app will be available at http://localhost:5173 by default.

5. Code Quality Tools.

ESLint: Linting and code quality.
Prettier: Code formatting.
Vite: Fast build tool and dev server.

Features

Search movies using the OMDb API

Add/remove movies from your watchlist

Watchlist persists in localStorage

Fast HMR with Vite

Linting with ESLint

Formatting with Prettier

Navigation with React Router DOM

API Details

Service: OMDb API

Base URL:

https://www.omdbapi.com/

Example Request:

GET http://www.omdbapi.com/?i=tt3896198&apikey=dcdb49d6

Credentials:
Register for a free API key here
and store it in .env as:

VITE_MOVIE_API_KEY=dcdb49d6
