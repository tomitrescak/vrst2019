import * as React from 'react';

const speakers = [
  {
    title: 'Virtual Reality Event',
    name: 'Mark Walsh',
    job: 'Director of Pixar Animation Studios',
    date: 'Friday, 30 January',
    image: '/static/images/news/Mark-Walsh.jpeg',
    bio: `Mark Walsh is an 18 year veteran of Pixar Animation Studios. He directed the Toy Story short, PartySaurus Rex, supervised animation on Ratatouille and Finding Nemo, and contributed to nearly every project at the studio, including A Bug’s Life, Toy Story 2, Monsters Inc, The Incredibles, Presto, The Good Dinosaur, Cars 3, Up, and Toy Story 3. He is an experienced animator, storyboard artist, voice actor, writer and director. Mark left Pixar in 2015 and is currently founder of Motional.ai, using artificial intelligence to to converse with beloved animated characters.`,
    about: 'text'
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
