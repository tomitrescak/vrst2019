import * as Reacxt from 'react';
import { makeUrl } from './common';

const news = [
  {
    title: 'Website Launched!',
    date: 'November 6, 2018',
    author: 'Tomas Trescak',
    image: '/static/images/news/website.jpg',
    text: `While we are looking forward to VRST 2018 and SIGGRAPH Asia 2018 in Tokyo, 
            we are also working hard to make your experience unique during the 25th VRST 
            in Sydney, Australia. Today, we are launching our new website with 
            information on the venue. Keynote announcements and the CFP are coming soon!`
  },
  {
    title: 'Keynote by Mark Walsh the former creative director of Pixar Animation',
    date: 'January 30, 2019',
    author: 'Gilbert Zhuo',
    image: '/static/images/news/Mark-Walsh-News.jpg',
    text: `Mark Walsh is an 18 year veteran of Pixar Animation Studios. He directed the Toy Story short, PartySaurus Rex, supervised animation on Ratatouille and Finding Nemo, and contributed to nearly every project at the studio, including A Bug’s Life, Toy Story 2, Monsters Inc, The Incredibles, Presto, The Good Dinosaur, Cars 3, Up, and Toy Story 3 ...`
  }
];

export const NewsItem = ({ width, title, author, image, date, text }) => (
  <div className="col-12 col-md-6">
    <figure className="featured-image">
      <img src={image} alt="Illustratory news image" height="322" width="622" />
    </figure>

    <div className="box-link-date">{date}</div>

    <div className="content-wrapper">
      <div className="entry-content">
        <div className="entry-header">
          <h2>{title}</h2>
        </div>

        <div className="entry-meta">
          <span className="author-name">by {author}</span>
        </div>

        <div className="entry-description">
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export const News = () => (
  <div className="home-page-last-news">
    <div className="container">
      <div className="header">
        <div className="entry-title">
          <p>VRST 2019</p>
          <h2>Latest News</h2>
        </div>
      </div>

      <div className="home-page-last-news-wrap">
        <div className="row">
          {news.map((n, i) => (
            <NewsItem key={i} {...n} image={makeUrl(n.image)} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
