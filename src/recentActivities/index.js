import React, {PureComponent} from 'react'
import styled from 'styled-components';

/* Sorry */
const activities = [{
  vendor: 'Toby\'s Estate',
  item: 'Hot Chocolate',
  price: '- 499'
}, {
  vendor: 'Apple Sydney',
  item: 'iPhone X 64B',
  price: '- 20,000'
}];

class RecentActivities extends PureComponent {

  render() {
    return (
      <Container>
        <Header><span>Recent Activity</span><div/></Header>
        <Activities>
          {
            activities.map((activity, key) =>
              <Item key={key}>
                <Left>
                  <div>{activity.vendor}</div>
                  <div>{activity.item}</div>
                </Left>
                <Right>{activity.price}</Right>
              </Item>
            )
          }
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

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
`;

const Left = styled.div`
  > div:nth-child(1) {
    padding-bottom: 5px;
    font-size: 15px;
    font-family: Ciutadella-Bold;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }
`;

const Right = styled.div`
  justify-self: flex-end;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 500;
`;

export default RecentActivities;
