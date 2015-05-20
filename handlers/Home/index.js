import React from 'react';
import {Resolver} from 'react-resolver';
import {Link} from 'react-router';
import Hero from 'Hero';

var cn = s => `Home-${s}`;

var LOCATIONS = [
  { name: 'CLT',
    addr: '201 S. Tryon St. 15th Floor',
    location: 'Charlotte, NC 28202',
    phone: '345.123.2345',
  },
  { name: 'DEN',
    addr: '707 17th St Suite 3275',
    location: 'Denver, CO 80202',
    phone: '254.123.1643',
  },
];

class Home extends React.Component {
  render(): ?ReactElement {
    console.log(this.props);
    return (
      <div className="Home">
        <Hero title="Skookum" />
        <div className="Home-content">
          <div className={cn('intro')}>
            <div className={cn('orange')}>We create what’s next.</div>
            <p className={cn('text')}>Skookum ® is a maker shop that helps companies transform their businesses with the Internet of Things (IoT) and Machine-to-Machine(M2M) software. For our clients, this means new revenue streams, substantial efficiency gains, and a sustainable competitive advantage.</p>
          </div>
          <div className={cn('study')}>
            <strong className={cn('study-title')}>{this.props.caseStudy.slug}</strong>
            <p className={cn('study-summary')}>{this.props.caseStudy.summary}</p>
            <img className={cn('study-image')} src={this.props.caseStudy.image.fields.file.url} />
          </div>
          <div className={cn('clients')}>
            {this.props.clients.map(n => (
              <img className={cn('clients-image')} title={n.name} src={n.image.fields.file.url} />
            ))}
          </div>
          <blockquote className={cn('quote')}>
            <p className={cn('quote-quote')}>Man and his quest for knowledge and progress is determined and can not be deterred.</p>
            <cite className={cn('quote-cite')}>JFK</cite>
          </blockquote>
          {this.props.featured.slice(0, 3).map(f => (
            <Link key={f.slug} to="article" params={{slug: f.slug}} className="Home-featured">
              <span className="Home-featured-title">{f.title}</span>
              <span className="Home-featured-author">{f.author.fields.name}</span>
              {f.poster.fields && (
                <img src={f.poster.fields.file.url + '?w=400'} className="Home-featured-image" />
              )}
            </Link>
          ))}
        </div>
        <div>
          {LOCATIONS.map(n => (
            <div className={cn('location')}>
              <div className={cn('location-name')}>{n.name}</div>
              <div className={cn('location-addr')}>{n.addr}</div>
              <div className={cn('location-location')}>{n.location}</div>
              <div className={cn('location-phone')}>{n.phone}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  caseStudy: React.PropTypes.object.isRequired,
};

Home.displayName = 'Home';

export default Resolver.createContainer(Home, {
  resolve: {
    caseStudy() {
      return fetch(
        `http://localhost:4444/api/contentful?content_type=case_study&limit=1`
      ).then(n => n.json()).then(n => n[0]);
    },

    clients() {
      return fetch(
        `http://localhost:4444/api/contentful?content_type=client&limit=8`
      ).then(n => n.json());
    },

    featured() {
      // TODO: cache this
      return fetch(
        `http://localhost:4444/api/contentful/featured`
      ).then(n => n.json());
    },
  },
});
