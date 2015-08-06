/* @flow */
require('./styles.css');

import React from 'react';

const SERVICES = [
  ['Product Strategy', 'internet-of-things', '/public/images/blogimg_all.png', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['UX Design', 'rapid-innovation', '/public/images/blogimg_all.png', 'Problems cannot be solved with the same thinking that created them. We give you fresh, technological ideas to help push the bounds of what is possible.'],
  ['Prototype', 'proof-of-concept', '/public/images/blogimg_all.png', 'You’ve got to show them something. Your boss, the executives -- they need more than your opinion. Cut meeting time in half with a working prototype.'],
  ['Development', 'engineering', '/public/images/blogimg_all.png', 'Knowing what to build can be more important than how you build it. Don’t waste a second solving the wrong problem.'],
  ['QA', 'production', '/public/images/blogimg_all.png', 'Development projects can often become bloated without an end in sight. We give you new functionality every three weeks, not once a year.'],
  ['Support', 'support', '/public/images/blogimg_all.png', 'We understand that your success goes well beyond launch day. Our dedicated support model lets you focus on the broader operation.'],
];

class Services extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {target: null};
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
  }

  handleSelectSegment(event: mixed): void {
    if (event) event.preventDefault();
    var target = event.target.closest('a').getAttribute('href').replace('#', '');
    this.setState({target});
  }

  render(): ReactElement {
    return (
      <div className="HomeServices">
        <ul className="HomeServices-list">
          {SERVICES.map(s => (
            <li ref={s[1]} 
                style={{backgroundImage: `url(${s[2]})`}}
                className={`HomeServices-item ${s[1] === this.state.target ? 'is-active' : ''}`} 
                key={s[0]}>
              <a className="HomeServices-link" href={`#${s[1]}`} onClick={this.handleSelectSegment}>
                <div className="HomeServices-overlay"></div>
                <div className="HomeServices-content">
                  <div className="HomeServices-title">{s[0]}</div>
                  <span className="HomeServices-description">{s[3]}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Services.propTypes = {};

Services.displayName = 'Services';

export default Services;
