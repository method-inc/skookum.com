/* @flow */
require('./styles.css');

import React from 'react';

import Button from 'Button';
import Hero from 'Hero';
import Icon from 'Icon';
import Typography from 'Typography';

const SERVICES = [
  ['IOT', 'internet-of-things', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Innovation Camp', 'innovation-camp', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Rapid Innovation', 'rapid-innovation', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Proof of Concept', 'proof-of-concept', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Engineering', 'engineering', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Production', 'production', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
  ['Support', 'support', 'Through interviews, joint ideation, storyboards and estimation, we give you an informed, fresh perspective to help you prioritize concepts for further investment.'],
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
    this.setState({target}, _ => {
      // TODO: sync this with the breakpoints in ./styles.css
      if (typeof matchMedia === 'function' && matchMedia('screen and (max-width: 600px').matches) {
        setTimeout(__ => this.refs[target].getDOMNode().scrollIntoView(true));
      }
    });
  }

  handleSelectSegment(event: mixed): void {
    if (event) event.preventDefault();
    var {target} = event;
    this.selectSegment(target.getAttribute('href').replace('#', ''));
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
                  <div><Icon icon={s[1]} /></div>
                  <div className="Services-title">Value</div>
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
