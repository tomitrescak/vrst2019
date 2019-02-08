import * as React from "react";

const QnA = [
  {
    Question:
      "How do I communicate accessibility needs to VRST 2019 organisers?",
    Answers:
      "VRST values the diversity of our community, and aims to be an accessible and inclusive conference. Attendees are encouraged to mention any requests for accommodation upon registration for the conference. If you have any questions or concerns about accessibility, or any requests for accommodation (such as ASL translation, captioning, etc.), please contact the conference accessibility chairs at accessibility.2019@vrst.acm.org, and they will work with you to address your concerns. Note that some requests may require advance notice, so please submit accessibility requests as far in advance of the conference date as possible in order to give us adequate time to prepare."
  },
  {
    Question: "Who do I ask if my question is not answered here?",
    Answers:
      "For more detailed information about accessibility at the VRST 2019, please check the venue accessibility information page, phone the venue information desk at 1-800-268-8122 (toll-free) or 1-514-871-8122 (local), or email info@congresmtl.com. If there is a specific accessibility information you would like to see here, or if you wish to discuss any accessibility requirements, please contact our Accessibility Chairs by email: accessibility.2019@vrst.acm.org, and someone will respond to you shortly."
  },
  {
    Question: "When is the deadline for accessibility requests?",
    Answers:
      "The deadline for accessibility requests is Wednesday, April 18th. However, if you have any accessibility enquiries at this point, please feel free to contact our Accessibility Chairs, Erin, Robin, and Erin, by email: accessibility.2019@vrst.acm.org."
  },
  {
    Question: "Will the conference be accessible by wheelchair?",
    Answers:
      "Yes, the conference venue will be accessible by wheelchair. All Palais entrances are wheelchair accessible and feature access doors. To use their adapted services, the Palais recommends taxi drop-offs at 1001 Place Jean-Paul-Riopelle. There are several parking spots in the Viger parking lot that are reserved for individuals with handicap parking permits, which are accessible via Chenneville Street. A map of the conference space will be made available on the VRST 2019 website shortly. Maps of the venue can be found on the Palais website."
  },
  {
    Question:
      "What are expectations around inclusivity, diversity, and harassment at VRST 2019?",
    Answers:
      "We ask that all conference attendees respect individuals’ identities. Please use their stated names and pronouns. This year, this information is included right on attendees’ badges. If you’re not sure – ask! Please see the Diversity & Inclusion Statement that reflects our commitment to a welcoming and safe environment. Additionally, please review expectations stated in the ACM SIGCHI Policy on Harassment and Discrimination."
  },
  {
    Question: "Are children welcome at VRST 2019?",
    Answers:
      "VRST 2019 values that many attendees are parents and caregivers and provide various options to support attendance at VRST 2019 by attendees with families, including a child pass, on-site childcare, and a nursing room. The nursing room can be found in room 449 on Mezzanine 4. A key for the nursing room is available in the Conference Office, room 523. For more information about childcare options and child passes, please visit the child care nursing room page. For any further questions about accommodations for caregivers, please contact Jon Froehlich and Audrey Girouard, the VRST 2019 Family Chairs, at accessibility.2019@vrst.acm.org."
  },
  {
    Question: "Can I bring my guide dog?",
    Answers:
      "Yes, service animals are permitted within the Palais de Congrès. We remind all attendees that guide dogs are working animals, and ask that you refrain from petting, distracting, or otherwise preventing them from doing their job. Water stations can be found throughout the Palais, and we recommend attendees with service dogs bring water bowls to refill for their companions. Dogs may relieve themselves outside of the Palais. The Palais recommends going to Square Victoria, which is a three minute walk from the convention center. Square Victoria is located on the corner of Rue Saint Antione and Rue du Square Victoria."
  },
  {
    Question: "Will the conference be a smoke-free environment?",
    Answers:
      "The Palais des Congrès de Montréal is a non-smoking facility, as per City of Montreal bylaws. Smoking is permitted only within designated areas at the exterior of the Palais des Congrès de Montréal as permitted by law."
  },
  {
    Question: "What food service will be provided?",
    Answers:
      "During coffee breaks, attendees can expect light refreshments such as: coffee, tea, water, juice, pastries, fruits, nuts, and some of the special foods that Quebec has to offer, depending on the day. During receptions, a variety of options have been selected to accommodate the diverse dietary needs of the VRST community, and in consideration of dietary requirements indicated on registration forms."
  },
  {
    Question: "What is the conference space like?",
    Answers:
      "For the overall layout of the venue, please refer to this map of the conference space. Keep an eye on this website for specific  VRST 2019 maps that will show areas of the venue that are relevant to attendees. Print programs will contain copies of these maps."
  },
  {
    Question: "How do I get to the conference venue?",
    Answers:
      "The Palais has compiled a number of options to help you get to the venue via bus, car, metro (subway), on foot, and more, which is available on their website. The website also contains several options for reaching downtown Montreal from the airport via car, taxi, or public transit, which is about a 20-minute trip. The main entrance of the Palais is located at 1001 Place Jean-Paul-Riopelle."
  }
];

export const Faqs = () => (
  <>
    <div className="container ">
      {QnA.map(_QnA => (
        <div>
          <h1>{_QnA.Question}</h1>
          <h8>{_QnA.Answers}</h8>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  </>
);
