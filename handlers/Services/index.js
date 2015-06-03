/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';

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

    this.selectSegment = this.selectSegment.bind(this);
    this.state = {target: SERVICES[0][1]};
  }

  selectSegment(e: mixed): void {
    console.log(e.target.getAttribute('href'));
    this.setState({target: e.target.getAttribute('href').replace('#', '')});
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
              <li className={`Services-item ${s[1] === this.state.target ? 'is-active' : ''}`} key={s[0]}>
                <a className="Services-link" href={`#${s[1]}`} onClick={this.selectSegment}>{s[0]}</a>
                <div className="Services-item-panel">
                  <div><Icon icon={s[1]} /></div>
                  <div className="Services-title">Value</div>
                  <Typography type={Typography.DESCRIPTION_TEXT}>{s[2]}</Typography>
                  <Button type="secondary" to="services" params={{service: s[1]}}>Learn More</Button>
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
