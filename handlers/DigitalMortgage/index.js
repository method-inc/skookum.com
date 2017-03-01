require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import ContactForm from 'ContactForm';

class DigitalMortgage extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="DigitalMortgage">
        <header className="hero">

          <div className="logo">
            <a href="/">
              <img src="public/digitalmortgage/imgs/skookum_hori_white.png" />
            </a>
          </div>
          <div className="wrapper">
            <h1>Imagine and accelerate your evolution into a digital mortgage company.</h1>

            <div className="button">
              <a className="left" href="#getstarted">Get Started</a>
            </div>

          </div>


        </header>

        <div className="wrapper">

          <div className="section">
            <p><span>Skookum provides custom design and development services to create state-of-the-art, engaging, self-service web and mobile loan origination experiences for lenders and their customers.</span></p>
            <hr/>
          </div>


          <div className="section">
            <div className='embed-container'>
              <iframe src="https://player.vimeo.com/video/204053763" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
            <h2>Expertise Means Faster Time to Value.</h2>
            <div className="column-container">
              <p className="col col-1">As a collaborator in the process of developing Ellie Mae’s Encompass Consumer Connect™ solution, Skookum possesses deep knowledge of the Encompass Lending Platform™ APIs. This expertise enables us to help lenders extend the value of the platform by seamlessly integrating Encompass with external systems and data, and rapidly building and deploying custom applications.</p>
              <img src="public/digitalmortgage/imgs/EM_PRO_select_logo.png" className="col col-2"/>
            </div>
          </div>


          <div className="paper">
            <h2>Benefits of Custom Digital Mortgage Solutions</h2>
            <h3>Gain competitive advantage</h3>
            <hr/>
            <h3>Capture customer information and quickly convert applications to loans</h3>
            <hr/>
            <h3>Speed integration and time to market</h3>
            <hr/>
            <h3>Customize the mortgage application process and increase transparency</h3>
            <hr/>
            <h3>Operate more efficiently</h3>
            <hr/>
          </div>


          <div className="section">
            <h2>Our Approach</h2>
            <h3>Strategy &nbsp;&nbsp;| &nbsp;&nbsp;Design &nbsp;&nbsp;| &nbsp;&nbsp;Technology</h3>
            <p>We know that every organization is unique. That’s why regardless of where you’re at in the process of digital evolution, our team can help. From business strategy, technology assessment, user experience design, to rapid software development and delivery, we enable borrower self-service, 360 degree application lifecycle visibility and control, and more efficient collaboration between loan officers
            </p>
          </div>


          <div className="section">
            <h3>Our Process</h3>
            <img src="public/digitalmortgage/imgs/ourProcess.png" className="fullgraphic"/>
          </div>


          <div className="paper">
            <h2>Additional Materials</h2>
            <h3>For Mortgage Lenders, The Future Means Acing The Customer Experience</h3>
            <div className="button">
              <a href="http://skookum.com/blog/For_Mortgage_Lenders_The_Future_Means_Acing_The_Customer_Experience" target="_blank">Read Article</a>
            </div>
            <hr/>
            <h3>Read our brochure</h3>
            <a href="public/digitalmortgage/imgs/SkookumExperience.pdf" target="_blank">
              <img src="public/digitalmortgage/imgs/download.svg" className="item-content"/>
              <p className="item-content">Download the PDF</p>
            </a>
          </div>

        </div>

          <div className="cta" id="getstarted">
            <div className="section">
              <div className="Contact-flex">
                <ContactForm header="Let's Talk" labelColor="#282c34" />
              </div>
            </div>
          </div>
          <footer>
            <div className="logo">
              <img src="public/digitalmortgage/imgs/skookum_hori_white.png" />
              <img src="public/digitalmortgage/imgs/EM_PRO_select_logo.png" />
            </div>
              <h4>Encompass®, Encompass Consumer Connect™ and Encompass Lending Platform™ are registered trademarks of Ellie Mae, Inc.</h4>
          </footer>
        </div>
    );
  }
}

DigitalMortgage.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

DigitalMortgage.displayName = 'DigitalMortgage';

export default Resolver.createContainer(DigitalMortgage, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
