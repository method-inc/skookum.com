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
        <ServiceIntro color={color} service={service}>It is a reality that most deployed technology is going to need ongoing, ever-watchful eyes. Our support team will keepy your maintenance issues organized, manage your historical bug/feature tracking, and assist with all technical questions and issues that are beyond your expertise. Our offering is organized so you have access to the right tools, information, and people at SKOOKUM® to be successful. </ServiceIntro>
        <ServiceSectionOfPercentages
          color={color}
          items={[
            {percentage: 41, description: 'of software projects have higher-than expected maintenance costs.'},
            {percentage: 51, description: 'of software projects fail due to requirement misunderstanding.'},
          ]} />

        <ServiceUnorderedListSection
          title="We Help You"
          items={[
            {title: 'Keep your focus on the business', description: 'While Gantt charts and status reports are important communication tools, we believe that the best way to convey progress is to show it. Product demos are held every three weeks to put context around the project plan. You have direct insight into our work in order to keep internal teams fully informed.'},
            {title: 'RESOLVE ISSUES IN A TIMELY MANNER', description: 'We operate in fast-paced environments. A flexible product development process is necessary when cost, time and scope trade-offs inevitably arise. We refine our estimates at the end of each sprint so that you have the information necessary to prioritize upcoming activities.'},
            {title: 'EVOLVE THE PRODUCT WITH PRECISION', description: 'All too often, quality assurance is an afterthought, which can lead to costly revisions. Our testers work alongside developers in order to minimize surprises later in the process. This ensures the final product aligns with requirements and provides a satisfying user experience.'},
          ]}
          color={color} />
      </div>
    );
  };
}

export default Support;
