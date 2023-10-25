import React from 'react';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        LoginPage
        <small>OOI</small>
      </Title>
      <p>
        LoremAute sint ullamco aute proident eu dolore consectetur non enim aute
        reprehenderit velit.
      </p>
      <button type="button">Submit</button>
    </Container>
  );
}
