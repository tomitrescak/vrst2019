import * as React from "react";

const speakers = [
  {
    title: "Virtual Reality Event",
    name: "Mark Walsh",
    job: "Director of Pixar Animation Studios",
    date: "Friday, 30 January",
    image: "/static/images/news/Mark-Walsh.jpeg",
    bio: `With 18 years at Pixar, Mark is a Writer-Director of Partysaurus Rex﻿ and Animation Lead on Academy Award winners Finding Nemo and Ratatouille, an experienced commercial director, he's also contributed to The Incredibles, Monsters Inc, the Toy Story 2, Toy Story 3, A Bug's Life, Up, Presto, & The Good Dinosaur.`,
    about: "text"
  }
];

export const Keynotes = () => (
  <>
    <div className="container">
      {speakers.map((_speakers, i) => (
        <div className="media" id={i}>
          <img
            src={_speakers.image}
            className="align-self-start mr-3"
            alt="image"
            height="120"
            width="120"
          />

          <div className="media-body">
            <div class="alert alert-dark" role="alert">
              <h3 className="mt-0">{_speakers.title}</h3>
              {_speakers.date}
            </div>

            <h4>{_speakers.name}</h4>
            <p>{_speakers.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);
