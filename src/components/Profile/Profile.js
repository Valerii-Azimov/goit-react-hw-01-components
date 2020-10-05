import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Description,
  Container,
  Img,
  Name,
  Tag,
  StatsListItem,
  StatsList,
  Label,
  Value,
} from './styles';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <>
      <Section>
        <Container>
          <Description>
            <Img src={avatar} alt="user avatar" />
            <Name>{name}</Name>
            <Tag>@{tag}</Tag>
            <Tag>{location}</Tag>
          </Description>
          <StatsList>
            <StatsListItem>
              <Label>Followers</Label>
              <Value>{stats.followers}</Value>
            </StatsListItem>
            <StatsListItem>
              <Label>Views</Label>
              <Value>{stats.views}</Value>
            </StatsListItem>
            <StatsListItem>
              <Label>Likes</Label>
              <Value>{stats.likes}</Value>
            </StatsListItem>
          </StatsList>
        </Container>
      </Section>
    </>
  );
}

Profile.defaultProps = {
  avatar:
    'https://dummyimage.com/128x128/2a2a2a/ffffff&text=Product+image+placeholder',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
