/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class NavBar extends React.Component {
  constructor(props: Object, context: Object) {
    super(props, context);

    this.state = {showNav: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation(e: any) {
    if (e) e.preventDefault();
    this.setState({showNav: !this.state.showNav});
  }

  render(): ?ReactElement {
    return (
      <div className="NavBar">
        <Link to="home"><img className="NavBar-logo" src="/public/images/logo.svg" /></Link>
        <a onClick={this.toggleNavigation} className="NavBar-menu" href="#navigation" ariaLabel="Navigation">Menu</a>
        <nav id="navigation" className={`NavBar-nav ${this.state.showNav ? 'is-visible' : ''}`}>
          {this.props.items.map(n => (
            <Link className="NavBar-nav-link" key={n.pathName} to={n.pathName}>{n.text}</Link>
          ))}
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  items: PropTypes.array,
};

NavBar.defaultProps = {
  items: [
    {pathName: 'services', text: 'Services'},
    {pathName: 'case-studies', text: 'Case Studies'},
    {pathName: 'events', text: 'Events'},
    {pathName: 'blog', text: 'Blog'},
    {pathName: 'contact', text: 'Contact'},
  ]
};

export default NavBar;
