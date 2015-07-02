/** @flow */
import React from 'react';
import Hero from 'Hero';
import ServiceIntro from 'ServiceIntro';
import ServiceSection from 'ServiceSection';
import ServiceSectionOfPercentages from 'ServiceSectionOfPercentages';
import ServiceUnorderedListSection from 'ServiceUnorderedListSection';
import Typography from 'Typography';

class Support extends React.Component {
  render(): ReactElement {
    var service = 'support';
    var color = 'yellow';

    return (
      <div className="Support">
        <Hero color="yellow" image="/public/images/sputnick-engineer.png" title="Support" />
        <ServiceIntro color={color} service={service}>Support intro here.</ServiceIntro>
        <ServiceSectionOfPercentages
          color={color}
          items={[
            {percentage: 41, description: 'of software projects have higher-than expected maintenance costs.'},
            {percentage: 80, description: 'of software projects fail due to requirement misunderstanding.'},
          ]} />

        <ServiceUnorderedListSection
          title="We Help You"
          items={[
            {title: 'Share Progress with Confidence', description: 'While Gantt charts and status reports are important communication tools, we believe that the best way to convey progress is to show it. Product demos are held every three weeks to put context around the project plan. You have direct insight into our work in order to keep internal teams fully informed.'},
            {title: 'Balance Competing Business Drivers', description: 'We operate in fast-paced environments. A flexible product development process is necessary when cost, time and scope trade-offs inevitably arise. We refine our estimates at the end of each sprint so that you have the information necessary to prioritize upcoming activities.'},
            {title: 'Maintain Quality from Day One', description: 'All too often, quality assurance is an afterthought, which can lead to costly revisions. Our testers work alongside developers in order to minimize surprises later in the process. This ensures the final product aligns with requirements and provides a satisfying user experience.'},
          ]}
          color={color} />
      </div>
    );
  };
}

export default Support;



