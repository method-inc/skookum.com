/** @flow */
require('./styles.css');

import React, {Component, PropTypes} from 'react';
import Icon from 'Icon';
import Typography from 'Typography';

class ServiceIntro extends Component {
  render(): ReactElement {
    var {service, children} = this.props;
    console.log(this.props);

    return (
      <section className="ServiceIntro">
        <Icon icon={service} />
        <Typography type={Typography.DESCRIPTION_TEXT}>{children}</Typography>
      </section>
    );
  }
}

ServiceIntro.propTypes = {
  service: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default ServiceIntro;

