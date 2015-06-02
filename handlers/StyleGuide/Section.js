import React from 'react';

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

export default Section;
