import React from 'react';
import TopMenu from '../components/TopMenu';
import BottomMenu from '../components/BottomMenu';
import Middle from '../components/Middle';

export default class LuckyBelly extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <BottomMenu/>
        </div>
    );
  }
}