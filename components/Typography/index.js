/** @flow */

require('./styles.css');

import React, {Component, PropTypes} from 'react';

const classMap = {
  'PAGE_HEADER': 'is-title',
  'PRIMARY_SECTION_HEADER': 'is-primary-header',
  'SECONDARY_SECTION_HEADER': 'is-secondary-header',
  'TEXT': 'is-text',
  'DESCRIPTION_TEXT': 'is-description',
  'EMPHASIZED_CAPTION': 'is-emphasized-caption',
  'MEDIUM_CAPTION': 'is-caption',
  'TINY_CAPTION': 'is-tiny-caption',
  'QUOTE_CITATION': 'is-quote',
  'LINK': 'is-link', // Lato Black. All Caps. 12px. LH 12px
}

class Typography extends Component {
  render(): ?ReactElement {
    var {
      className = '',
      type,
      children,
      ...props,
    } = this.props;

    return (
      <this.props.element {...props} className={`Typography ${className} ${classMap[type]}`}>
        {children}
      </this.props.element>
    );
  }
}

const styles = [
  'PAGE_HEADER',
  'PRIMARY_SECTION_HEADER',
  'SECONDARY_SECTION_HEADER',
  'TEXT',
  'DESCRIPTION_TEXT',
  'EMPHASIZED_CAPTION',
  'MEDIUM_CAPTION',
  'TINY_CAPTION',
  'QUOTE_CITATION',
  'LINK',
].forEach(n => (Typography[n] = n));

Typography.propTypes = {
  type: PropTypes.oneOf(styles),
};

Typography.defaultProps = {
  element: 'div',
};

export default Typography;
