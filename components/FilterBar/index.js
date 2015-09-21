/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

var _renderedFilterBar = null;
var previousPosition = 0;
var atTop = true;

var filterScroll = () => {
  if (window.scrollY === 0 && !atTop && previousPosition > 300) {
    return;
  }
  atTop = false;
  if (window.scrollY === 0) {
    atTop = true;
  }
  previousPosition = window.scrollY;
};

class FilterBar extends Component {
  componentDidMount(): void {
    var scroller = this.refs.scroller.getDOMNode();
    var width = [...scroller.children].reduce((num, c) => num + c.clientWidth, 1);
    // if this ever needs to take a change it’s
    // number of children after first render, then refactor this
    // into state with a componentDidUpdate method to recalc childrens width
    scroller.style.width = width + 'px';
    scroller.style.minWidth = 0;
    _renderedFilterBar = this.refs.scroller.getDOMNode();
    window.addEventListener('scroll', filterScroll, false);
  }

  componentDidUnmount(): void {
    _renderedFilterBar = null;
    atTop = true;
    previousPosition = 0;
    window.removeEventListener('scroll', filterScroll);
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
  if (_renderedFilterBar) {

    window.scrollTo(0, previousPosition);
    var AppOffset = document.getElementsByClassName('AppBase')[0].offsetTop;

    if (screen.width < 768) {
      AppOffset = document.getElementsByClassName('Navigation-main')[0].scrollHeight * -1;
    }

    var targetY = _renderedFilterBar.offsetTop + AppOffset;
    var currentY = window.scrollY;
    var diff = currentY - targetY;

    if (diff !== 0) {
      var scrollAmount = Math.abs(diff) < 90 ? Math.ceil(Math.abs(diff) / 10) : 30;
      var scrollEnd = diff < 0 ? currentY + scrollAmount : currentY - scrollAmount;
      // previousPosition = scrollEnd;
      window.scrollTo(0, scrollEnd);
      setTimeout(FilterBar.scrollTo, 4);
    }
  }
});

export default FilterBar;
