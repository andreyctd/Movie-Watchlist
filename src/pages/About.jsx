import React from 'react';

const About = () => {
  return (
    <div className="app">
      <h1>About This App</h1>
      <p>
        The Movie Watchlist App is a responsive simple movie search web
        application built with React that allows users to search for movies
        using the OMDb API and create a personalized watchlist.
      </p>
      <p>
        Users can browse search results, view basic movie details (such as
        title, year, and poster), and save or remove titles from their
        watchlist.
      </p>
      <p>Made using React, Vite, and React Router.</p>
      <p>Author</p>
      <p>
        Created by <strong>Andrey Gnusarev</strong>
      </p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a
          href="https://github.com/andreyctd"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/andreyctd
        </a>
      </p>
      <p>
        Thanks to <strong>Code the Dream</strong> for the learning support and
        guidance!
      </p>
    </div>
  );
};

export default About;
