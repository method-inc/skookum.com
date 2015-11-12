require('./styles.css');

import React, {PropTypes} from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import api from 'api';
import ContactForm from 'ContactForm';
import {Link} from 'react-router';
import Logo from 'Logo';
import Button from 'Button';

class Landing extends React.Component {

  constructor(props: mixed, context: mixed): void {
    super(props, context);
    this.scrollToElement = this.scrollToElement.bind(this);
  }

  scrollToElement() {
    var node = this.refs.contact.getDOMNode();
    var targetY = node.offsetTop;
    var currentY = window.scrollY;
    var diff = currentY - targetY;
    var atBottom = window.innerHeight + currentY >= document.body.offsetHeight;
    if (diff !== 0 && !atBottom) {
      var scrollAmount = Math.abs(diff) < 90 ? Math.ceil(Math.abs(diff) / 20) : 70;
      var scrollEnd = diff < 0 ? currentY + scrollAmount : currentY - scrollAmount;
      window.scrollTo(0, scrollEnd);
      setTimeout(()=>(this.scrollToElement(node)), 3);
    }
  }

  parseStats(stats) {
    var statsObject = {leftStats: [], rightStats: []};

    for (var i = 0; i < stats.length; i++) {
      if (i < stats.length / 2) {
        statsObject.leftStats.push(stats[i]);
      } else {
        statsObject.rightStats.push(stats[i]);
      }
    }
    return statsObject;
  }
  render(): ?ReactElement {
    var {pageData, clients} = this.props;
    pageData = pageData[0];
    var {leftStats, rightStats} = this.parseStats(pageData.stats);

    return (
      <div className="Landing">
        <Hero
          color="black"
          image={pageData.heroImage.fields.file.url}
          isLanding={true} >
          <div className="Landing-hero">
            <div className="Landing-header">
              <Link to="home" className="Landing-link" style={{display: 'inline'}}><Logo style={{position: 'relative', top: '0', height: 40, width: 48}} color="#fff" /></Link>
              <Button onClick={this.scrollToElement} style={{border: 0}} className="Landing-request" type="primary">
                <span className="Landing-request-text">Request Consultation</span>
                <img className="Landing-request-icon" src="../../public/images/chat-bubble-icon.svg"/>
              </Button>
            </div>
            <h1 className="Landing-title">
              {pageData.title}
            </h1>
            <h2 className="Landing-subtitle">
              {pageData.subTitle}
            </h2>
          </div>
        </Hero>
        <section className="Landing-container is-fixed">
          <div className="Landing-description">
            {pageData.description}
          </div>
          <div className="Landing-icons">
            {pageData.iconImages.map(image => (
              <div className="Landing-icon-container">
                <img className="Landing-icon" title={image.fields.title} src={image.fields.file.url} alt={image.fields.title} />
                <span className="Landing-icon-title">{image.fields.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="Landing-container">
          <div className="Landing-layer">
            <ul className="Landing-stats is-left">
              {leftStats.map(stat => (
                <li className="Landing-stat">
                  <div className="Landing-stat-number">{stat.number}</div>
                  <div className="Landing-stat-text">{stat.text}</div>
                </li>
              ))}
            </ul>
            <div className="Landing-layer-container">
              <div className="Landing-layer-image" style={{backgroundImage: `url(${pageData.bodyImage.fields.file.url})`}}/>
            </div>
          </div>
          <div className="Landing-layer">
            <div className="Landing-layer-container">
              <div className="Landing-layer-content">
                <h2 className="Landing-layer-title">
                  {pageData.bodyTitle}
                </h2>
                <div className="Landing-layer-description">
                  {pageData.bodyDescription}
                </div>
              </div>
            </div>
            <ul className="Landing-stats is-right">
              {rightStats.map(stat => (
                <li className="Landing-stat">
                  <div className="Landing-stat-number">{stat.number}</div>
                  <div className="Landing-stat-text">{stat.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="Landing-container is-fixed">
          <div className="Landing-clients">
            {clients.items.map(n => (
              <div className="Landing-client" key={n.name}>
                  <img className="Landing-client-image" title={n.name} src={n.image[0].fields.file.url} alt={n.image[0].fields.title} />
              </div>
            ))}
          </div>
        </section>
        <section className="Landing-footer">
          <section ref="contact" className="Landing-contact">
            <ContactForm campaign={pageData.title} formStyle={{margin: '0'}} header="Fill out the form below to consult with a Solutions Architect" labelColor="#fff" isLandingPage={true}/>
          </section>
        </section>
      </div>
    );
  }
}

Landing.propTypes = {
  clients: PropTypes.any.isRequired,
};

Landing.displayName = 'Landing';

export default Resolver.createContainer(Landing, {
  resolve: {
    clients() {
      return api(`contentful?content_type=client&limit=7`);
    },
    pageData(props) {
      return api(`contentful/info/${props.params.slug}`);
    },
  },
});

