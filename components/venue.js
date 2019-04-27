import * as Reacxt from 'react';
import { makeUrl } from './common';
import { VenueDetail } from './venue_detail';

export const Venue = () => (
  <div style={{ textAlign: 'center', background: '#141e21', marginTop: '40px' }}>
    <h4
      id="venue"
      style={{
        padding: '2em',
        color: 'white'
      }}
    >
      Venue and Transportation
    </h4>

    <div>Western Sydney University - Parramatta City Campus (169 Macquarie Street Parramatta)</div>

    <p>
      <strong>Novotel Sydney Parramatta</strong>
      <br />
      Reservations: H8787-re@accor.com Phone: 61 2 9630 4999
    </p>
    <p>
      <strong>Mercure Sydney Parramatta</strong>
      <br />
      Reservations: H2123@accor.com Phone: 61 2 8836 1000
    </p>
    <p>
      <iframe
        style={{ border: '0px' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8642706736314!2d151.0034829156518!3d-33.81581558067088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31f48a89277%3A0x783dcbdef0b3056f!2s1+PSQ+Western+Sydney+University!5e0!3m2!1sen!2sau!4v1525048692331"
        width="800"
        height="350"
        frameBorder="0"
        allowFullScreen="allowFullScreen"
        style={{ padding: '2em' }}
      />
    </p>

    <VenueDetail />
  </div>
);
export default Venue;
