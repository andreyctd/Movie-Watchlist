import React from "react";

const About = () => {
  return (
    <div className="app">
      <h1>About This App</h1>
      <p>
        This is a simple movie search app built with React and the OMDb API.
      </p>
      <p>
        You can search for movies, view their details, and add them to your
        watchlist.
      </p>
      <p>Made using React, Vite, and React Router.</p>
      <p>Author</p>
      <p>
        Created by <strong>Andrey Gnusarev</strong>
      </p>
      <p>
        <strong>GitHub:</strong> {" "}
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
