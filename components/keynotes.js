import * as React from 'react';
import { PageSection } from './page_section';
import { makeUrl } from './common';

const speakers = [
  {
    title: 'Virtual Reality Event',
    name: 'Timoni West',
    job: 'Director of Pixar Animation Studios',
    date: 'TBH',
    image: '/static/images/timoni-west.jpg',
    bio: `Timoni West is the Director of XR Research at Unity, where she leads a team of cross-disciplinary artists and engineers exploring new interfaces for human-computer interaction. Currently, her team focuses on spatial computing: how we will live, work, and create in a world where digital objects and the real world live side-by-side. One of her team’s first tools, EditorXR, a tool for editing Unity projects directly in virtual reality, won SF Design Week’s first-ever Virtual Tech award in 2018.

    A longtime technologist, Timoni was formerly SVP at Alphaworks, co-founder of Recollect, and CEO of Department of Design, a digital agency. She's worked for startups across the country, including Foursquare, Flickr, Causes, and Airtime.
    
    Timoni serves on the OVA board and is an advisor to Tvori and Spatial Studios, among others. In 2017, Timoni was listed in Next Reality News’ Top 50 to Watch. Additionally, she serves on XRDC’s advisory board, is a Sequoia Scout, and was a jury member for ADC’s 2018 Awards in Experiential Design.`,
    about: 'text'
  },
  {
    title: 'Virtual Reality Event',
    name: 'Mark Walsh',
    job: 'Director of Pixar Animation Studios',
    date: 'TBH',
    image: '/static/images/news/Mark-Walsh.jpeg',
    bio: `Mark Walsh is an 18 year veteran of Pixar Animation Studios. He directed the Toy Story short, PartySaurus Rex, supervised animation on Ratatouille and Finding Nemo, and contributed to nearly every project at the studio, including A Bug’s Life, Toy Story 2, Monsters Inc, The Incredibles, Presto, The Good Dinosaur, Cars 3, Up, and Toy Story 3. He is an experienced animator, storyboard artist, voice actor, writer and director. Mark left Pixar in 2015 and is currently founder of Motional.ai, using artificial intelligence to to converse with beloved animated characters.`,
    about: 'text'
  },
  {
    title: 'Virtual Reality Event',
    name: 'Professor Mark Billinghurst',
    job: ' Professor of Human Computer Interaction',
    date: 'TBH',
    image: '/static/images/news/Mark-Billinghurst-p.png',
    bio: `Dr. Mark Billinghurst is one of the world's leading augmented reality researchers, focusing on innovative computer interfaces that explore how virtual and real worlds can be merged. Former director of the HIT Lab New Zealand (HIT Lab NZ) at the University of Canterbury in New Zealand, he has produced over 250 technical publications and presented demonstrations and courses at a wide variety of conferences.`,
    about: 'text'
  }
];

export const Keynotes = () => (
  <PageSection title="Keynotes" id="keynotes">
    {speakers.map((_speakers, i) => (
      <div className="media" id={i}>
        <img
          src={makeUrl(_speakers.image)}
          className="align-self-start mr-3"
          alt="image"
          width="120"
        />

        <div className="media-body">
          {/* <div className="alert alert-dark" role="alert">
              <h3 className="mt-0">{_speakers.title}</h3>
              {_speakers.date}
            </div> */}

          <h4>{_speakers.name}</h4>
          <p>{_speakers.bio}</p>
        </div>
      </div>
    ))}
  </PageSection>
);
