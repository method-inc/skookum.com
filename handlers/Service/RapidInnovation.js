/** @flow */
import React from 'react';
import Hero from 'Hero';
import ServiceIntro from 'ServiceIntro';
import ServiceSection from 'ServiceSection';
import ServiceSectionOfPercentages from 'ServiceSectionOfPercentages';
import ServiceUnorderedListSection from 'ServiceUnorderedListSection';
import Typography from 'Typography';

class RapidInnovation extends React.Component {
  render(): ReactElement {
    var service = 'rapid-innovation';
    var color = 'yellow';

    return (
      <div className="Service">
        <Hero color={color} title="Rapid Innovation" />

        <div className="InnerMax">
          <ServiceIntro color={color} service={service}>All you need is an idea, and sometimes not even that. If you have an inkling that your business could run better, be more efficient, generate more profits, or make a competitive statement with modern technology, we can handle the rest. Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritized concepts for further investment.</ServiceIntro>
        </div>
        <ServiceSectionOfPercentages
          color={color}
          items={[
            {percentage: 93, description: 'of enterprise leaders see long-term success dependent on innovation.'},
            {percentage: 80, description: 'of enterprise leaders say their innovation strategy is competitively failing.'},
          ]} />

        <ServiceUnorderedListSection
          title="We Help You"
          items={[
            {title: 'Find your blindspot', description: 'The opportunities you don’t seize are the ones you can’t see because you are too close. Breakthrough moments are often buried well within the details of your day-to-day. We uncover a complete view of viable investment options so that you can take that next step, confidently.'},
            {title: 'Understand what is possible', description: 'While innovation can be exciting and ambitious, ideas that cannot be delivered effectively may represent expensive pitfalls. We blend broad experience in leading edge technologies with deep expertise in implementing enterprise-grade solutions. Our recommendations can be made real.'},
            {title: 'Inspire a Vision', description: 'Selling new ideas through an established organization is challenging. While innovation is riddled with risk, you know that the consequence of inaction may represent the bigger liability. We help quantify the value of each opportunity and arm you with the right creative to tell your story.'},
          ]}
          color={color} />
        <ServiceUnorderedListSection
          title="Sample Innovation Projects"
          items={[
            'A large CPG looks to reinvent couponing in an outdated point-of-sale environment.',
            'A national movie chain wants to increase revenue without raising ticket prices.',
            'An automative pioneer explores the viability of using cell phones to control cars.',
          ]}
          color={color} />
      </div>
    );
  };
}

export default RapidInnovation;

