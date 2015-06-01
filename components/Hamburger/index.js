require('./styles.css');

import React, {Component, PropTypes} from 'react';

class Hamburger extends Component {
  constructor(props: object, context: object) {
    super(props, context);

    this.state = {x: false};
    this.toggleX = this.toggleX.bind(this);
  }

  toggleX(e: any) {
    if (e) e.preventDefault();

    this.setState({x: !this.state.x});
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  }

  render(): ?ReactElement {
    var className = 'Hamburger';
    var {target} = this.props;
    var {x} = this.state;

    if (x) className = className + ' is-x';

    return (
      <a href={target} className={className} onClick={this.toggleX}>
        <div className="Hamburger-top" />
        <div className="Hamburger-middle" />
        <div className="Hamburger-bottom" />
      </a>
    );
  }
}

Hamburger.propTypes = {
  target: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  x: PropTypes.bool,
};

export default Hamburger;

