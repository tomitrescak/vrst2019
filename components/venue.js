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
      Hotels
    </h4>

    <p>
      <strong>
        <h5>Novotel Sydney Parramatta</h5>
      </strong>
      <br />
      10% off the best available rate from the 12th-15th November for all VRST delegates.
      <br />
      <br />
      Please email or call the hotel directly and mention that you are a part of the VRST conference
      to receive the discount.
      <br />
      <br />
      Email: H8787-re@accor.com <br />
      Phone: 61 2 9630 4999
      <br />
    </p>

    <p>
      <strong>
        <h5>Mercure Sydney Parramatta</h5>
      </strong>
      <br />
      We would like to offer a static rate of $169.00 for Standard Queen and Standard Twin room at
      the hotel.
      <br />
      Pre - paid rate offer.
      <br />
      Cut off for early bird special rate 31st October 2019.
      <br />
      <br />
      Subject to this room type still becoming available at time of guest requirement. Once sold all
      standard rooms we will still offer 10% off.
      <br />
      <br />
      Email: H2123@accor.com <br />
      Phone: 61 2 8836 1000
      <br />
    </p>

    <h4
      style={{
        padding: '2em',
        color: 'white'
      }}
    >
      Venue and Transportation
    </h4>

    <div>Western Sydney University - Parramatta City Campus (169 Macquarie Street Parramatta)</div>

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
