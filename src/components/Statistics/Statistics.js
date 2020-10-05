import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Container,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './styles';

function Statistics({ stats, title }) {
  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}

        <List>
          {stats.map(stat => (
            <ListItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </ListItem>
          ))}
        </List>
      </Container>
    </Section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
