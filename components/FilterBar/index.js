/** @flow */

require('./styles.css');

import React from 'react';
import {Link} from 'react-router';

var {PropTypes} = React;

class FilterBar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="FilterBar">
        {this.props.items.map(n => (
          <Link key={n.text} to={n.to} params={n.params} className="FilterBar-link" activeClassName="is-active">
            {n.text}
          </Link>
        ))}
      </div>
    );
  }
}

FilterBar.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FilterBar;
