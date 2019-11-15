import React from "react";

import logo from '../assets/logo.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Main = () => (
  <Container>
    <img src={logo} alt="Logo GitHub Compare" />

    <form>
      <input type="text" placeholder="Usuário / Repositório" />
      <button type="submit">OK</button>
    </form>
  </Container>
);

export default Main;
