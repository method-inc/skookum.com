/* @flow */
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import api from 'api';
import lookup from 'lookup';
import markdown from 'markdown';
import {Link} from 'react-router';
var {PropTypes} = React;

class Profile extends React.Component {
  render(): ?ReactElement {
    var leadersInfo = this.props.leadersInfo;
    var params = this.context.router.getCurrentParams();
    var leader = leadersInfo.find(n => n.slug === params.slug);
    var team = leadersInfo.filter(n => n.slug !== params.slug);

    return (
      <div className="Profile">
        <div className="Profile-header">
          <h1 className="Profile-name">{leader.firstName} {leader.lastName}</h1>
          <h2 className="Profile-title">{leader.title}</h2>
        </div>
        <div className="Profile-actionshot" style={{backgroundImage: `url(${lookup(leader, 'actionShot.fields.file.url')})`}}/>
        <div className="Profile-wrapper">
          <div className="Profile-about">
            <h2 className="Profile-name">About {leader.firstName}</h2>
            <div className="Profile-description" dangerouslySetInnerHTML={{__html: markdown(leader.description)}}/>
            <ul className="Profile-links">
              {!!leader.linkedinLink && <li className="Profile-link"><a href={leader.linkedinLink} target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>}
              {!!leader.twitterLink && <li className="Profile-link"><a href={leader.twitterLink} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>}
              {!!leader.mediumLink && <li className="Profile-link"><a href={leader.mediumLink} target="_blank"><i className="fa fa-medium" aria-hidden="true"></i></a></li>}
            </ul>
          </div>
          <div className="Profile-thoughts">
            <h3 className="Profile-thoughts-header">Thoughts</h3>
            <ul className="Profile-thoughts-list">
              {leader.articles.map(n =>
                <li className="Profile-thoughts-item">
                  <h4 className="Profile-thought-title"><a href={n.fields.link} target="_blank">{n.fields.title}</a></h4>
                  <p className="Profile-thought-summary">{n.fields.summary}</p>
                  <hr className="Profile-thought-divider"/>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="Profile-exec-team">
          <h2 className="Profile-name">Meet more of our team</h2>
          <ul className="Profile-team-list">
            {team.map(n => 
              <li className="Profile-team-item" style={{width: `${100/team.length}%`}}>
                <Link to="profile" params={{slug: n.slug}}>
                  <img className="Profile-image" src={lookup(n, 'headShot.fields.file.url')} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

Profile.contextTypes = {
  router: PropTypes.func.isRequired,
};

Profile.displayName = 'Profile';

export default Resolver.createContainer(Profile, {
  resolve: {
    leadersInfo() {
      return api(`contentful/leaders`);
    },
  },
});


