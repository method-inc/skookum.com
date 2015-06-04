/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class FilterBar extends Component {
  componentDidMount() {
    var scroller = this.refs.scroller.getDOMNode();
    var width = [...scroller.children].reduce((num, c) => num + c.clientWidth, 0);
    // if this ever needs to take a change it’s
    // number of children after first render, then refactor this
    // into state with a componentDidUpdate method to recalc childrens width
    scroller.style.width = width + 'px';
    scroller.style.minWidth = 0;
  }

  render(): ?ReactElement {
    return (
      <div className="FilterBar">
        <div ref="scroller" className="FilterBar-content">
          {this.props.items.map(n => (
            <Link key={n.text} to={n.to} params={n.params} className="FilterBar-link" activeClassName="is-active">
              {n.text}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

FilterBar.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FilterBar;
