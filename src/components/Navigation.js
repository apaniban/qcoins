import React, {PureComponent} from 'react';
import styled from 'styled-components';

class Navigation extends PureComponent {

  render() {
    const {label, location} = this.props;

    return (
      <Container>
        {label && location && <Item href={location}>{label}</Item>}
        <Cancel href='/'>X</Cancel>
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Link = styled.a`
  text-decoration: none;
  opacity: 0.5;

  &:visited {
    color: white;
    text-decoration: none;
  }
`

const Cancel = Link.extend`
  grid-column: 2 / span 1;
  place-self: flex-end;
`

const Item = Link.extend`
  grid-column: 1 / span 1;
`;

export default Navigation;
