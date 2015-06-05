/** @flow */

import React from 'react';
import Hero from 'Hero';
import ServiceIntro from 'ServiceIntro';
import ServiceSection from 'ServiceSection';
import Typography from 'Typography';

const SCHEDULE = [
  {title: 'Research', description: 'We explore the problem, market opportunity, business constraints, and success criteria.'},
  {title: 'Sketch', description: 'Design workshops surface a range of ideas and give context to potential solutions.'},
  {title: 'Prototype', description: 'We mockup a component of the full solution to give you a sense of what is possible.'},
  {title: 'Test', description: 'STakeholders, customers and/or end-users give feedback on utility and ease-of-use.'},
  {title: 'Cheers', description: 'We provide a recommendation for next steps and pass around the I Heart Camp Koozies.'},
];

class Camp extends React.Component {
  render(): ReactElement {
    var service = 'innovation-camp';

    return (
      <div className="Service">
        <Hero color="yellow" title={service + ' Service'} />
        <ServiceIntro service={service}>Innovation Camp is a one week program to help propel innovative ideas forward. Nursing a technology wishlist? Ambitious goals but unsure how to get started? Lacking buy-in for a bigger initiative? Come see what we can do in a week. Our innovation SQAT team of software engineers, hardware hackers, product strategists and UX designers can take you from concept to prototype in 5 days.</ServiceIntro>
        <ServiceSection>
          <Typography type={Typography.PRIMARY_SECTION_HEADER}>The Schedule</Typography>
          <ol>
            {SCHEDULE.map((n, i) => (
              <li>
                <img src={`/public/images/camp-${i}.svg`} />
                <strong>Day {i}<br />{n.title}</strong>
                <p>{n.description}</p>
              </li>
            ))}
          </ol>
        </ServiceSection>

        <ServiceSection color="yellow">
          <strong>Send your team to camp</strong>
          <p>Give us the rundown on your mission so that we can prepare the crew.</p>
          <span>start@skookum.com</span>
          <span>(704) 930-7444</span>
        </ServiceSection>
      </div>
    );
  };
}

export default Camp;

