import * as Reacxt from "react";
import { makeUrl } from "./common";

export const Venue = () => (
  <div style={{ textAlign: "center", background: "#282828" }}>
    <h4
      style={{
        padding: "2em",
        color: "white"
      }}
    >
      Venue and Transportation
    </h4>
    {/*
    For the first time in its history the conference will be hosted in
    Australia. The city of Sydney is the cultural, historic and business centre
    of the country and will be home for VRST 2019. The conference will be held
    in Western Sydney University’s new{" "}
    <a href="https://www.westernsydney.edu.au/campuses_structure/cas/campuses/parramattacity/one_parramatta_square">
      Parramatta City Campus (1PSQ)
    </a>
    in the <a href="http://www.discoverparramatta.com/">Parramatta</a> CBD.
    <div style={{ textAlign: "center", margin: "40px 0px" }} className="figure">
      <iframe
        src="https://www.youtube.com/embed/cW3DTJHFxpc"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen="allowfullscreen"
      />
      <div>
        Courtesy of{" "}
        <a href="https://www.youtube.com/watch?v=cW3DTJHFxpc">
          Filippo Rivetti @ Youtube
        </a>
      </div>
    </div>
    <p>
      This flagship 10-storey campus is located close to public transport,
      including trains, ferries and buses and is easily accessible from Sydney
      CBD. Parramatta is the historic heart of Sydney's west that features
      beautiful parks and colonial sites as well as world-class food, arts and
      entertainment.
    </p>
    <div style={{ textAlign: "center", margin: "40px 0px" }} className="figure">
      <img
        className="size-full wp-image-593"
        src="http://iva2018.westernsydney.edu.au/wp-content/uploads/2018/04/One-Parramatta.jpg"
        alt=""
        width="600"
        height="521"
      />
      
    </div>
    <p>
      <strong>Travel</strong>: Sydney Kingsford Smith is a major international
      airport. Return airfares (Qantas) from Los Angeles in November 2019 are
      around USD 1000 and from Frankfurt: around EUR 1100. Parramatta CBD is
      easily accessible by train from the International Airport. Travel time is
      45 minutes and current cost is AUD 18. There is a direct train from the
      Parramatta Station (5 min walk from the venue) that goes to the Sydney
      Central Station. The train ride takes 25 minutes. There are public ferries
      (boats) that travel directly from Parramatta to the Sydney Opera House.
      You will need to purchase an Opal Card for travel on public transport
      whilst here.
    </p>
    <p>
      <strong>Accommodation: </strong>
      Parramatta CBD is a large business centre with many hotels around. The
      conference organisers can secure conference rates (10% discount) with the
      following hotels: Novotel Sydney Parramatta and Mercure Sydney Parramatta.
      These hotels are located at walking distance to the venue. Prices for
      November 2019 range from AUD 180 to AUD 260. Another alternative is to use
      Western Sydney University Village, where accommodation is available
      starting from AUD 80. A free shuttle bus regularly travels from the
      University Village to the conference venue.
      </p>
   */}
    <div>
      Western Sydney University - Parramatta City Campus (169 Macquarie Street
      Parramatta)
    </div>

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
        style={{ border: "0px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.8642706736314!2d151.0034829156518!3d-33.81581558067088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31f48a89277%3A0x783dcbdef0b3056f!2s1+PSQ+Western+Sydney+University!5e0!3m2!1sen!2sau!4v1525048692331"
        width="800"
        height="350"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        style={{ padding: "2em" }}
      />
    </p>
  </div>
);
export default Venue;
