import React, {PureComponent} from 'react'
import styled from 'styled-components';

class RecentActivities extends PureComponent {

  render() {
    return (
      <Container>
        <Header><span>Recent Activity</span><div/></Header>
        <Activities>
          <li>Test</li>
          <li>Test</li>
        </Activities>
      </Container>
    );
  }
}

const Container = styled.div`
  min-height: 300px;
  padding-top: 30px;
`;

const Header = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  opacity: 0.5;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > span {
    padding-right: 20px;

  }

  > div {
    flex: 1;
    border-bottom: 1px solid white;

  }

`

const Activities = styled.ul`
  margin: 0;
  padding-top: 10px;
  padding-left: 0;
  list-style-type: none;
  opacity: 0.8;
  font-size: 14px;

  > li {
    padding: 15px 0;
  }
`;

export default RecentActivities;
