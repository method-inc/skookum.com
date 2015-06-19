/** @flow */
import React from 'react';
import Hero from 'Hero';
import ServiceIntro from 'ServiceIntro';
import ServiceSection from 'ServiceSection';
import ServiceSectionOfPercentages from 'ServiceSectionOfPercentages';
import ServiceUnorderedListSection from 'ServiceUnorderedListSection';
import Typography from 'Typography';

class InternetOfThings extends React.Component {
  render(): ReactElement {
    var service = 'internet-of-things';
    var {color} = this.props;

    return (
      <div className="Service">
        <Hero color={color} title="Internet Of Things" />
        <ServiceIntro color={color} service={service}>TODO: we need Internet of Things content</ServiceIntro>
        <ServiceSectionOfPercentages
          color={color}
          items={[
            {percentage: 41, description: 'of custom software initiatives fail to deliver the expected business value.'},
            {percentage: 80, description: 'of budgets are consumed fixing self-inflicted problems.'},
          ]} />

        <ServiceUnorderedListSection
          title="We Help You"
          items={[
            {title: 'Accelerate Value Generation', description: 'Product development involves the prioritization of limitless options. Without a clear roadmap, scope creep and feature bloat become the enemy of progress. Of the hundreds of things you could do, we’ll pinpoint the subset of features that drive the most value, before coding begins.'},
            {title: 'Control Total Cost of Ownership', description: 'Digital products require maintenance, upgrades, and support. The more complex a product is, the more expensive it is to own. These often hidden costs can escalate quickly. We provide guidance for what you need and not a line of code more, leaving less to break and less to maintain.'},
            {title: 'Avoid Technical Lock-in', description: 'Your ability to adapt is paramount in today’s dynamic, digital climate. We have no proprietary platforms to sell. We find the right technology for the job, implement component-driven architectures, and utilize open source software. We plan for extensibility from the beginning so that you can pivot. Fast.'},
          ]}
          color={color} />

        <ServiceSection color={color}>
          <blockquote>
            <p>“If I had an hour to solve a problem, I’d spend 55 minutes thinking about the problem and 5 minutes thinking about solutions”</p>
            <cite>Albert Einstein</cite>
          </blockquote>
        </ServiceSection>
      </div>
    );
  };
}

export default InternetOfThings;

