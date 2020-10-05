import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Status, Img, Name } from './Styles';

function FriendList({ friends, isOnline }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}></Status>
          <Img src={friend.avatar} alt="" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired,
  ),
};

export default FriendList;
