import React, {PureComponent} from 'react';
import styled from 'styled-components';

class Navigation extends PureComponent {

  render() {
    const {label, withCancel} = this.props;

    return (
      <Container>
        {label && <Label>{label}</Label>}
        {withCancel && <Cancel href='/'>X</Cancel>}
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
  font-size: 14px;
  letter-spacing: 1px;
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

const Label = Link.extend`
  grid-column: 1 / span 1;
  font-size: 12px;
  text-transform: uppercase;
`;

export default Navigation;
