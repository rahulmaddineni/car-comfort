import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.25;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
`;

function Header() {
  return <Wrapper>Car Comfort</Wrapper>;
}

Header.propTypes = {};

export default Header;
