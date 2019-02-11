import * as React from 'react';

const QnA = [
  {
    Question: 'How do I communicate accessibility needs to VRST 2019 organisers?',
    Answers:
      'VRST values the diversity of our community, and aims to be an accessible and inclusive conference. Attendees are encouraged to mention any requests for accommodation upon registration for the conference. If you have any questions or concerns about accessibility, or any requests for accommodation (such as ASL translation, captioning, etc.), please contact the conference accessibility chairs at accessibility.2019@vrst.acm.org, and they will work with you to address your concerns. Note that some requests may require advance notice, so please submit accessibility requests as far in advance of the conference date as possible in order to give us adequate time to prepare.'
  },
  {
    Question: 'Who do I ask if my question is not answered here?',
    Answers: `For more detailed information about accessibility at the VRST 2019, please check the venue accessibility information page, phone the venue information desk at 1-800-268-8122 (toll-free) or check out their <a href="https://www.westernsydney.edu.au/campuses_structure/cas/campuses/parramattacity/one_parramatta_square">web page</a>, or email accessibility.2019@vrst.acm.org. If there is a specific accessibility information you would like to see here, or if you wish to discuss any accessibility requirements, please contact our Accessibility Chairs by email: accessibility.2019@vrst.acm.org, and someone will respond to you shortly.`
  },
  {
    Question: 'When is the deadline for accessibility requests?',
    Answers:
      'The deadline for accessibility requests is November 5th. However, if you have any accessibility enquiries at this point, please feel free to contact our Accessibility Chairs by email: accessibility.2019@vrst.acm.org.'
  },
  {
    Question: 'Will the conference be accessible by wheelchair?',
    Answers: `Yes, the conference venue will be accessible by wheelchair. All venue entrances are wheelchair accessible and feature access doors. There is no parking available at the venue, but a paid public parking is available 300 metres from the venue entry on <a href="https://goo.gl/maps/2yvBriMgwhE2">Macquarie stree</a> with slots reserved for individuals with handicap parking permits. A map of the conference space will be made available on the VRST 2019 website shortly. Maps of the venue can be found on the <a href="https://www.westernsydney.edu.au/campuses_structure/cas/campuses/parramattacity/one_parramatta_square">venue web page</a>.`
  },
  {
    Question: 'What are expectations around inclusivity, diversity, and harassment at VRST 2019?',
    Answers:
      'We ask that all conference attendees respect individuals’ identities. Please use their stated names and pronouns. This year, this information is included right on attendees’ badges. If you’re not sure – ask! Please see the Diversity & Inclusion Statement that reflects our commitment to a welcoming and safe environment. Additionally, please review expectations stated in the ACM SIGCHI Policy on Harassment and Discrimination.'
  },
  {
    Question: 'Are children welcome at VRST 2019?',
    Answers:
      'VRST 2019 values that many attendees are parents, yet due to the academic nature of the talks we discourage parents to bring their children to the conference. There are no facilities for children available at the venue.'
  },
  {
    Question: 'Can I bring my guide dog?',
    Answers:
      'Yes, service animals are permitted within the venue. We remind all attendees that guide dogs are working animals, and ask that you refrain from petting, distracting, or otherwise preventing them from doing their job. Water stations can be found throughout the venue, and we recommend attendees with service dogs bring water bowls to refill for their companions. Dogs may relieve themselves outside of the venue. The feces need to be picked up and disposed at designated locations.'
  },
  {
    Question: 'Will the conference be a smoke-free environment?',
    Answers:
      'The venue is a non-smoking facility, as per City of Parramatta bylaws. Smoking is permitted only within designated areas at the exterior of the venue as permitted by law.'
  },
  {
    Question: 'What food service will be provided?',
    Answers:
      'During coffee breaks, attendees can expect light refreshments such as: coffee, tea, water, juice, pastries, fruits, nuts, and some of the special foods that Quebec has to offer, depending on the day. During receptions, a variety of options have been selected to accommodate the diverse dietary needs of the VRST community, and in consideration of dietary requirements indicated on registration forms.'
  },
  {
    Question: 'What is the conference space like?',
    Answers:
      'For the overall layout of the venue, please refer to this map of the conference space. Keep an eye on this website for specific  VRST 2019 maps that will show areas of the venue that are relevant to attendees. Print programs will contain copies of these maps.'
  },
  {
    Question: 'How do I get to the conference venue?',
    Answers:
      'The venue has compiled a number of options to help you get to the venue via bus, car, metro (subway), on foot, and more, which is available on their website. The website also contains several options for reaching downtown Parramatta or Sydney from the airport via car, taxi, or public transit, which is about a 40-minute trip. The main entrance of the venue is located at 169 Macquarie St, Parramatta, NSW 2150.'
  }
];

export const Faqs = () => (
  <>
    <div className="container ">
      {QnA.map(_QnA => (
        <div>
          <h2>{_QnA.Question}</h2>
          <div dangerouslySetInnerHTML={{ __html: _QnA.Answers }} />
          <br />
          <br />
        </div>
      ))}
    </div>
  </>
);
