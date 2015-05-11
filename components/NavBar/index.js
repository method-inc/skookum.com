/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';
var {PropTypes} = React;

class NavBar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="NavBar">
        <img className="NavBar-logo" src="/public/images/logo.svg" />
        <nav className="NavBar-nav">
          {this.props.items.map(n => (
            <Link className="NavBar-nav-link" to={n.pathName}>{n.text}</Link>
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
