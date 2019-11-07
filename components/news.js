import * as Reacxt from 'react';
import { makeUrl } from './common';

const news = [
  {
    title: 'Welcome Reception',
    date: ' 7/11/2019',
    author: 'Tomas Trescak',
    image: '/static/images/drinks.jpg',
    text: `The VRST 2019 Welcome Reception will be held on 12 November, commencing with early registration at 2:30pm. Network with delegates from around the world, see the developer showcase and experience some fine Australian cuisine.
    <center>
    <a href="https://www.eventbrite.com.au/e/vrst-welcome-reception-tickets-79984560975">REGISTER NOW!</a>
    </center>`
  },
  {
    title: 'Keynote by Aleissia Laidacker',
    date: ' 27/9/2019',
    author: 'Tomas Trescak',
    image: '/static/images/aleissia_wide.jpg',
    text: `We are very proud to announce a keynote by Aleissia Laidacker, director of developer experience 
  at Magic Leap. Also, due to unforeseen circumstances, Timoni will not be joining us at VRST. Aleissia has been voted as Top 30 People to Watch in Augmented Reality 2018.`
  },
  {
    title: 'Developer Showcase',
    date: ' 27/9/2019',
    author: 'Tomas Trescak',
    image: '/static/images/showcase.jpg',
    text: `We invite all start-up / indie / student developers who want to present their projects,  compete in our developer showcase, win some cool prizes and get feedback from experts. Deadline for submission is 1/11.`
  }
  // {
  //   title: 'Keynote by Timoni West from Unity 3D',
  //   date: ' 26/4/2019',
  //   author: 'Tomas Trescak',
  //   image: '/static/images/news/timoni.jpg',
  //   text: `Timoni West is the Director of XR Research at Unity, where she leads a team of cross-disciplinary artists and engineers exploring new interfaces for human-computer interaction. Currently, her team focuses on spatial computing: how we will live, work, and create in a world where digital objects and the real world live side-by-side. One of her team’s first tools, EditorXR, a tool for editing Unity projects directly in virtual reality, won SF Design Week’s first-ever Virtual Tech award in 2018.`
  // },
  // {
  //   title: 'Keynote by Professor Mark Billingurst from UNISA',
  //   date: ' 14/4/2019',
  //   author: 'Gilbert Zhuo',
  //   image: '/static/images/news/Mark-Billinghurst.png',
  //   text: `Mark Billinghurst is Professor of Human Computer Interaction at the University of South Australia in Adelaide, Australia.
  //   He earned a PhD in 2002 from the University of Washington and researches innovative computer interfaces that explore how virtual and real worlds can be merged, publishing over 300 papers in topics such as wearable computing, Augmented Reality and mobile interfaces. `
  // }
  // {
  //   title: 'Keynote by Mark Walsh, Pixar Animation Studios',
  //   date: '10/2/2019',
  //   author: 'Gilbert Zhuo',
  //   image: '/static/images/news/Mark-Walsh-News.jpg',
  //   text: `Mark Walsh is an 18 year veteran of Pixar Animation Studios. He directed the Toy Story short, PartySaurus Rex, supervised animation on Ratatouille and Finding Nemo, and contributed to nearly every project at the studio, including A Bug’s Life, Toy Story 2, Monsters Inc, The Incredibles, Presto, The Good Dinosaur, Cars 3, Up, and Toy Story 3 ...`
  // }
  // {
  //   title: "Website Launched!",
  //   date: "November 6, 2018",
  //   author: "Tomas Trescak",
  //   image: "/static/images/news/website.jpg",
  //   text: `While we are looking forward to VRST 2018 and SIGGRAPH Asia 2018 in Tokyo,
  //           we are also working hard to make your experience unique during the 25th VRST
  //           in Sydney, Australia. Today, we are launching our new website with
  //           information on the venue. Keynote announcements and the CFP are coming soon!`
  // }
];

export const NewsItem = ({ width, title, author, image, date, text }) => (
  <div className="col-12 col-lg-4">
    <figure className="featured-image">
      <img src={image} alt="Illustratory news image" />
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
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
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

        <div className="feedgrabbr_widget" id="fgid_b9e9d1b09b3c18185a947bf79" />
        <script>
          if (typeof (fg_widgets) === "undefined") fg_widgets = new Array();
          fg_widgets.push("fgid_b9e9d1b09b3c18185a947bf79");
        </script>
      </div>
    </div>
  </div>
);
