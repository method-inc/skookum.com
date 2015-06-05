/** @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import Icon from 'Icon';
import Typography from 'Typography';

class Service extends React.Component {
  render(): ReactElement {
    var {service} = this.props.params;

    return (
      <div className="Service">
        <Hero color="yellow" title={service + ' Service'} />
        <section className="Service-intro">
          <Icon icon={service} />
          <Typography type={Typography.DESCRIPTION_TEXT}>All you need is an idea, and sometimes not even that. If you have an inkling that your business could run better, be more efficient, generate more profits, or make a competitive statement with modern technology, we can handle the rest. Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritized concepts for further investment.</Typography>
        </section>
        <section className="Service-stats Service-section">
          <p className="Service-stat">
            <strong className="Service-percentage">93%</strong>
            <span className="Service-copy">of enterprise leaders see long-term success dependent on innovation.</span>
          </p>
          <p className="Service-stat">
            <strong className="Service-percentage">80%</strong>
            <span className="Service-copy">of enterprise leaders say their innovation strategy is competitively failing.</span>
          </p>
        </section>
        <section className="Service-help Service-section">
          <Typography type={Typography.PAGE_HEADER}>We Help You</Typography>
          <ul className="Service-help-list">
            <li className="Service-help-item">
              <Typography type={Typography.SECONDARY_SECTION_HEADER}>Find your blindspot</Typography>
              <p>The opportunities you don’t seize are the ones you can’t see because you are too close. Breakthrough moments are often buried well within the details of your day-to-day. We uncover a complete view of viable investment options so that you can take that next step, confidently.</p>
            </li>
            <li className="Service-help-item">
              <Typography type={Typography.SECONDARY_SECTION_HEADER}>Understand what is possible</Typography>
              <p>While innovation can be exciting and ambitious, ideas that cannot be delivered effectively may represent expensive pitfalls. We blend broad experience in leading edge technologies with deep expertise in implementing enterprise-grade solutions. Our recommendations can be made real.</p>
            </li>
            <li className="Service-help-item">
              <Typography type={Typography.SECONDARY_SECTION_HEADER}>Inspire a Vision</Typography>
              <p>Selling new ideas through an established organization is challenging. While innovation is riddled with risk, you know that the consequence of inaction may represent the bigger liability. We help quantify the value of each opportunity and arm you with the right creative to tell your story.</p>
            </li>
          </ul>
        </section>
        <section className="Service-section Service-sample">
          <Typography type={Typography.PAGE_HEADER}>Sample Innovation Projects</Typography>
          <ul className="Service-sample-list">
            <li className="Service-sample-item">A large CPG looks to reinvent couponing in an outdated point-of-sale environment.</li>
            <li className="Service-sample-item">A national movie chain wants to increase revenue without raising ticket prices.</li>
            <li className="Service-sample-item">An automative pioneer explores the viability of using cell phones to control cars. </li>
          </ul>
        </section>
      </div>
    );
  }
}

Service.propTypes = {};

Service.displayName = 'Service';

export default Service;
