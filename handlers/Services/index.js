/* @flow */
require('./styles.css');

import React from 'react';

import Button from 'Button';
import Hero from 'Hero';
import Icon from 'Icon';
import Typography from 'Typography';

const SERVICES = [
  ['Internet Of Things', 'internet-of-things', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
//  ['Innovation Camp', 'innovation-camp', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Rapid Innovation', 'rapid-innovation', 'Problems cannot be solved with the same thinking that created them. We give you fresh, technological ideas to help push the bounds of what is possible.'],
  ['Proof of Concept', 'proof-of-concept', 'You’ve got to show them something. Your boss, the executives -- they need more than your opinion. Cut meeting time in half with a working prototype.'],
  ['Engineering', 'engineering', 'Knowing what to build can be more important than how you build it. Don’t waste a second solving the wrong problem.'],
  ['Production', 'production', 'Development projects can often become bloated without an end in sight. We give you new functionality every three weeks, not once a year.'],
  ['Support', 'support', 'We understand that your success goes well beyond launch day. Our dedicated support model lets you focus on the broader operation.'],
];

class Services extends React.Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {target: SERVICES[0][1]};
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
  }

  // TODO: move this hash to a query param so the server can render correctly
  componentDidMount(): void {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    var needle = null;
    SERVICES.some(s => s[1] === hash && (needle = s[1]));
    if (needle) this.selectSegment(needle);
  }

  selectSegment(target: string): void {
    this.setState({target});
  }

  handleSelectSegment(event: mixed): void {
    // TODO: sync this with the breakpoints in ./styles.css
    var segment = event.target.getAttribute('href').replace('#', '');
    if (typeof matchMedia === 'function' && matchMedia('screen and (max-width: 600px').matches) {
      window.location = `/services/${segment}`;
      return;
    }

    if (event) event.preventDefault();
    this.selectSegment(segment);
  }

  render(): ReactElement {
    return (
      <div className="Services">
        <Hero
          childrenPosition="after"
          color="black"
          title="Services"
          image="/public/images/hero-default-bg.png">
          <ul className="Services-list">
            {SERVICES.map(s => (
              <li ref={s[1]} className={`Services-item ${s[1] === this.state.target ? 'is-active' : ''}`} key={s[0]}>
                <a className="Services-link" href={`#${s[1]}`} onClick={this.handleSelectSegment}>{s[0]}</a>
                <div className="Services-item-panel">
                  <div className="Services-title">
                    <Icon style={{verticalAlign: 'middle', marginRight: '1em'}} icon={s[1]} />
                  </div>
                  <Typography type={Typography.DESCRIPTION_TEXT}>{s[2]}</Typography>
                  <Button type="light" to="service" params={{service: s[1]}}>Learn More</Button>
                </div>
              </li>
            ))}
          </ul>
        </Hero>
      </div>
    );
  }
}

Services.propTypes = {};

Services.displayName = 'Services';

export default Services;
