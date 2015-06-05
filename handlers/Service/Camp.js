/** @flow */
require('./camp.css');

import React from 'react';
import Hero from 'Hero';
import ServiceIntro from 'ServiceIntro';
import ServiceSection from 'ServiceSection';
import Typography from 'Typography';

const SCHEDULE = [
  {title: 'Research', description: 'We explore the problem, market opportunity, business constraints, and success criteria.'},
  {title: 'Sketch', description: 'Design workshops surface a range of ideas and give context to potential solutions.'},
  {title: 'Prototype', description: 'We mockup a component of the full solution to give you a sense of what is possible.'},
  {title: 'Test', description: 'Stakeholders, customers and/or end-users give feedback on utility and ease-of-use.'},
  {title: 'Cheers', description: 'We provide a recommendation for next steps and pass around the I Heart Camp Koozies.'},
];

class Camp extends React.Component {
  render(): ReactElement {
    var service = 'innovation-camp';

    return (
      <div className="Service">
        <Hero color="yellow" title={service + ' Service'} />
        <ServiceIntro service={service}>Space Camp is a one week program to help propel innovative ideas forward. Nursing a technology wishlist? Ambitious goals but unsure how to get started? Lacking buy-in for a bigger initiative? Come see what we can do in a week. Our innovation SWAT team of software engineers, hardware hackers, product strategists and UX desigers can take you from concept to prototype in 5 days.</ServiceIntro>
        <ServiceSection style={{textAlign: 'center'}}>
          <Typography type={Typography.PRIMARY_SECTION_HEADER}>The Schedule</Typography>
          <ol className="Service-camp-list">
            {SCHEDULE.map((n, i) => (
              <li className="Service-camp-item">
                <img className="Service-camp-image" src={`/public/images/${n.title.toLowerCase()}.svg`} />
                <strong>Day {i + 1}</strong> <strong>{n.title}</strong>
                <p>{n.description}</p>
              </li>
            ))}
          </ol>
        </ServiceSection>

        <ServiceSection color="yellow" style={{textAlign: 'center'}}>
          <strong style={{display: 'block', fontSize: '1.875em', fontWeight: 'normal', marginBottom: '1rem'}}>Send your team to camp</strong>
          <p>Give us the rundown on your mission so that we can prepare the crew.</p>
          <span style={{marginRight: '1em'}}>start@skookum.com</span>
          <span>(704) 930-7444</span>
        </ServiceSection>
      </div>
    );
  };
}

export default Camp;

