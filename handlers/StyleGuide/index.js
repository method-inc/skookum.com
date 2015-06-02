require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Hero from 'Hero';
import Logo from 'Logo';
import Typography from 'Typography';
import Icon from 'Icon';
import Input from 'Input';
import Button from 'Button';

const defaultStyles = {boxSizing: 'border-box', display: 'inline-block', verticalAlign: 'top',};
const subheroStyles = {...defaultStyles, width: '33.333%',};
const logoStyles = {...defaultStyles, width: '25%', padding: '0.5em',};
const typographyStyles = {...defaultStyles, width: '50%',};
const littleTextStyle = {display: 'block', color: '#A7A7A7', fontSize: '0.75em', fontStyle: 'italic', fontWeight: 100, marginTop: '-0.5em',};

var uppercase = str => str[0].toUpperCase() + str.slice(1);

var titlecase = str =>
  str.split('-').reduce((s, c) => s + ' ' + uppercase(c), '');

class Section extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="StyleGuide-section">
        <h2 className="StyleGuide-section-title">{this.props.title}</h2>
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
          <div style={subheroStyles} key={n}>
            <Hero
              color={n.toLowerCase()}
              title={`${n} Header`}
              subtitle="White Text. Secondary (child) pages"
              image="/public/images/sputnick-engineer@1x.png"
            />
          </div>
        ))}
        <Section title="Logo & Colors" />
        {[['#000000', ''], ['#f16521', '#fff'], ['#faab18', '#fff'], ['#ffdd2e', '#000']].map(n => (
          <div style={{background: n[0], ...logoStyles}} key={n[0]}>
            <div style={{fontSize: '1.875em', color: n[1] || '#fff', fontWeight: 100, textTransform: 'uppercase',}}>{n[0]}</div>
            <div style={{width: '70%', margin: '1.5em auto'}}><Logo color={n[1]} /></div>
          </div>
        ))}
        <div style={{padding: '3em 1.5em', background: '#f4f4f4'}}>
          <div style={{fontSize: '1.875em', fontWeight: 100, textTransform: 'uppercase',}}>#f4f4f4</div>
        </div>
        <Section title="Typography">
          <div style={{...typographyStyles, paddingLeft: '5%', paddingRight: '5%',}}>
            <Typography type={Typography.PAGE_HEADER}>Page Header</Typography>
            <p style={littleTextStyle}>Lato Black. All Caps. 30px</p>
            <Typography type={Typography.PRIMARY_SECTION_HEADER}>Primary Section Header</Typography>
            <p style={littleTextStyle}>Lato Black. All Caps. 20px</p>
            <Typography type={Typography.SECONDARY_SECTION_HEADER}>Secondary Section Header</Typography>
            <p style={littleTextStyle}>Lato Black. All Caps. 30px</p>
          </div>
          <div style={{...typographyStyles, paddingRight: '5%',}}>
            <Typography type={Typography.TEXT} element='p'>This is a paragraph of text to play with typography. It’s practical, but let’s see what happens now. This is something we’ve done a few times to really understand the readability and communicate with our readers.</Typography>
            <p style={littleTextStyle}>Lato Regular. 16px. LH 30px</p>

            <Typography type={Typography.DESCRIPTION_TEXT} element='p'>This is a small description of text to play with typography. It’s practical, but let’s see what happens now.</Typography>
            <p style={littleTextStyle}>Lato Regular. 16px. LH 30px</p>

            <Typography type={Typography.EMPHASIZED_CAPTION}>Emphasized Caption</Typography>
            <p style={littleTextStyle}>Lato Light. 28px. LH 40px</p>

            <Typography type={Typography.MEDIUM_CAPTION}>Medium Caption</Typography>
            <p style={littleTextStyle}>Lato Regular. 16px. LH 20px</p>

            <Typography type={Typography.TINY_CAPTION}>Tiny Caption</Typography>
            <p style={littleTextStyle}>Lato Regular. 12px. LH 16px</p>

            <Typography type={Typography.QUOTE_CITATION}>Quote Citation</Typography>
            <p style={littleTextStyle}>Lato Medium Italic. 16px. LH 16px</p>

            <Typography type={Typography.LINK}>Link</Typography>
            <p style={littleTextStyle}>Lato Regular. All Caps. 12px.</p>
          </div>
        </Section>
        <Section title="Elements">
          <Input label="Form Label" />
          <Input label="Textarea Label" element="textarea" />
          <div style={subheroStyles}>
            <Button type="primary">Primary Button</Button>
          </div>
          <div style={subheroStyles}>
            <Button type="secondary">Secondary Button</Button>
          </div>
          <div style={subheroStyles}>
            <Button type="more">More Button</Button>
          </div>
        </Section>
        <Section title="Icons">
          {Icon.ICONS.map(i => (
            <div style={{display: 'inline-block', margin: '0 0.5em 0.5em 0',}}>
              <Icon icon={i} style={{verticalAlign: 'middle'}} />
              <span style={{verticalAlign: 'middle'}}>{titlecase(i)}</span>
            </div>
          ))}
        </Section>
      </div>
    );
  }
}

StyleGuide.propTypes = {};
StyleGuide.displayName = 'StyleGuide';

export default StyleGuide;

