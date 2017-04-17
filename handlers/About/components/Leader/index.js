/** @flow */
require('./styles.css');

import React from 'react';
import lookup from 'lookup';
import {Link} from 'react-router';

var {PropTypes} = React;

class Leader extends React.Component {

  render(): ?ReactElement {
    var leader = this.props.leader;
    var index = this.props.index;
    var floatClass = index % 2 ? ' is-odd' : '';
    return (
      <li className="Leader">
       <div className={`Leader-image-container${floatClass}`}>
        <img className="Leader-image" src={lookup(leader, 'headShot.fields.file.url')} />
      </div>
      <div className={`Leader-meta ${floatClass}`}>
      <h3 className="Leader-name">{leader.firstName} {leader.lastName}</h3>
      <h4 className="Leader-title">{leader.title}</h4>
      <p className="Leader-description">{leader.description.slice(0, 700)}</p>
      </div>
      </li>
    );
  }
}

Leader.propTypes = {
  leader: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Leader;
