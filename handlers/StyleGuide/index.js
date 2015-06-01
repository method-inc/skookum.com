import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';

const subheroStyles = {boxSizing: 'border-box', width: '33.333%', display: 'inline-block',};

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
