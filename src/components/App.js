import React from 'react';
import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
// import Section from './Section';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} title="Upload stats" />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}> </TransactionHistory>
    </>
  );
}
