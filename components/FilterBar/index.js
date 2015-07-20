/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

var _renderedFilterBar = null;

class FilterBar extends Component {
  componentDidMount(): void {
    var scroller = this.refs.scroller.getDOMNode();
    var width = [...scroller.children].reduce((num, c) => num + c.clientWidth, 0) + 50;
    // if this ever needs to take a change it’s
    // number of children after first render, then refactor this
    // into state with a componentDidUpdate method to recalc childrens width
    scroller.style.width = width + 'px';
    scroller.style.minWidth = 0;
    _renderedFilterBar = this.refs.scroller.getDOMNode();
  }

  componentDidUnmount(): void {
    _renderedFilterBar = null;
  }

  render(): ReactElement {
    return (
      <div className="FilterBar">
        <div ref="scroller" className="FilterBar-content">
          {this.props.items.map(n => (
            <Link
              onClick={this.props.onClick || FilterBar.scrollTo}
              key={n.text}
              className="FilterBar-link"
              activeClassName="is-active"
              {...n}>
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

FilterBar.scrollTo = _ => setTimeout(__ => {
  if (_renderedFilterBar) _renderedFilterBar.scrollIntoView(true);
});

export default FilterBar;
