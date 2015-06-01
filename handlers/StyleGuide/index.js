import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import Logo from 'Logo';

const subheroStyles = {boxSizing: 'border-box', width: '33.333%', display: 'inline-block',};
const logoStyles = {boxSizing: 'border-box', width: '25%', display: 'inline-block', padding: '0.5em',};

class Section extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Styleguide-section">
        <h2 className="Styleguide-section-title">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

class StyleGuide extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="StyleGuide">
        <Hero
          color="black"
          title="Black Header"
          subtitle="White Text. Main (parent) pages"
          image="/public/images/sputnick-engineer@1x.png"
        />
        {['Red', 'Orange', 'Yellow'].map(n => (
          <div style={subheroStyles}>
            <Hero
              color={n.toLowerCase()}
              title={`${n} Header`}
              subtitle="White Text. Secondary (child) pages"
              image="/public/images/sputnick-engineer@1x.png"
            />
          </div>
        ))}
        <Section title="Logo & Colors">
          {[['#000000', ''], ['#f16521', '#fff'], ['#faab18', '#fff'], ['#ffdd2e', '#000']].map(n => (
            <div style={{background: n[0], ...logoStyles}}>
              <div style={{fontSize: '1.875em', color: n[1] || '#fff', fontWeight: 100, textTransform: 'uppercase',}}>{n[0]}</div>
              <div style={{width: '70%', margin: '1.5em auto'}}><Logo color={n[1]} /></div>
            </div>
          ))}
          <div style={{padding: '3em 1.5em', background: '#f4f4f4'}}>
            <div style={{fontSize: '1.875em', fontWeight: 100, textTransform: 'uppercase',}}>#f4f4f4</div>
          </div>
        </Section>
      </div>
    );
  }
}

StyleGuide.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

StyleGuide.displayName = 'StyleGuide';

export default Resolver.createContainer(StyleGuide, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
