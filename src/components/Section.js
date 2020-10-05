import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title } from './SectionStyles';

function Section({ title, children }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
